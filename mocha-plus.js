/* eslint-disable jsdoc/imports-as-dependencies -- Bug */

// Not technically flat: https://eslint.org/docs/latest/extend/plugin-migration-flat-config#migrating-environments-for-flat-config
// However, we don't need flat config--just to embed its globals
import chaiAssertBdd from 'eslint-plugin-chai-assert-bdd';

// Not following ESLint typings, but exports flat:
import mochaPlugin from 'eslint-plugin-mocha';
// import mochaCleanup from 'eslint-plugin-mocha-cleanup'; // Todo: Support flat config: https://github.com/onechiporenko/eslint-plugin-mocha-cleanup/pull/46
// import chaiAsPromised from '@fintechstudios/eslint-plugin-chai-as-promised'; // Todo: Support flat config: https://github.com/fintechstudios/eslint-plugin-chai-as-promised/pull/26
import chaiExpectKeywords from 'eslint-plugin-chai-expect-keywords';
import chaiExpect from 'eslint-plugin-chai-expect';
import chaiFriendly from 'eslint-plugin-chai-friendly';

import mocha from './mocha.js';

/**
 * @typedef {import('eslint').Linter.FlatConfig} ESLintConfig
 */

/**
 * @param {ESLintConfig} config
 * @returns {ESLintConfig}
 */
function addTestFiles (config) {
  return {
    ...config,
    files: ['**/test/**', '**/tests/**', 'cypress/integration/**'],
    languageOptions: {
      globals: {
        // assert, expect, should
        ...chaiAssertBdd.environments['mocha-chai'].globals
      }
    }
  };
}

/** @type {ESLintConfig[]} */
export default [
  addTestFiles(mochaPlugin.configs.flat.recommended),
  // Todo: Reenable when available
  // ...addTestFiles(mochaCleanup['recommended-no-limits']),
  // ...addTestFiles(chaiAsPromised.recommended),
  {
    ...addTestFiles(
      /**
       * @type {Record<string, ESLintConfig>}
       */ (
        chaiExpectKeywords.configs
      ).recommended
    ),
    rules: {
      'chai-expect-keywords/no-unsupported-keywords': [
        'error', {
          // allowKeywords: ["length"],
          // Will admittedly vary by project but a bit of a hassle to
          //  whitelist differently for each project
          allowChaiAsPromised: true,
          allowChaiDOM: true,
          allowSinonChai: true
        }
      ]
    }
  },
  addTestFiles(
    /**
     * @type {Record<string, ESLintConfig>}
     */
    (chaiExpect.configs)['recommended-flat']
  ),
  addTestFiles(
    /**
     * @type {Record<string, ESLintConfig>}
     */
    (chaiFriendly.configs).recommendedFlat
  ),
  {
    rules: {
      // MOCHA

      // Too oppressive when planning to extend a section
      'mocha/no-hooks-for-single-case': 0,

      // Useful to ensure allowing `this.timeout()`, etc., but a
      //  little oppressive
      'mocha/no-mocha-arrows': 0,
      // Useful if enabling the regular `prefer-arrow-callback`
      // 'mocha/prefer-arrow-callback': 2

      // Would be good to enable but can need some refactoring
      'mocha/no-setup-in-describe': 0,

      // MOCHA-CLEANUP

      'mocha-cleanup/no-outside-declaration': 0
      /*
      // Might see about working around to avoid the option limitation,
      //  but convenient
      'mocha-cleanup/no-expressions-in-assertions': ['error', {
        replacementsOnly: true
      }]
      */
    }
  },
  ...mocha
];
