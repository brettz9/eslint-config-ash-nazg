// Todo: Might move these very basic configs (Mocha, and add one for Node
//   globals, etc.) to own repo
/* eslint-disable jsdoc/imports-as-dependencies -- Bug */

/** @type {import('eslint').Linter.Config[]} */
export default [{
  name: 'ash-nazg/mocha',
  files: ['**/test/**', '**/tests/**', 'cypress/e2e/**'],
  languageOptions: {
    globals: {
      // Imported nowadays
      // chai: 'readonly',
      // expect: 'readonly',
      // assert: 'readonly',
      // should: 'readonly',

      // Could use globals.mocha for the following, but that
      //   includes even more
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
  }

  // Could disable arrow functions, named functions
  /*
  rules: {
    'max-nested-callbacks': 'off',
  },
  */
}];
