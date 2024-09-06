import cypress from 'eslint-plugin-cypress/flat';

import mochaPlus from './mocha-plus.js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ...(cypress.configs.recommended),
    files: ['cypress/**']
  },
  ...mochaPlus,
  {
    name: 'ash-nazg/cypress',
    files: ['cypress/**'],
    rules: {
      // Conflicts with Cypress `should`
      'mocha-cleanup/invalid-assertions': 'off',
      'import/unambiguous': 'off',

      // Cypress `then` acts differently
      'promise/prefer-await-to-then': 'off',
      'promise/catch-or-return': 'off',
      'promise/always-return': 'off'
    }
  }
];
