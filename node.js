'use strict';

const {env, ecmaVersion} = require('./detectEnv.js');

module.exports = {
  extends: [
    './index.js',
    'plugin:n/recommended-module',
    // Override `index.js`-set ES2015+ if ES5
    ...(ecmaVersion < 2015
      ? ['plugin:@brettz9/es5']
      : ['plugin:@brettz9/es6']
    )
  ],
  env,
  parserOptions: {
    ecmaVersion
  },
  rules: {
    // Disable Node-added
    // (Use Unicorn extension instead which allows in CLI apps)
    'no-process-exit': 'off',
    'n/exports-style': ['error', 'module.exports'],
    'n/prefer-global/buffer': ['error', 'always'],
    'n/prefer-global/console': ['error', 'always'],
    'n/prefer-global/process': ['error', 'always'],
    'n/prefer-global/text-decoder': ['error', 'always'],
    'n/prefer-global/text-encoder': ['error', 'always'],
    'n/prefer-global/url-search-params': ['error', 'always'],
    'n/prefer-global/url': ['error', 'always'],

    // Still in "standard" (move to `explicitly-unused` or remove
    //   when removed there); if they enable some of the
    //   `eslint-plugin-n` equivalents, then remove them below
    'handle-callback-err': 'off',
    'no-new-require': 'off',
    'no-path-concat': 'off',

    // Enable eslint-plugin-n equivalents
    'n/callback-return': 'error',
    'n/global-require': 'error',
    'n/handle-callback-err': 'error',
    'n/no-new-require': 'error',
    'n/no-path-concat': 'error',
    'n/no-process-env': 'error',
    'n/no-sync': 'error',
    // Override this one's default options
    'n/no-mixed-requires': ['error', {grouping: true, allowCall: true}],

    // For this, we want the unicorn extension
    'n/no-process-exit': 'off',

    // For this, we want the import extension
    'n/no-missing-import': 'off'
  }
};
