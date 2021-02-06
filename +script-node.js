'use strict';

// As adding after defaults, recalculate ecmaVersion (Node plugins sets own
//  `ecmaVersion`)
const {env, ecmaVersion} = require('./detectEnv.js');

module.exports = {
  env,
  extends: ['plugin:node/recommended-script'],
  parserOptions: {
    ecmaVersion
  },
  rules: {
    'import/no-commonjs': 'off',
    strict: ['error']
  }
};
