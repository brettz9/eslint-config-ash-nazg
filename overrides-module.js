/* eslint-disable jsdoc/imports-as-dependencies -- Bug */

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    name: 'ash-nazg/overrides-module',
    rules: {
      'compat/compat': 'off',
      'no-console': 'off',
      'import/no-anonymous-default-export': 'off',
      'n/no-process-env': 'off'
    }
  }
];
