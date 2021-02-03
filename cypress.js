'use strict';

// Todo: Move to own repo so can add dependencies

module.exports = {
  extends: [
    'plugin:cypress/recommended',
    './mocha-plus.js'
  ],
  rules: {
    // Conflicts with Cypress `should`
    'mocha-cleanup/invalid-assertions': 0
  }
};
