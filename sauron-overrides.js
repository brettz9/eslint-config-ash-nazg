/* eslint-disable jsdoc/imports-as-dependencies -- Bug */
import sauron from './sauron.js';
import rc from './rc.js';
import mocha from './mocha.js';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [...sauron, ...rc, ...mocha];
