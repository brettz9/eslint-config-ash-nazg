/* eslint-disable jsdoc/imports-as-dependencies -- Bug */
import node from './node.js';
import sauron from './sauron.js';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...node,
  ...sauron,
  {
    rules: {
      'n/prefer-promises/dns': ['error'],
      'n/prefer-promises/fs': ['error']
    }
  }
];
