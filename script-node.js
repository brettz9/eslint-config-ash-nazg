/* eslint-disable jsdoc/imports-as-dependencies -- Bug */
import node from 'eslint-plugin-n';
import globals from 'globals';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  node.configs['flat/recommended-script'],
  {
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        ecmaFeatures: {
          globalReturn: true
        }
      }
    },
    rules: {
      // Allow for Node or Unicorn
      'no-process-exit': 'off',

      'import/no-commonjs': 'off',
      strict: ['error']
    }
  }
];
