'use strict';

module.exports = {
  parserOptions: {
    ecmaFeatures: {globalReturn: false},
    sourceType: 'module'
  },
  globals: {
    __dirname: 'off',
    __filename: 'off',
    exports: 'off',
    module: 'off',
    require: 'off'
  },
  rules: {
    'node/no-unsupported-features/es-syntax': [
      'error',
      // We could check for `ecmaVersion < 2020` to restrict `dynamicImport`,
      //   but if present, typically compiling, and seems support was available
      //   in earlier Node experimentally anyways
      {ignores: ['modules', 'dynamicImport']}
    ]
  }
};
