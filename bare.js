/* eslint-disable jsdoc/imports-as-dependencies -- Bug */
import {builtinModules} from 'node:module';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    rules: {
      'no-restricted-imports': ['error', {
        paths: builtinModules
      }]
    }
  }
];
