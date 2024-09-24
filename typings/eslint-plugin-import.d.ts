declare module 'eslint-plugin-import' {
  interface ConfigsStructure {
    flatConfigs: {
      recommended: import('eslint').Linter.Config
    }
  }
  var importPlugin: ConfigsStructure
  export = importPlugin;
}
