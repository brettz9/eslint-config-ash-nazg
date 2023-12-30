declare module 'eslint-plugin-mocha' {
  interface ConfigsStructure {
    configs: {
      flat: {
        recommended: import('eslint').Linter.FlatConfig
      }
    }
  }
  var mocha: ConfigsStructure
  export = mocha;
}
