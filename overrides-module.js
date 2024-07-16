/* eslint-disable jsdoc/imports-as-dependencies -- Bug */

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    rules: {
      'compat/compat': 'off',
      'no-console': 'off',
      'import/no-anonymous-default-export': 'off',
      'n/no-process-env': 'off'
    }
  }
];
