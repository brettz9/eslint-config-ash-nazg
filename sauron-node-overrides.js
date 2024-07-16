/* eslint-disable jsdoc/imports-as-dependencies -- Bug */
import sauronNode from './sauron-node.js';
import rc from './overrides.js';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...sauronNode,
  ...rc
];
