// Move to eslint-plugin-privileges and import here

/* eslint-disable jsdoc/imports-as-dependencies -- Bug */
import babelEsintParser from '@babel/eslint-parser';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: ['!**/node_modules/', '!dist']
  },
  {
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
