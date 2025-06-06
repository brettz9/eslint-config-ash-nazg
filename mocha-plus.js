
// Not technically flat: https://eslint.org/docs/latest/extend/plugin-migration-flat-config#migrating-environments-for-flat-config
// However, we don't need flat config--just to embed its globals
// import chaiAssertBdd from 'eslint-plugin-chai-assert-bdd';

// Not following ESLint typings, but exports flat:
import mochaPlugin from 'eslint-plugin-mocha';
// import mochaCleanup from 'eslint-plugin-mocha-cleanup'; // Todo: Support flat config: https://github.com/onechiporenko/eslint-plugin-mocha-cleanup/pull/46
// import chaiAsPromised from '@fintechstudios/eslint-plugin-chai-as-promised'; // Todo: Support flat config: https://github.com/fintechstudios/eslint-plugin-chai-as-promised/pull/26
import chaiExpectKeywords from 'eslint-plugin-chai-expect-keywords';
import chaiExpect from 'eslint-plugin-chai-expect';
import chaiFriendly from 'eslint-plugin-chai-friendly';

import mocha from './mocha.js';

/**
 * @typedef {import('eslint').Linter.Config} ESLintConfig
 */

/**
 * @param {ESLintConfig} config
 * @param {string} name
 * @returns {ESLintConfig}
 */
function addTestFiles (config, name) {
  return {
    name,
    ...config,
    files: ['**/test/**', '**/tests/**', 'cypress/e2e/**']
    // These globals are now typically imported
    // languageOptions: {
    //   globals: {
    //     // assert, expect, should
    //     // ...chaiAssertBdd.environments['mocha-chai'].globals
    //   }
    // }
  };
}

/** @type {ESLintConfig[]} */
export default [
  addTestFiles(
    mochaPlugin.configs.recommended,
    'ash-nazg/test-files/mocha'
  ),
  // Todo: Reenable when available
  // ...addTestFiles(mochaCleanup['recommended-no-limits']),
  // ...addTestFiles(chaiAsPromised.recommended),
  {
    ...addTestFiles(
      /**
       * @type {Record<string, ESLintConfig>}
       */ (
        chaiExpectKeywords.configs
      ).recommended,
      'ash-nazg/test-files/chai-expect-keywords'
    ),
    name: 'ash-nazg/chai-expect-keywords',
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
    (chaiExpect.configs)['recommended-flat'],
    'ash-nazg/test-files/chai-expect'
  ),
  addTestFiles(
    /**
     * @type {Record<string, ESLintConfig>}
     */
    (chaiFriendly.configs).recommendedFlat,
    'ash-nazg/test-files/chai-friendly'
  ),
  addTestFiles({
    rules: {
      // MOCHA

      // Not very important
      'mocha/consistent-spacing-between-blocks': 0,

      // Adds an indent level
      'mocha/max-top-level-suites': 0,

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
  }, 'ash-nazg/test-files/mocha-plus'),
  ...mocha
];
