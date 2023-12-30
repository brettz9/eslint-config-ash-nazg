/* eslint quotes: ["error", "single"] -- not using JSON.stringify here */
/* eslint-disable n/no-sync, no-console -- build script so sync and
    console ok */
/* eslint-disable jsdoc/imports-as-dependencies -- Bug? */

// Todo: Update for flat configs!

// Note: we don't have an "unused:standard" script as it directly imports
//  all rules

import 'eslint'; // Needed by eslint-plugin-html
import fs from 'fs';
import {fileURLToPath} from 'url';
import {join, dirname} from 'path';
import cc from '@scottnonnenberg/eslint-compare-config';

const __dirname = dirname(fileURLToPath(import.meta.url));

const [, , type, rightModule, preferredConfig, config2] = process.argv;

const isInherited = type === 'inherited';

// eslint-compare-config doesn't handle comparisons for extensions
//  that inherit one another (see https://github.com/scottnonnenberg/eslint-compare-config/issues/7 ),
//  so we build ourselves (regular `getConfigSync` method also seems
//  to have problems loading our plugins anyways)

const left = {
  rules: {
    ...(isInherited && rightModule !== '@eslint/js/src/configs/eslint-all'
      ? null
      : cc.getLiteralConfigSync('explicitly-unused.js').rules
    ),
    ...cc.getLiteralConfigSync('main.js').rules,
    ...cc.getLiteralConfigSync('node.js').rules,
    ...cc.getLiteralConfigSync('sauron.js').rules,
    ...cc.getLiteralConfigSync('sauron-node.js').rules,
    ...cc.getLiteralConfigSync('great-eye.js').rules,
    ...cc.getLiteralConfigSync('great-eye-node.js').rules,
    ...(!isInherited && rightModule === 'eslint-plugin-n'
      ? {
        ...cc.getLiteralConfigSync(
          // Use this until resume including remote `standard`
          'standard.js'
          // join(__dirname, 'implicitly-included', getModulePath(
          //   'eslint-config-standard'
          // ))
        ).rules
      }
      : {}
    ),
    ...(rightModule === '@eslint/js/src/configs/eslint-all'
      ? {
        ...cc.getLiteralConfigSync(
          'node_modules/@eslint/js/src/configs/eslint-recommended.js'
        ).rules,
        // Adds `no-process-exit`
        ...cc.getLiteralConfigSync(
          join(__dirname, 'implicitly-included', getModulePath(
            'eslint-plugin-n', 'recommended-module', true
          ))
        ).rules
      }
      : null),
    ...(rightModule === '@eslint/js/src/configs/eslint-recommended' ||
      (!isInherited && rightModule === '@eslint/js/src/configs/eslint-all')
      ? {
        ...cc.getLiteralConfigSync(
          // Use this until resume including remote `standard`
          'standard.js'
          // join('./node_modules/', 'eslint-config-standard')
        ).rules
      }
      : (rightModule === 'eslint-config-standard'
        ? {}
        : cc.getLiteralConfigSync(
          'node_modules/@eslint/js/src/configs/eslint-recommended.js'
        ).rules)
    ),
    ...(!isInherited && config2
      ? cc.getLiteralConfigSync(
        join(__dirname, 'implicitly-included', getModulePath(
          config2
        ))
      ).rules
      : null),
    ...(isInherited || !preferredConfig || preferredConfig === '-'
      ? null
      // We do not want inherited treated as unused, so add these so
      //   they will be excluded by the comparison too
      : cc.getLiteralConfigSync(
        join(__dirname, 'implicitly-included', getModulePath(
          rightModule, preferredConfig, true
        ))
      ).rules
    )
  }
};

const right = cc.getLiteralConfigSync(join('./node_modules/', rightModule));

/** @type {{[key: string]: import('eslint').Linter.Config}} */
const cache = {};
/**
 *
 * @param {import('eslint').Linter.Config} config
 * @returns {import('eslint').Linter.Config}
 */
