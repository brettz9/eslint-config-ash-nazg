/** @type {import('eslint').Linter.Config[]} */
export default [{
  name: 'ash-nazg/modules',
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {globalReturn: false}
    },
    sourceType: 'module',
    globals: {
      __dirname: 'off',
      __filename: 'off',
      exports: 'off',
      module: 'off',
      require: 'off'
    }
  }
}];
