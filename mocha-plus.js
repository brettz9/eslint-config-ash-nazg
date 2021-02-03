'use strict';

// Todo: Move to own repo so can add dependencies
module.exports = {
  overrides: [
    {
      files: ['**/test/**', '**/tests/**', 'cypress/integration/**'],
      extends: [
        'plugin:mocha/recommended',
        'plugin:mocha-cleanup/recommended-no-limits',
        'plugin:@fintechstudios/chai-as-promised/recommended',
        'plugin:chai-expect-keywords/recommended',
        'plugin:chai-expect/recommended',
        'plugin:chai-friendly/recommended'
      ],
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
    }
  ]
};
