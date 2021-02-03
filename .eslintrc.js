'use strict';
module.exports = {
  extends: [
    './sauron-node-script-overrides.js'
  ],
  settings: {
    polyfills: [
      'Object.entries',
      'Object.values'
    ]
  },
  overrides: [{
    files: 'build.js',
    globals: {
      // Todo: Get rid of this usage (and esm) with native Node only
      __dirname: true
    },
    extends: [
      './sauron-node-overrides.js'
    ]
  }, {
    files: ['inherited-rules/**'],
    rules: {
      // Uses JSON.stringify
      quotes: ['error', 'double'],
      'quote-props': 'off'
    }
  }],
  rules: {
    'max-len': 'off'
  }
};
