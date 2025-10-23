import cypress from 'eslint-plugin-cypress';

import mochaPlus from './mocha-plus.js';

export default /** @type {import('eslint').Linter.Config[]} */ ([
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
]);
