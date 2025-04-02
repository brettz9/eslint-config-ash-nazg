
import index from './index.js';

/** @type {import('eslint').Linter.Config[]} */
const config = [
  ...index([
    'sauron', 'node'
  ]),
  {
    files: ['README.md/*.js'],
    rules: {
      'import/no-unresolved': 'off'
    }
  },
  {
    name: 'ash-nazg-internal/inherited',
    files: ['inherited-rules/**'],
    ignores: ['inherited-rules/build.js'],
    rules: {
      // Uses JSON.stringify
      '@stylistic/quotes': ['error', 'double'],
      '@stylistic/quote-props': 'off'
    }
  }
];

// console.log('config', config[35]);

export default config; // .slice(0, 34);
