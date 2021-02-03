'use strict';

module.exports = {
  extends: ['./node.js', './sauron.js'],
  rules: {
    'node/prefer-promises/dns': ['error'],
    'node/prefer-promises/fs': ['error']
  }
};
