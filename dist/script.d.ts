declare const _default: {
    name: string;
    languageOptions: {
        sourceType: string;
        globals: {
            module: string;
            exports: string;
            require: string;
            __dirname: string;
            __filename: string;
        };
        parserOptions: {
            ecmaFeatures: {
                globalReturn: boolean;
            };
        };
    };
    rules: {
        'import/no-commonjs': "off";
        strict: ["error", string];
    };
}[];
export default _default;
//# sourceMappingURL=script.d.ts.map