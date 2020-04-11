'use strict';
module.exports = {
  extends: ['./', 'plugin:node/recommended-module'],
  rules: {
    // Disable Node-added
    // (Use Unicorn extension instead which allows in CLI apps)
    'no-process-exit': 'off',
    'node/file-extension-in-import': ['error'],
    'node/exports-style': ['error', 'module.exports'],
    'node/prefer-global/buffer': ['error', 'always'],
    'node/prefer-global/console': ['error', 'always'],
    'node/prefer-global/process': ['error', 'always'],
    'node/prefer-global/text-decoder': ['error', 'always'],
    'node/prefer-global/text-encoder': ['error', 'always'],
    'node/prefer-global/url-search-params': ['error', 'always'],
    'node/prefer-global/url': ['error', 'always'],

    // Still in "standard" (move to `explicitly-unused` or remove
    //   when removed there); if they enable some of the
    //   `eslint-plugin-node` equivalents, then remove them below
    'handle-callback-err': 'off',
    'no-new-require': 'off',
    'no-path-concat': 'off',

    // Enable eslint-plugin-node equivalents
    'node/callback-return': 'error',
    'node/global-require': 'error',
    'node/handle-callback-err': 'error',
    'node/no-new-require': 'error',
    'node/no-path-concat': 'error',
    'node/no-process-env': 'error',
    'node/no-sync': 'error',
    // Override this one's default options
    'node/no-mixed-requires': ['error', {'grouping': true, 'allowCall': true}],
    // For this, we want the unicorn extension
    'node/no-process-exit': 'off'
  }
};
