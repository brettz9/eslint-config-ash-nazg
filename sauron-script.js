/* eslint-disable jsdoc/imports-as-dependencies -- Bug */
import sauron from './sauron.js';
import script from './+script.js';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [...sauron, ...script];
