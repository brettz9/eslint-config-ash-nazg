'use strict';
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
  extends: [
    'eslint:recommended',
    './sauron-node.js',
    'plugin:node/recommended-script'
  ],
  plugins: ['markdown'],
  settings: {
    polyfills: [
      'Object.entries',
      'Object.values'
    ]
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
  }, {
    files: 'build.js',
    globals: {
      // Todo: Get rid of this usage (and esm) with native Node only
      __dirname: true
    },
    extends: [
      'plugin:node/recommended-module'
    ]
  }, {
    files: ['inherited-rules/**'],
    rules: {
      // Uses JSON.stringify
      quotes: ['error', 'double'],
      'quote-props': 'off'
    }
  }],
  rules: {
    quotes: ['error', 'single'],
    'max-len': 'off',
    'import/unambiguous': 'off',
    'import/no-commonjs': 'off'
  }
};
