/* eslint-disable jsdoc/imports-as-dependencies -- Bug */
import sauronScript from './sauron-script.js';
import rc from './overrides.js';
import mocha from './mocha.js';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [...sauronScript, ...rc, ...mocha];
