'use strict';

module.exports = {
  reject: [
    // 4.x+ no longer has glob support
    'rimraf',

    // check again when using flat config
    'eslint-plugin-array-func'
  ]
};
