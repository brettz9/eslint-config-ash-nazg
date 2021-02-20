'use strict';

module.exports = {
  extends: [
    './sauron-node.js'
  ],
  rules: {
    'compat/compat': 'off',
    'no-console': 'off',
    'import/no-anonymous-default-export': 'off',
    'node/no-process-env': 'off',
    'node/no-unpublished-import': 'off'
  }
};
