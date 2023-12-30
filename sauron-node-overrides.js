/* eslint-disable jsdoc/imports-as-dependencies -- Bug */
import sauronNode from './sauron-node.js';
import rc from './rc.js';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...sauronNode,
  ...rc
];
