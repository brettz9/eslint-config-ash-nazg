import globals from 'globals';
import bare from './bare.js';

export default /** @type {import('eslint').Linter.Config[]} */ ([
  {
    name: 'ash-nazg/polyglot',
    languageOptions: {
      globals: globals['shared-node-browser']
    }
  },
  ...bare
]);
