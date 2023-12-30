import node from 'eslint-plugin-n';
import globals from 'globals';

export default [node['recommended-script'], {
  languageOptions: {
    globals: {
      ...globals.node
    },
    parserOptions: {
      ecmaFeatures: {
        globalReturn: true
      }
    }
  },
  rules: {
    // Allow for Node or Unicorn
    'no-process-exit': 'off',

    'import/no-commonjs': 'off',
    strict: ['error']
  }
}];
