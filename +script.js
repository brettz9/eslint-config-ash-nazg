'use strict';

module.exports = {
  parserOptions: {
    sourceType: 'script',
    ecmaFeatures: {
      globalReturn: false
    }
  },
  rules: {
    'import/no-commonjs': 'off',
    strict: ['error']
  }
};
