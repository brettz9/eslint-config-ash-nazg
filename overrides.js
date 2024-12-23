import {readFileSync} from 'fs';
import globals from 'globals';
import nodePlugin from 'eslint-plugin-n';

import overridesScript from './overrides-script.js';
import overridesScriptNode from './overrides-script-node.js';
import overridesModule from './overrides-module.js';
import browser from './browser.js';

import greatEyeNode from './great-eye-node.js';
import sauronNode from './sauron-node.js';
import node from './node.js';
import polyglot from './polyglot.js';

import esCompat from 'eslint-plugin-escompat';

const disabledEsCompat = Object.keys(
  esCompat.configs['flat/recommended'].rules
).reduce((obj, ruleName) => {
  obj[ruleName] = 'off';
  return obj;
}, /** @type {import('eslint').Linter.RulesRecord} */ ({}));

/**
 * @type {(
 *   types: import('./index.js').Types,
 *   pkg: {
 *     type?: "module"|"commonjs"
 *   }
 * ) => import('eslint').Linter.Config[]
 * }
 */
export default function overrides (types, pkg) {
  const nodeConfigs = types.includes('great-eye')
    ? greatEyeNode(pkg, types)
    : types.includes('sauron')
      ? sauronNode(pkg)
      : node(pkg);
  return [
    // The overrides should be Node files (e.g., to disable browser rules)
    ...overridesScript.map((cfg) => {
      return {
        ...cfg,
        name: 'ash-nazg/overrides/rc/js',
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
        ],
        rules: {
          ...cfg.rules,
          ...disabledEsCompat
        }
      };
    }),
    ...overridesScriptNode.map((cfg, idx) => {
      return {
        ...cfg,
        name: 'ash-nazg/overrides/rc/cjs-node/' + (cfg.name ?? idx),
        files: [
          '.eslintrc.cjs',
          '.mocharc.cjs',
          '.ncurc.cjs',
          'web-ext-config.cjs'
        ],
        rules: {
          ...cfg.rules,
          ...disabledEsCompat
        }
      };
    }),
    ...overridesModule.map((cfg) => {
      return {
        ...cfg,
        name: 'ash-nazg/overrides/rc/modules',
        files: [
          '**/scripts/rollup-plugin/**/*',
          'rollup.config.js',
          '*.rollup.config.js',
          'eslint.config.js'
        ],
        rules: {
          ...cfg.rules,
          ...disabledEsCompat
        }
      };
    }),
    {
      name: 'ash-nazg/overrides/markdown/processor',
      files: ['**/*.{md,mkdn,mdown,markdown}'],
      processor: 'markdown/markdown'
    },
    {
      name: 'ash-nazg/overrides/markdown/js',
      files: ['**/*.md/*.js'],
      plugins: {
        n: nodePlugin
      },
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
        name: 'ash-nazg/overrides/browser/' + cfg.name,
        files: [
          '**/demo/**',
          '**/browser/**',
          '**/public/**'
        ]
      };
    }),
    ...polyglot.map((config) => {
      return {
        ...config,
        name: 'ash-nazg/overrides/polyglot-folder',
        files: ['polyglot/**']
      };
    }),
    ...nodeConfigs.map((config, idx) => {
      return {
        ...config,
        name: 'ash-nazg/overrides/node-folders-or-files/' +
          (config.name ?? idx),
        files: [
          '**/build/**',
          '**/tools/**',
          '**/bin/**',
          '**/server/**',
          '**/server.js'
        ],
        languageOptions: {
          ...config.languageOptions,
          globals: {
            ...config.languageOptions?.globals,
            ...globals.node,
            ...(pkg.type === 'module'
              ? /** @type {import('eslint').Linter.Globals} */ ({
                __dirname: 'off',
                __filename: 'off'
              })
              : {}
            )
          }
        },
        rules: {
          ...config.rules,
          'compat/compat': /** @type {const} */ ('off'),
          ...disabledEsCompat
        }
      };
    })
  ];
}
