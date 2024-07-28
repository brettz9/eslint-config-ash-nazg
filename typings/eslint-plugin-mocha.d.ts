declare module 'eslint-plugin-mocha' {
  interface ConfigsStructure {
    configs: {
      flat: {
        recommended: import('eslint').Linter.Config
      }
    }
  }
  var mocha: ConfigsStructure
  export = mocha;
}
