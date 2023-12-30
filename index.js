/* eslint-disable jsdoc/imports-as-dependencies -- Bug */
// Todo: Add TS config, including for use with JS!

import globals from 'globals';

import {languageOptions} from './detectEnv.js';
import greatEyeNode from './great-eye-node.js';
import greatEye from './great-eye.js';
import sauronNode from './sauron-node.js';
import sauron from './sauron.js';
import node from './node.js';
import main from './main.js';

import scriptNode from './+script-node.js';
import script from './+script.js';
import rc from './rc.js';
import browser from './browser.js';
import cypress from './cypress.js';
import mochaPlus from './mocha-plus.js';

import babel from './+babel.js';
import thirdParty from './eslint.config.3rdparty.js';

// Todo: Detect script automatically for configs too; add module as option
// Todo: determine that `polyglot` is default, or require node, polyglot
//        or browser? Make need for "basic" explicit or as the default?
//        Remember that polyglot is stricter than either Node or browser
//        as only accepts common globals
// Todo: Make browser dependent by default on specific folder (`public`,
//        `demo`?)
// Todo: Detect `browserlist` for browser setting, or use that to determine
//        whether to apply the browser settings
// Todo: How to figure if main code is being compiled (could check/load Babel
//        and/or Rollup files, but a bit imperfect) so can safely use
//        latest ecmaVersion? What about cases that can't be polyfilled?
/**
 * @param {("great-eye"|"sauron"|"basic"|
 *   "node"|"polyglot"|"browser"|
 *   "script"|"module"|
 *   "rc"|
 *   "cypress"|"mocha"|
 *   "babel"|"third-party")[]} types
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
      configs.push(...greatEyeNode, {
        languageOptions
      });
    } else {
      configs.push(...greatEye);
    }
  } else if (types.includes('sauron')) {
    if (types.includes('node')) {
      configs.push(...sauronNode, {
        languageOptions
      });
    } else {
      configs.push(...sauron);
    }
  } else if (types.includes('node')) {
    configs.push(...node, {
      languageOptions
    });
  } else {
    configs.push(...main);
  }

  if (types.includes('script')) {
    if (types.includes('node')) {
      configs.push(...scriptNode);
    } else {
      configs.push(...script);
    }
  }

  if (types.includes('rc')) {
    configs.push(...rc);
  }

  if (types.includes('browser')) {
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

  if (types.includes('cypress')) {
    configs.push(...cypress);
  } else if (types.includes('mocha')) {
    configs.push(...mochaPlus);
  }

  return configs;
}
