declare const _default: {
    name: string;
    languageOptions: {
        sourceType: "script";
        globals: {
            module: "readonly";
            exports: "readonly";
            require: "readonly";
            __dirname: "readonly";
            __filename: "readonly";
        };
        parserOptions: {
            ecmaFeatures: {
                globalReturn: false;
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