module.exports = {
    env: {
        commonjs: true,
        es6: true,
        node: true
    },
    globals: {
      __dirname: true,
      module: true
    },
    extends: ['eslint:recommended', './sauron-node.js'],
    plugins: ['jsdoc', 'markdown'],
    settings: {
      polyfills: [
        'Object.entries',
        'Object.values'
      ]
    },
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
        quotes: ['error', 'double'],
        'max-len': 'off',
        'quote-props': 'off',
        'import/unambiguous': 'off',
        'import/no-commonjs': 'off'
    }
};
