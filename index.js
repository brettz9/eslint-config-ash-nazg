/* eslint-disable jsdoc/imports-as-dependencies -- Bug */
// Todo: Add TS config, including for use with JS!
// eslint-disable-next-line n/no-sync -- No async configs
import {readFileSync} from 'fs';

import globals from 'globals';

import {languageOptions} from './detectEnv.js';
import greatEyeNode from './great-eye-node.js';
import greatEye from './great-eye.js';
import sauronNode from './sauron-node.js';
import sauron from './sauron.js';
import node from './node.js';
import main from './main.js';
import polyglot from './polyglot.js';
import bare from './bare.js';

import scriptNode from './script-node.js';
import script from './script.js';
import overrides from './overrides.js';
import browser from './browser.js';
import cypress from './cypress.js';
import mochaPlus from './mocha-plus.js';

import babel from './babel.js';
import thirdParty from './third-party.js';

/**
 * @param {import('eslint').Linter.FlatConfig|
*   import('eslint').Linter.FlatConfig[]} cfgs
* @param {string[]} files
* @returns {import('eslint').Linter.FlatConfig|
*    import('eslint').Linter.FlatConfig[]
* }
*/
export function addFiles (cfgs, files) {
  if (Array.isArray(cfgs)) {
    return cfgs.map((cfg) => {
      cfg.files = files;
      return cfg;
    });
  }
  cfgs.files = files;
  return cfgs;
}

/**
 * @type {{
 *   type?: "module"|"commonjs",
 *   browserslist?: string[]
 * }}
 */
let pkg;
try {
  /* eslint-disable n/no-sync -- No async */
  // @ts-expect-error JSON.parse can handle Buffer
  pkg = JSON.parse(readFileSync('./package.json'));
  /* eslint-enable n/no-sync -- No async */
} catch (err) {
  // eslint-disable-next-line no-console -- CLI
  console.log('Error', err);
}

/**
 * @typedef {("great-eye"|"sauron"|"saruman"|
 *   "polyglot"|"bare"|"node"|"browser"|
 *   "script"|"module"|
 *   "no-overrides"|
 *   "no-cypress"|"mocha"|
 *   "babel"|"third-party")[]} Types
 */

// Todo: How to figure if main code is being compiled (could check/load Babel
//        and/or Rollup files, but a bit imperfect) so can safely use latest
//        `ecmaVersion` even for `polyglot`/`bare` which can't rely on
//        `engines`? Can use `polyglot` folder without disabling overrides and
//            manually apply `ecmaVersion: 'latest'` to it
//        `escompat` should handle for browser at least, with high default
//        `ecmaVersion` of its own:
//        https://github.com/keithamus/eslint-plugin-escompat/issues/25
/**
 * @param {Types} types
 * @param {import('eslint').Linter.FlatConfig} [config]
 */
export default function index (types, config) {
  /** @type {import('eslint').Linter.FlatConfig[]} */
  const configs = [];

  if (types.includes('babel')) {
    return [babel(/** @type {import('eslint').Linter.FlatConfig} */ (config))];
  }

  if (types.includes('third-party')) {
    return thirdParty;
  }

  if (types.includes('great-eye')) {
    if (types.includes('node')) {
      configs.push(...greatEyeNode(pkg), {
        languageOptions
      });
    } else {
      configs.push(...greatEye(pkg));
    }
  } else if (types.includes('sauron')) {
    if (types.includes('node')) {
      configs.push(...sauronNode(pkg), {
        languageOptions
      });
    } else {
      configs.push(...sauron(pkg));
    }
  // basic config ("saruman") is the default
  } else if (types.includes('node')) {
    configs.push(...node(pkg), {
      languageOptions
    });
  } else {
    configs.push(...main(pkg));
  }

  // `polyglot` is default, with polyglot stricter than either Node
  //    or browser as only accepts common globals; remember too that
  //    we have overrides for browser-specific and Node-specific
  //    directories
  if (types.includes('bare')) {
    configs.push(...bare);
  } else if (!types.includes('node') && !types.includes('browser')) {
    configs.push(...polyglot);
  }

  if (types.includes('script') || pkg.type !== 'module') {
    if (types.includes('node')) {
      configs.push(...scriptNode);
    } else {
      configs.push(...script);
    }
  }

  if (!types.includes('no-overrides')) {
    configs.push(...overrides(types, pkg));
  }

  if (types.includes('browser')) {
    if (!pkg.browserslist) {
      // Can't detect for overrides though, as that may not actually be
      //   using the browser-specific overrides
      throw new Error(
        'You have opted in for a browser-based config, but you have ' +
        'not specified a `browserslist` in your `package.json`, e.g., ' +
        'to `["cover 99.5%"]`.'
      );
    }
    configs.push(...browser);
    if (types.includes('node')) {
      configs.push({
        languageOptions: {
          globals: globals['shared-node-browser']
        }
      });
    } else {
      configs.push({
        languageOptions: {
          globals: globals.browser
        }
      });
    }
  }

  if (!types.includes('no-cypress')) {
    configs.push(...cypress);
  } else if (types.includes('mocha')) {
    configs.push(...mochaPlus);
  }

  return configs;
}
