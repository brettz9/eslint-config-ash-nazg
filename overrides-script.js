/* eslint-disable jsdoc/imports-as-dependencies -- Bug */

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    name: 'ash-nazg/overrides-script',
    rules: {
      'compat/compat': 'off',
      'no-console': 'off',
      'n/no-process-env': 'off'
    }
  }
];
