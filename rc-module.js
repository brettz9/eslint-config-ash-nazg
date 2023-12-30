/* eslint-disable jsdoc/imports-as-dependencies -- Bug */
import sauronNode from './sauron-node.js';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...sauronNode,
  {
    rules: {
      'compat/compat': 'off',
      'no-console': 'off',
      'import/no-anonymous-default-export': 'off',
      'n/no-process-env': 'off'
    }
  }
];
