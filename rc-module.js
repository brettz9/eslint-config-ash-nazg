import sauronNode from './sauron-node.js';

export default [sauronNode, {
  rules: {
    'compat/compat': 'off',
    'no-console': 'off',
    'import/no-anonymous-default-export': 'off',
    'n/no-process-env': 'off',
    'n/no-unpublished-import': 'off'
  }
}];
