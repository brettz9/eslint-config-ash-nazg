// todo: See about getting rid of this file after https://github.com/lo1tuma/eslint-plugin-mocha/pulls

declare module 'eslint-plugin-mocha' {
  interface ConfigsStructure {
    configs: {
      recommended: import('eslint').Linter.Config
    }
  }
  var mocha: ConfigsStructure
  export = mocha;
}
