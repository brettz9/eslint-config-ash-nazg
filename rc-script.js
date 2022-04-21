'use strict';

module.exports = {
  extends: [
    './sauron-node-script.js'
  ],
  rules: {
    'compat/compat': 'off',
    'no-console': 'off',
    'n/no-process-env': 'off',
    'n/no-unpublished-import': 'off'
  }
};
