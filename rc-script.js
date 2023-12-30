import sauronNodeScript from './sauron-node-script.js';

export default [...sauronNodeScript, {
  rules: {
    'compat/compat': 'off',
    'no-console': 'off',
    'n/no-process-env': 'off',
    'n/no-unpublished-import': 'off'
  }
}];
