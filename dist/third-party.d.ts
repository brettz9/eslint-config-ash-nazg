declare const _default: ({
    name: string;
    ignores: string[];
    languageOptions?: undefined;
    rules?: undefined;
} | {
    name: string;
    languageOptions: {
        parser: any;
        parserOptions: {
            sourceType: undefined;
            requireConfigFile: boolean;
            babelOptions: {
                plugins: string[];
            };
        };
    };
    rules: {
        'no-global-assign': ["error"];
        'no-eval': ["error"];
    };
    ignores?: undefined;
})[];
export default _default;
//# sourceMappingURL=third-party.d.ts.map