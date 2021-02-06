/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
'use strict';

// Todo: Might move these very basic configs (Mocha, and add one for Node
//   globals, etc.) to own repo

module.exports = {
  overrides: [
    {
      files: ['**/test/**', '**/tests/**', 'cypress/integration/**'],
      env: {
        mocha: true
      },
      // Are all of these redundant with `env: {mocha: true}`?
      globals: {
        chai: 'readonly',

        after: 'readonly',
        afterEach: 'readonly',
        before: 'readonly',
        beforeEach: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        mocha: 'readonly',
        xdescribe: 'readonly',
        xit: 'readonly'
      }

      // Could disable arrow functions, named functions
      /*
      rules: {
        'max-nested-callbacks': 'off',
      },
      */
    }
  ]
};
