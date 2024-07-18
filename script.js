/* eslint-disable jsdoc/imports-as-dependencies -- Bug */
/** @type {import('eslint').Linter.FlatConfig[]} */
export default [{
  name: 'ash-nazg/script',
  languageOptions: {
    sourceType: 'script',
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
