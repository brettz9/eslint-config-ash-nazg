'use strict';

module.exports = {
  extends: [
    './sauron-node-script-overrides.js'
  ],
  settings: {
    polyfills: [
      'Object.entries',
      'Object.values'
    ]
  },
  overrides: [{
    files: ['inherited-rules/**'],
    rules: {
      // Uses JSON.stringify
      '@stylistic/quotes': ['error', 'double'],
      '@stylistic/quote-props': 'off'
    }
  }, {
    files: 'inherited-rules/build.mjs',
    parserOptions: {
      ecmaVersion: 2021
    },
    extends: [
      './sauron-node-overrides.js'
    ]
  }],
  rules: {
    '@stylistic/max-len': 'off'
  }
};
