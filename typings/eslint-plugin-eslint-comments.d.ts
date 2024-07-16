declare module '@eslint-community/eslint-plugin-eslint-comments/configs' {
  import type { Linter } from "eslint";

  declare const comments: {
    readonly recommended: { readonly rules: Readonly<Linter.RulesRecord> };
  };
  export = comments;
}
