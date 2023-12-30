declare module 'eslint-plugin-unicorn' {
  import type { Linter } from "eslint";

  declare const unicorn: {
    readonly configs: {
        readonly 'flat/recommended': { readonly rules: Readonly<Linter.RulesRecord> };
    };
  };
  export = unicorn;
}
