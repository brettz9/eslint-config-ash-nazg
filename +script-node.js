'use strict';

// As adding after defaults, recalculate ecmaVersion (Node plugins sets own
//  `ecmaVersion`)
const {env, ecmaVersion} = require('./detectEnv.js');

module.exports = {
  env,
  extends: ['plugin:n/recommended-script'],
  parserOptions: {
    ecmaVersion,
    ecmaFeatures: {
      globalReturn: true
    }
  },
  rules: {
    // Allow for Node or Unicorn
    'no-process-exit': 'off',

    'import/no-commonjs': 'off',
    strict: ['error']
  }
};
