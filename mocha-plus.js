import chaiAssertBdd from 'eslint-plugin-chai-assert-bdd'; // Doesn't need flat config--just embed globals

import mocha from 'eslint-plugin-mocha';
import mochaCleanup from 'eslint-plugin-mocha-cleanup'; // Support flat config: https://github.com/onechiporenko/eslint-plugin-mocha-cleanup/issues/34
import chaiAsPromised from '@fintechstudios/eslint-plugin-chai-as-promised'; // Support flat config: https://github.com/fintechstudios/eslint-plugin-chai-as-promised/issues/25
import chaiExpectKeywords from 'eslint-plugin-chai-expect-keywords'; // Support flat config: https://github.com/gavinaiken/eslint-plugin-chai-expect-keywords/issues/17
import chaiExpect from 'eslint-plugin-chai-expect'; // Support flat config: https://github.com/Turbo87/eslint-plugin-chai-expect/issues/357
import chaiFriendly from 'eslint-plugin-chai-friendly'; // Support flat config: https://github.com/ihordiachenko/eslint-plugin-chai-friendly/issues/31

export default [{
  // Todo: Do proper merge
  ...mocha.configs.flat.recommended,
  ...mochaCleanup['recommended-no-limits'],
  ...chaiAsPromised.recommended,
  ...chaiExpectKeywords.recommended,
  ...chaiExpect.recommended,
  ...chaiFriendly.recommended,

  files: ['**/test/**', '**/tests/**', 'cypress/integration/**'],
  languageOptions: {
    globals: {
      ...chaiAssertBdd.environments['mocha-chai'].globals // assert, expect, should
    }
  },
  rules: {
    // CHAI

    'chai-expect-keywords/no-unsupported-keywords': [
      'error', {
        // allowKeywords: ["length"],
        // Will admittedly vary by project but a bit of a hassle to
        //  whitelist differently for each project
        allowChaiAsPromised: true,
        allowChaiDOM: true,
        allowSinonChai: true
      }
    ],

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
}];
