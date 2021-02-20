'use strict';

module.exports = {
  extends: [
    './sauron-node-script.js'
  ],
  rules: {
    'compat/compat': 'off',
    'no-console': 'off',
    'node/no-process-env': 'off',
    'node/no-unpublished-import': 'off'
  }
};
