/* eslint-disable jsdoc/imports-as-dependencies -- Bug */
/** @type {import('eslint').Linter.Config[]} */
export default [{
  name: 'ash-nazg/script',
  languageOptions: {
    sourceType: 'script',
    globals: {
      // Not necessarily all of Node globals
      module: 'readonly',
      exports: 'readonly'
    },
    parserOptions: {
      ecmaFeatures: {
        globalReturn: false
      }
    }
  },
  rules: {
    'import/no-commonjs': 'off',
    strict: ['error']
  }
}];
