declare module 'eslint-plugin-no-use-extend-native' {
  import type { Linter } from "eslint";

  declare const noUseExtendNative: {
    readonly configs: {
        readonly recommended: { readonly rules: Readonly<Linter.RulesRecord> };
    };
  };
  export = noUseExtendNative;
}
