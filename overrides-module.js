
/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    name: 'ash-nazg/overrides-module',
    rules: {
      'compat/compat': 'off',
      'no-console': 'off',
      'unicorn/no-anonymous-default-export': 'off',
      'import-x/no-anonymous-default-export': 'off',
      'n/no-process-env': 'off'
    }
  }
];
