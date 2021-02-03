'use strict';

module.exports = {
  extends: ['./sauron-node.js', 'plugin:node/recommended-script'],
  rules: {
    'import/no-commonjs': 'off'
  }
};
