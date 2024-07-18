/* eslint-disable jsdoc/imports-as-dependencies -- Bug */
import globals from 'globals';
import nodePlugin from 'eslint-plugin-n';
import index from './main.js';
import standard from './standard.js';
import modules from './modules.js';

// import {FlatCompat} from '@eslint/eslintrc';
// const __dirname = import.meta.dirname;
// const compat = new FlatCompat({
//   baseDirectory: __dirname
// });

const esmNodeGlobals = {
  ...globals.node,
  __dirname: /** @type {const} */ ('off'),
  __filename: /** @type {const} */ ('off')
};

const nodeRecommendedModule = nodePlugin.configs['flat/recommended-module'];
// We don't want __dirname/__filename
delete nodeRecommendedModule.languageOptions?.globals;

/**
 * @type {(pkg: {
 *   type?: "module"|"commonjs"
* }) => import('eslint').Linter.FlatConfig[]}
 */
export default function node (pkg) {
  return [
    ...index(pkg),
    standard[1],
    nodeRecommendedModule,
    {
      name: 'ash-nazg/node-esm/allow-dynamic-import-and-modules',
      rules: {
        'n/no-unsupported-features/es-syntax': [
          'error',
          // We could check for `ecmaVersion < 2020` to restrict
          //   `dynamicImport`, but if present, typically compiling,
          //   and seems support was available in earlier Node
          //   experimentally anyways
          {ignores: ['modules', 'dynamicImport']}
        ]
      }
    },
    {
      // Node-specific modules
      ...modules[1],
      name: 'ash-nazg/modules/mjs',
      files: ['**/*.mjs']
    },
    {
      name: 'ash-nazg/node-esm',
      languageOptions: {
        globals: {
          ...esmNodeGlobals
        }
      },
      rules: {
        // Disable Node-added
        // (Use Unicorn extension instead which allows in CLI apps)
        'no-process-exit': 'off',
        'n/exports-style': ['error', 'module.exports'],
        'n/prefer-global/buffer': ['error', 'always'],
        'n/prefer-global/console': ['error', 'always'],
        'n/prefer-global/process': ['error', 'always'],
        'n/prefer-global/text-decoder': ['error', 'always'],
        'n/prefer-global/text-encoder': ['error', 'always'],
        'n/prefer-global/url-search-params': ['error', 'always'],
        'n/prefer-global/url': ['error', 'always'],

        // Still in "standard" (move to `explicitly-unused` or remove
        //   when removed there); if they enable some of the
        //   `eslint-plugin-n` equivalents, then remove them below
        'handle-callback-err': 'off',
        'no-new-require': 'off',
        'no-path-concat': 'off',

        // Enable eslint-plugin-n equivalents
        'n/callback-return': 'error',
        'n/global-require': 'error',
        'n/handle-callback-err': 'error',
        'n/no-new-require': 'error',
        'n/no-path-concat': 'error',
        'n/no-process-env': 'error',
        'n/no-sync': 'error',
        // Override this one's default options
        'n/no-mixed-requires': ['error', {grouping: true, allowCall: true}],

        // For this, we want the unicorn extension
        'n/no-process-exit': 'off',

        // For this, we want the import extension
        'n/no-missing-import': 'off'
      }
    }
  ];
}