function getExtensions (config) {
  if (!config.extends) {
    return {};
  }

  return (
    typeof config.extends === 'string' ? [config.extends] : config.extends
  ).reduce((obj, extension) => {
    // Todo: This should support external extensions, but have no need now
    // No cyclic detection
    extension = extension.replace(/plugin:.*\//u, '');
    if (!right.configs[extension]) {
      if (cache[preferredConfig]) {
        return obj;
      }
      cache[preferredConfig] = right.configs[preferredConfig];
      // Todo: We are missing some as a result of this; evident in
      //  @brettz9/eslint-plugin which imports
      return {
        ...obj,
        ...getExtensions(right.configs[preferredConfig]),
        ...right.configs[preferredConfig].rules
      };
    }
    return {
      ...obj,
      ...getExtensions(right.configs[extension]),
      ...right.configs[extension].rules
    };
  }, {});
}

if (
  preferredConfig && right.configs && right.configs[preferredConfig].extends
) {
  // Since we're being forced to copy literal config, we have to add this
  //  manually (used in `array-func/all`):
  right.configs[preferredConfig].rules = {
    ...getExtensions(right.configs[preferredConfig]),
    ...right.configs[preferredConfig].rules
  };
  console.log('right.configs', preferredConfig, right.configs);
}

// console.log('left', left); throw new Error('exit');

const prefix = rightModule.replace(/eslint-plugin-/u, '');

const rightConfig = isInherited &&
  // If we are checking inherited, some configs, like "standard", are not rule
  //   functions but are just the rules with "error", etc., but we also want
  //   these treated as included (through `right.rules`); however, other
  //   configs like "no-use-extend-native" are missing rules
  typeof Object.values(right.rules || {})[0] !== 'string'
// rightModule.includes('plugin')
  ? (right.configs && right.configs[preferredConfig]) || {rules: {}}
  // Get all rules when seeing which are unused
  : {rules: Object.keys(right.rules || {}).reduce((obj, ruleName) => {
    obj[prefix + '/' + ruleName] = 'error'; // Just add something
    return obj;
  }, /** @type {{[key: string]: "error"}} */ ({}))};

// Without this block, these configs/plugins were including their prefixes
//   in the rules (redundantly):
// 1. inherited: standard

Object.entries(rightConfig.rules).forEach(([key, val]) => {
  let keyReplaced = key;
  if (key.startsWith(rightModule + '/')) {
    delete rightConfig.rules[key];
    keyReplaced = key.replace(rightModule + '/', '');
    rightConfig.rules[keyReplaced] = val;
  }
  if (val === 'off' || val[1] === 'off') {
    delete rightConfig.rules[keyReplaced];
  }
});

// console.log(
//   'rightConfig',
//   Object.keys(rightConfig.rules).filter((r) => r.match(/eslint-config/))
// );

if (isInherited) {
  // We don't want to show as inherited those which we override
  const leftRules = Object.keys(left.rules);
  console.log('leftRules', leftRules);

  Object.keys(rightConfig.rules).forEach((key) => {
    if (leftRules.includes(key)) {
      if (
        // Not a problem if regular eslint (as already reviewed)
        key.includes('/') &&
        // Not a problem for jsdoc which we've reviewed
        !key.includes('jsdoc') &&
        // Not a problem if overriding
        left.rules[key] !== 'off' &&
        left.rules[key][0] !== 'off' &&
        // Probably not a problem if has options (likely non-default)
        !left.rules[key][1]
      ) {
        throw new Error(
          'k' + '::' + key + '::' + JSON.stringify(left.rules[key])
        );
      }
      const replacedKey = key.replace(rightModule + '/', '');
      delete rightConfig.rules[replacedKey];
    }
  });
} else {
  let rulesMissingFromLeft;
  try {
    ({rulesMissingFromLeft} = cc.getDifferencesSync(left, rightConfig));
  } catch (err) {
    console.error(err);
    const error = new Error('rightConfig');
    console.error(rightModule);
    console.error(rightConfig);
    throw error;
  }
  /*
  const rulesMissingFromLeft = Object.entries(
    rightConfig.rules
  ).filter(([ruleName, ruleValue]) => {
    return !(ruleName in left.rules);
  });
  */

  // `rulesMissingFromLeft` only gives an array
  Object.keys(rightConfig.rules).forEach((key) => {
    if (!rulesMissingFromLeft.includes(key)) {
      delete rightConfig.rules[key.replace(rightModule + '/', '')];
    }
  });
  console.log('rulesMissingFromLeft', rulesMissingFromLeft);
}

// console.log('left', left);
console.log('rightConfig', rightConfig);

if (isInherited || Object.keys(rightConfig.rules).length) {
  const inheritedPath = join(
    __dirname,
    isInherited ? 'implicitly-included' : 'unused',
    getModulePath(rightModule, preferredConfig, isInherited)
  );

  // eslint-disable-next-line n/prefer-promises/fs -- needs higher Node version
  fs.writeFile(
    inheritedPath,
    '"use strict";\nmodule.exports = {\n  rules: ' +
      JSON.stringify(
        rightConfig.rules, null, 2
      ).replaceAll('\n', '\n  ') + '\n};\n',
    // eslint-disable-next-line @stylistic/max-len -- Long
    // eslint-disable-next-line promise/prefer-await-to-callbacks -- needs higher Node version to avoid
    (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('Wrote', inheritedPath);
    }
  );
  // console.log('rulesMissingFromLeft', right.rules);
}

/**
 * @param {string} rtModule
 * @param {string} [preferredCfg]
 * @param {boolean} [isInheritd]
 * @returns {string}
 */
function getModulePath (rtModule, preferredCfg, isInheritd) {
  return rtModule.replace(
    /(?:eslint-(?:config|plugin)-)?/u,
    ''
  ).replaceAll('/', '_') +
    (isInheritd && preferredCfg && preferredCfg !== '-'
      ? '-' + preferredCfg
      : ''
    ) + '.js';
}
