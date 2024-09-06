
/** @type {import('eslint').Linter.Config[]} */
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
