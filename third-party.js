// Move to eslint-plugin-privileges and import here

import babelEsintParser from '@babel/eslint-parser';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    name: 'ash-nazg/third-party/ignores',
    ignores: ['!**/node_modules/', '!dist']
  },
  {
    name: 'ash-nazg/third-party',
    languageOptions: {
      parser: babelEsintParser,
      parserOptions: {
        sourceType: undefined,
        requireConfigFile: false,
        babelOptions: {
          plugins: [
            '@babel/plugin-syntax-import-attributes'
          ]
        }
      }
    },
    rules: {
      // Intrusive
      'no-global-assign': ['error'],

      // Vulnerable
      'no-eval': ['error']
    }
  }
];
