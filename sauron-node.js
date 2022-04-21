'use strict';

module.exports = {
  extends: ['./node.js', './sauron.js'],
  rules: {
    'n/prefer-promises/dns': ['error'],
    'n/prefer-promises/fs': ['error']
  }
};
