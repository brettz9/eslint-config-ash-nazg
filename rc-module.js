'use strict';

module.exports = {
  extends: [
    './sauron-node.js'
  ],
  rules: {
    'compat/compat': 'off',
    'no-console': 'off',
    'import/no-anonymous-default-export': 'off',
    'n/no-process-env': 'off',
    'n/no-unpublished-import': 'off'
  }
};
