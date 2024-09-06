import globals from 'globals';
import bare from './bare.js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    name: 'ash-nazg/polyglot',
    languageOptions: {
      globals: globals['shared-node-browser']
    }
  },
  ...bare
];
