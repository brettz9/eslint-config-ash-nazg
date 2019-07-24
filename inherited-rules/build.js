/* eslint quotes: ["error", "single"] */

// Note: we don't have an "unused:standard" script as it directly imports all rules

import 'eslint'; // Needed by eslint-plugin-html
import fs from 'fs';
import {join} from 'path';
import cc from '@scottnonnenberg/eslint-compare-config';

const [, , type, rightModule, preferredConfig, config2] = process.argv;

const isInherited = type === 'inherited';

// eslint-compare-config doesn't handle comparisons for extensions
//  that inherit one another (see https://github.com/scottnonnenberg/eslint-compare-config/issues/7 ),
//  so we build ourselves (regular `getConfigSync` method also seems
//  to have problems loading our plugins anyways)

const left = {
  rules: {
    ...(isInherited && rightModule !== 'eslint/conf/eslint-all'
      ? null
      : cc.getLiteralConfigSync('explicitly-unused.js').rules
    ),
    ...cc.getLiteralConfigSync('index.js').rules,
    ...cc.getLiteralConfigSync('node.js').rules,
    ...cc.getLiteralConfigSync('sauron.js').rules,
    ...cc.getLiteralConfigSync('sauron-node.js').rules,
    ...cc.getLiteralConfigSync('great-eye.js').rules,
    ...cc.getLiteralConfigSync('great-eye-node.js').rules,
    ...(rightModule === '@mysticatea/eslint-plugin'
      ? {
        ...cc.getLiteralConfigSync(
          join(__dirname, 'implicitly-included', getModulePath(
            'eslint-config-standard'
          ))
        ).rules,
        // Adds `no-process-exit`
        ...cc.getLiteralConfigSync(
          join(__dirname, 'implicitly-included', getModulePath(
            'eslint-plugin-node', 'recommended-module', true
          ))
        ).rules
      }
      : null),
    ...(rightModule === 'eslint/conf/eslint-all'
      ? {
        ...cc.getLiteralConfigSync(
          'node_modules/eslint/conf/eslint-recommended.js'
        ).rules,
        // Adds `no-process-exit`
        ...cc.getLiteralConfigSync(
          join(__dirname, 'implicitly-included', getModulePath(
            'eslint-plugin-node', 'recommended-module', true
          ))
        ).rules
      }
      : null),
    ...(rightModule === 'eslint/conf/eslint-recommended' ||
      (!isInherited && rightModule === 'eslint/conf/eslint-all')
      ? {
        /*
        // Todo: This has no effect due to need to process `extends` as below;
        //   we're not using now anyways as we've disabled auto-inheriting from
        //   `es2019`
        ...cc.getLiteralConfigSync(
          join('./node_modules/', '@mysticatea/eslint-plugin')
        ).configs.es2019.rules,
        */
        ...cc.getLiteralConfigSync(
          join('./node_modules/', 'eslint-config-standard')
        ).rules
      }
      : (rightModule === 'eslint-config-standard'
        ? {}
        : cc.getLiteralConfigSync(
          'node_modules/eslint/conf/eslint-recommended.js'
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

function getExtensions (config) {
  if (!config.extends) {
    return [];
  }
  return config.extends.reduce((obj, extension) => {
    // Todo: This should support external extensions, but have no need now
    // No cyclic detection
    extension = extension.replace(/plugin:.*\//, '');
    return {
      ...obj,
      ...getExtensions(right.configs[extension]),
      ...right.configs[extension].rules
    };
  }, {});
}

if (preferredConfig && right.configs && right.configs[preferredConfig].extends) {
  // Since we're being forced to copy literal config, we have to add this
  //  manually (used in `array-func/all`):
  right.configs[preferredConfig].rules = {
    ...getExtensions(right.configs[preferredConfig]),
    ...right.configs[preferredConfig].rules
  };
  console.log('right.configs', preferredConfig, right.configs);
}

// console.log('left', left); throw new Error('exit');

const prefix = rightModule.replace(/eslint-plugin-/, '');

const rightConfig = isInherited &&
  // If we are checking inherited, some configs, like "standard", are not rule
  //   functions but are just the rules with "error", etc., but we also want these
  //   treated as included (through `right.rules`); however, other configs like
  //   "no-use-extend-native" are missing rules
  typeof Object.values(right.rules || {})[0] !== 'string'
  // rightModule.includes('plugin')
  ? right.configs && right.configs[preferredConfig] || {rules: {}}
  // Get all rules when seeing which are unused
  : {rules: Object.keys(right.rules || {}).reduce((obj, ruleName) => {
    obj[prefix + '/' + ruleName] = 'error'; // Just add something
    return obj;
  }, {})};

// Without this block, these configs/plugins were including their prefixes
//   in the rules (redundantly):
// 1. inherited: standard
// 2. unused: @mysticatea/eslint-plugin

Object.entries(rightConfig.rules).forEach(([key, val]) => {
  let keyReplaced = key;
  if (key.startsWith(rightModule + '/')) {
    delete rightConfig.rules[key];
    keyReplaced = key.replace(rightModule + '/', '');
    if (!isInherited &&
      rightModule === '@mysticatea/eslint-plugin' && !keyReplaced.includes('/')
    ) {
      // For some reason, we need to add this back
      keyReplaced = '@mysticatea/' + keyReplaced;
    }
    rightConfig.rules[keyReplaced] = val;
  }
  if (val === 'off' || val[1] === 'off') {
    delete rightConfig.rules[keyReplaced];
  }
});
if (!isInherited && !preferredConfig && rightModule === '@mysticatea/eslint-plugin') {
  /*
  We removed `2019` from the end of the `@mysticatea/eslint-plugin` unused
  `package.json` script as we had to manually add the rules we wanted (see
  the comment at the top of this project's root `index.js`) since none of its
  configs (including the `2019` config which might otherwise be ideal) expose
  all rules (and only those rules) which are unique to the plugin.
  We do the following show which items are unused.
  To show which items if we were extending it, one can run `unused:@mysticatea-old`,
  but we are not adding this to the regular `unused` script as we don't want
  to show its items as unused (as we are not extending es2019).
  */
  Object.keys(rightConfig.rules).forEach((rule) => {
    // We are not interested in including rules it adds from other configs,
    //   since we're currently not extending one of its configs.
    if (!rule.startsWith('@mysticatea/') && rule.includes('/')) {
      delete rightConfig.rules[rule];
    }
  });
}

// console.log('rightConfig', Object.keys(rightConfig.rules).filter((r) => r.match(/eslint-config/)));

if (isInherited) {
  // We don't want to show as inherited those which we override
  let leftRules = Object.keys(left.rules);
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
        throw new Error('k' + '::' + key + '::' + JSON.stringify(left.rules[key]));
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
    throw new Error('rightConfig', rightModule, rightConfig);
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
  fs.writeFile(
    inheritedPath,
    'module.exports = {\n  rules: ' + JSON.stringify(rightConfig.rules, null, 2).replace(/\n/g, '\n  ') + '\n};\n',
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

function getModulePath (rightModule, preferredConfig, isInherited) {
  return rightModule.replace(
    /(?:eslint-(?:config|plugin)-)?/,
    ''
  ).replace(/\//g, '_') +
    (isInherited && preferredConfig && preferredConfig !== '-'
      ? '-' + preferredConfig
      : ''
    ) + '.js';
}
