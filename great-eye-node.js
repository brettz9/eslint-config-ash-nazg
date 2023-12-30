/* eslint-disable jsdoc/imports-as-dependencies -- Bug */
import greatEye from './great-eye.js';
import sauronNode from './sauron-node.js';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [...greatEye, ...sauronNode];
