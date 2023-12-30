import babelEsintParser from '@babel/eslint-parser';

export default [
  // Not working
  // {
  //   ignores: ['!**/node_modules/*.js']
  // },
  {
    languageOptions: {
      parser: babelEsintParser,
      parserOptions: {
        requireConfigFile: false
      }
    },
    rules: {
      // Intrusive
      'no-global-assign': ['error'],

      // Vulnerable
      'no-eval': ['error']
    }
  }
];
