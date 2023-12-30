import cypress from 'eslint-plugin-cypress'; // Todo: Apply as of https://github.com/cypress-io/eslint-plugin-cypress/issues/146
import mochaPlus from './mocha-plus.js';

export default [cypress, ...mochaPlus, {
  rules: {
    // Conflicts with Cypress `should`
    'mocha-cleanup/invalid-assertions': 0
  }
}];
