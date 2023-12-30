declare module 'eslint-plugin-promise' {
  import type { Linter } from "eslint";

  declare const promise: {
    readonly configs: {
        readonly 'flat/recommended': { readonly rules: Readonly<Linter.RulesRecord> };
    };
  };
  export = promise;
}
