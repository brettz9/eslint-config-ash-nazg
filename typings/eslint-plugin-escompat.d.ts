declare module 'eslint-plugin-escompat' {
  import type { Linter } from "eslint";

  declare const escompat: {
    readonly configs: {
        readonly 'flat/recommended': { readonly rules: Readonly<Linter.RulesRecord> };
    };
  };
  export = escompat;
}
