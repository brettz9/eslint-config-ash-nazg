'use strict';

module.exports = {
  extends: ['./sauron.js'],
  settings: {
    preferredTypes: {
      'Promise.<>': {
        message: 'Non-preferred @{{tagName}}{{tagValue}} type "Promise"; prefer a more specific `@interface`+`@class`-defined constructor (or use `typeof Promise` as its base type if using typescript mode) so that its resolve and reject functions can be specified: https://github.com/jsdoc/jsdoc/issues/509#issuecomment-764509057.',
        replacement: false
      },
      number: {
        message: 'Use `Integer` or `Float`',
        replacement: false
      }
    }
  },
  rules: {
    'capitalized-comments': ['warn'],
    complexity: ['warn'],
    'max-statements': ['warn'],
    'max-statements-per-line': ['warn'],
    'no-magic-numbers': ['warn'],
    'no-plusplus': ['warn'],
    'no-warning-comments': ['warn'],

    'import/no-unused-modules': ['warn', {missingExports: true, unusedExports: true}],

    'jsdoc/check-alignment': ['warn'],
    'jsdoc/check-indentation': ['warn'],
    'jsdoc/require-description': ['warn'],
    'jsdoc/require-param-description': ['warn'],
    'jsdoc/require-property-description': ['warn'],
    'jsdoc/require-returns-description': ['warn'],
    'jsdoc/require-example': ['warn'],
    'jsdoc/require-jsdoc': ['error'],

    'radar/cognitive-complexity': 'warn',

    'unicorn/numeric-separators-style': 'error',
    'unicorn/prevent-abbreviations': 'error',
    'unicorn/expiring-todo-comments': ['warn', {allowWarningComments: false, terms: ['todo']}],
    'unicorn/prefer-set-has': 'error'
  }
};
