declare module '@scottnonnenberg/eslint-compare-config' {
  interface CompareConfig {
    getLiteralConfigSync: (path: string) => {
      configs: Record<string, import('eslint').ESLint.ConfigData>,
      rules: Record<
        string,
        import('eslint').ESLint.Rule.OldStyleRule |
          import('eslint').ESLint.Rule.RuleModule
      >;
    },
    getDifferencesSync: () => {}
  }

  var scottnonnenbergEslintCompareConfig: CompareConfig
  export = scottnonnenbergEslintCompareConfig;
}
