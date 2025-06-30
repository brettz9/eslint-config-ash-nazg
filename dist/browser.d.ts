declare const _default: ({
    readonly rules: Readonly<import("eslint").Linter.RulesRecord>;
} | {
    name: string;
    basePath?: string;
    files?: Array<string | string[]>;
    ignores?: string[];
    language?: string;
    languageOptions?: import("eslint").Linter.LanguageOptions;
    linterOptions?: import("eslint").Linter.LinterOptions;
    processor?: string | import("eslint").Linter.Processor;
    plugins?: Record<string, import("eslint").ESLint.Plugin>;
    rules?: Partial<import("eslint").Linter.RulesRecord> | undefined;
    settings?: Record<string, unknown>;
})[];
export default _default;
//# sourceMappingURL=browser.d.ts.map