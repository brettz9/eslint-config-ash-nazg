/* eslint-disable jsdoc/imports-as-dependencies -- Bug */
import sauronNodeScript from './sauron-node-script.js';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...sauronNodeScript,
  {
    rules: {
      'compat/compat': 'off',
      'no-console': 'off',
      'n/no-process-env': 'off'
    }
  }
];
