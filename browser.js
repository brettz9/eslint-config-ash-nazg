import eslintCompat from 'eslint-plugin-compat';
import esCompat from 'eslint-plugin-escompat';
// import noUnsanitized from 'eslint-plugin-no-unsanitized'; // Todo: Disable until https://github.com/mozilla/eslint-plugin-no-unsanitized/pull/239#issuecomment-2132867450

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    name: 'ash-nazg/browser/settings',
    settings: {
      // for `eslint-plugin-compat` (may currently catch some escompat does not)
      lintAllEsApis: true
    }
  },
  {
    name: 'ash-nazg/compat/flat-recommended',
    ...eslintCompat.configs['flat/recommended']
  },
  esCompat.configs['flat/recommended'],
  // noUnsanitized.DOM,
  {
    name: 'ash-nazg/browser',
    rules: {
      'no-implicit-globals': ['error', {lexicalBindings: true}]
    }
  }
];
