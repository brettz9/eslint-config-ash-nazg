import sauronNodeScriptOverrides from './sauron-node-script-overrides.js';
import sauronNodeOverrides from './sauron-node-overrides.js';

export default [...sauronNodeScriptOverrides, {
  files: ['inherited-rules/**'],
  rules: {
    // Uses JSON.stringify
    '@stylistic/quotes': ['error', 'double'],
    '@stylistic/quote-props': 'off'
  }
}, {
  ...sauronNodeOverrides,
  files: ['inherited-rules/build.js'],
}, {
  settings: {
    polyfills: [
      'Object.entries',
      'Object.values'
    ]
  },
  rules: {
    '@stylistic/max-len': 'off'
  }
}];
