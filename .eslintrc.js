module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true
    },
    extends: ['eslint:recommended'],
    plugins: ['jsdoc', 'markdown'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    overrides: [{
      files: ['**/*.md'],
      rules: {
        'eol-last': ['off'],
        'no-console': ['off'],
        'no-undef': ['off'],
        'no-unused-vars': ['warn'],
        'padded-blocks': ['off'],
        'import/unambiguous': ['off'],
        'import/no-unresolved': ['off'],
        'node/no-missing-import': ['off']
      }
    }],
    rules: {
        indent: [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        quotes: [
            'error',
            'double'
        ],
        semi: [
            'error',
            'always'
        ]
    }
};
