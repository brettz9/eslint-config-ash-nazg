/* eslint-disable jsdoc/imports-as-dependencies -- Bug */
import {builtinModules} from 'node:module';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    name: 'ash-nazg/bare',
    rules: {
      'no-restricted-imports': ['error', {
        paths: builtinModules
      }]
    }
  }
];
