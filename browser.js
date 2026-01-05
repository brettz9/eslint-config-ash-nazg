import eslintCompat from 'eslint-plugin-compat';
import esCompat from 'eslint-plugin-escompat';
import noUnsanitized from 'eslint-plugin-no-unsanitized';

export default /** @type {import('eslint').Linter.Config[]} */ ([
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
  noUnsanitized.configs.recommended,
  {
    name: 'ash-nazg/browser',
    rules: {
      'no-implicit-globals': ['error', {lexicalBindings: true}]
    }
  }
]);
