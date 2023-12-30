declare module 'eslint-plugin-array-func' {
  import type { Linter } from "eslint";

  declare const arrayFunc: {
    readonly configs: {
        readonly all: { readonly rules: Readonly<Linter.RulesRecord> };
    };
  };
  export = arrayFunc;
}
