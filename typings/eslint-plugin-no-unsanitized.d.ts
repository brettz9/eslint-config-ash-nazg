declare module 'eslint-plugin-no-unsanitized' {
  interface ConfigsStructure {
    configs: {
      recommended: import('eslint').Linter.Config
    }
  }
  var noUnsanitizedPlugin: ConfigsStructure
  export = noUnsanitizedPlugin;
}
