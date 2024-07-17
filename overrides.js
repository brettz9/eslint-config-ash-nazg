/* eslint-disable jsdoc/imports-as-dependencies -- Bug */
// eslint-disable-next-line n/no-sync -- For sync API
import {readFileSync} from 'fs';
import globals from 'globals';
import overridesScript from './overrides-script.js';
import overridesScriptNode from './overrides-script-node.js';
import overridesModule from './overrides-module.js';
import browser from './browser.js';

import greatEyeNode from './great-eye-node.js';
import sauronNode from './sauron-node.js';
import node from './node.js';
import polyglot from './polyglot.js';

/**
 * @type {(
 *   types: import('./index.js').Types,
 *   pkg: {
 *     type?: "module"|"commonjs"
 *   }
 * ) => import('eslint').Linter.FlatConfig[]
 * }
 */
export default function overrides (types, pkg) {
  const nodeConfigs = types.includes('sauron')
    ? greatEyeNode(pkg)
    : types.includes('sauron')
      ? sauronNode(pkg)
      : node(pkg);
  return [
    ...overridesScript.map((cfg) => {
      return {
        ...cfg,
        files: [
          '**/scripts/**/*',
          '.babelrc.js',
          'babel.config.js',
          '.eslintrc.js',
          '.mocharc.js',
          '.ncurc.js',
          '.3rdparty-eslintrc.js',
          '**/jsdoc-config.js',
          'webpack.config.js',
          '**/.vuepress/config.js',
          '*.webpack.config.js',
          'web-ext-config.js'
        ]
      };
    }),
    ...overridesScriptNode.map((cfg) => {
      return {
        ...cfg,
        files: [
          '.eslintrc.cjs',
          '.mocharc.cjs',
          '.ncurc.cjs',
          'web-ext-config.cjs'
        ]
      };
    }),
    ...overridesModule.map((cfg) => {
      return {
        ...cfg,
        files: [
          '**/scripts/rollup-plugin/**/*',
          'rollup.config.js',
          '*.rollup.config.js',
          'eslint.config.js'
        ]
      };
    }),
    {
      files: ['**/*.{md,mkdn,mdown,markdown}'],
      processor: 'markdown/markdown'
    },
    {
      files: ['**/*.md/*.js'],
      rules: {
        'n/no-missing-require': ['error', {allowModules: [
          /* eslint-disable n/no-sync -- For sync API */
          // @ts-expect-error Buffer can be assigned to JSON.parse
          JSON.parse(readFileSync('package.json')).name
          /* eslint-enable n/no-sync -- For sync API */
        ]}]
      }
    },
    ...browser.map((cfg) => {
      if (!cfg.languageOptions) {
        cfg.languageOptions = {};
      }
      if (!cfg.languageOptions.globals) {
        cfg.languageOptions.globals = {};
      }
      cfg.languageOptions.globals = {
        ...cfg.languageOptions.globals,
        ...globals.browser
      };

      return {
        ...cfg,
        files: ['demo/**', 'browser/**', '**/public/**']
      };
    }),
    ...polyglot.map((config) => {
      return {
        ...config,
        files: ['polyglot/**']
      };
    }),
    ...nodeConfigs.map((config) => {
      return {
        ...config,
        files: ['build/**', 'server.js'],
        languageOptions: {
          ...config.languageOptions,
          globals: {
            ...config.languageOptions?.globals,
            ...globals.node
          }
        },
        rules: {
          ...config.rules,
          'compat/compat': /** @type {const} */ ('off')
        }
      };
    })
  ];
}
