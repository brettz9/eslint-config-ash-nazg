export default [{
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
