import node from 'eslint-plugin-n';
import globals from 'globals';

export default /** @type {import('eslint').Linter.Config[]} */ ([
  node.configs['flat/recommended-script'],
  {
    name: 'ash-nazg/script-node',
    languageOptions: {
      globals: globals.node,
      sourceType: 'script', // Necessary to restate this?
      parserOptions: {
        ecmaFeatures: {
          globalReturn: true
        }
      }
    },
    rules: {
      // Allow for Node or Unicorn
      // 'no-process-exit': 'off', // Deprecated

      'import/no-commonjs': 'off',
      strict: ['error', 'global']
    }
  }
]);
