/* eslint-disable jsdoc/imports-as-dependencies -- Bug */

import index from './index.js';

/** @type {import('eslint').Linter.Config[]} */
const config = [
  ...index([
    'sauron', 'node'
  ]),
  {
    name: 'ash-nazg-internal/inherited',
    files: ['inherited-rules/**'],
    ignores: ['inherited-rules/build.js'],
    rules: {
      // Uses JSON.stringify
      '@stylistic/quotes': ['error', 'double'],
      '@stylistic/quote-props': 'off'
    }
  }
];

// console.log('config', config[35]);

export default config; // .slice(0, 34);
