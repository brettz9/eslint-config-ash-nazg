/* eslint-disable jsdoc/imports-as-dependencies -- Bug */
import sauronNode from './sauron-node.js';
import scriptNode from './+script-node.js';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...sauronNode,
  ...scriptNode
];
