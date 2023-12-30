/* eslint-disable jsdoc/imports-as-dependencies -- Bug */
import cypress from 'eslint-plugin-cypress/flat';

import mochaPlus from './mocha-plus.js';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ...(cypress.configs.recommended),
    files: ['cypress/e2e/**']
  },
  ...mochaPlus,
  {
    rules: {
      // Conflicts with Cypress `should`
      'mocha-cleanup/invalid-assertions': 0
    }
  }
];
