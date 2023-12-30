/* eslint-disable jsdoc/imports-as-dependencies -- Bug */
import sauronNodeScript from './sauron-node-script.js';
import rc from './rc.js';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...sauronNodeScript,
  ...rc
];
