/* eslint-disable jsdoc/imports-as-dependencies -- Bug */
import sauron from './sauron.js';

/**
 * @type {(pkg: {
*   type?: "module"|"commonjs"
* }) => import('eslint').Linter.Config[]}
 */
export default function greatEye (pkg) {
  return [...sauron(pkg), {
    name: 'ash-nazg/great-eye',
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
      '@stylistic/max-statements-per-line': ['warn'],

      'capitalized-comments': ['warn'],
      complexity: ['warn'],
      'max-statements': ['warn'],
      'no-magic-numbers': ['warn'],
      'no-plusplus': ['warn'],
      'no-warning-comments': ['warn'],

      'no-shadow': ['warn', {
        builtinGlobals: true,
        hoist: 'all',
        allow: [
          'parent', 'top', 'open', 'close', 'stop', 'blur',
          'status', 'name', 'closed', 'start'
        ]
      }],

      // Todo: Reenable when reapplied
      // 'import/no-unused-modules': ['warn', {
      //   missingExports: true, unusedExports: true
      // }],

      'jsdoc/check-alignment': ['warn'],
      'jsdoc/check-indentation': ['warn'],
      'jsdoc/require-description': ['warn'],
      'jsdoc/require-param-description': ['warn'],
      'jsdoc/require-property-description': ['warn'],
      'jsdoc/require-returns-description': ['warn'],
      'jsdoc/require-example': ['warn'],
      'jsdoc/require-jsdoc': ['error'],

      'sonarjs/cognitive-complexity': 'warn',

      'unicorn/numeric-separators-style': 'error',
      'unicorn/prevent-abbreviations': 'error',
      'unicorn/expiring-todo-comments': ['warn', {
        allowWarningComments: false, terms: ['todo']
      }],
      'unicorn/prefer-set-has': 'error',
      'unicorn/prefer-object-has-own': 'error'
    }
  }];
}
