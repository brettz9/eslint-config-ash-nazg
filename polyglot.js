/* eslint-disable jsdoc/imports-as-dependencies -- Bug */
import globals from 'globals';
import bare from './bare.js';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    name: 'ash-nazg/polyglot',
    languageOptions: {
      globals: globals['shared-node-browser']
    }
  },
  ...bare
];
