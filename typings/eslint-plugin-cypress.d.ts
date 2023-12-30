declare module 'eslint-plugin-cypress/flat' {
  import type { Linter } from "eslint";

  declare const cypress: {
    readonly configs: {
        readonly recommended: { readonly rules: Readonly<Linter.RulesRecord> };
    };
  };
  export = cypress;
}
