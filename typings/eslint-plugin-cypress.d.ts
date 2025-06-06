declare module 'eslint-plugin-cypress' {
  import type { Linter } from "eslint";

  declare const cypress: {
    readonly configs: {
        readonly recommended: { readonly rules: Readonly<Linter.RulesRecord> };
    };
  };
  export = cypress;
}
