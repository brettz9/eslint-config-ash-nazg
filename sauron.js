'use strict';

module.exports = {
  extends: ['./index.js', 'plugin:no-unsanitized/DOM'],
  settings: {
    jsdoc: {
      preferredTypes: {
        '*': {
          message: 'Use a more precise type or if necessary use `any` or `ArbitraryCallbackResult`',
          replacement: 'any'
        },
        Any: {
          message: 'Use a more precise type or if necessary use `any` or `ArbitraryCallbackResult`',
          replacement: 'any'
        },
        Function: {
          message: 'Point to a `@callback` namepath or `GenericCallback` if truly arbitrary in form',
          replacement: 'GenericCallback'
        },
        function: {
          message: 'Point to a `@callback` namepath or `GenericCallback` if truly arbitrary in form',
          replacement: 'GenericCallback'
        },
        Promise: {
          message: 'Specify the specific Promise type, including, if necessary, the type `Any`'
        },
        '.<>': {
          message: 'Prefer type form without dot',
          replacement: '<>'
        },
        Object: {
          message: 'Use the specific object type or `PlainObject` if truly arbitrary',
          replacement: 'PlainObject'
        },
        object: {
          message: 'Use the specific object type or `PlainObject` if truly arbitrary',
          replacement: 'PlainObject'
        },
        Array: {
          message: 'Use `GenericArray` if it is truly arbitrary.',
          replacement: 'GenericArray'
        },
        array: {
          message: 'Use `GenericArray` if it is truly arbitrary.',
          replacement: 'GenericArray'
        }
      }
    }
  },
  rules: {
    'class-methods-use-this': ['warn'],
    'consistent-this': ['warn'],
    'default-case': ['warn'],
    'max-len': ['warn', {
      ignoreUrls: true,
      ignoreRegExpLiterals: true
    }],
    'no-alert': ['warn'],
    'no-console': ['warn'],
    'no-empty-function': ['warn'],
    'no-shadow': ['warn', {builtinGlobals: true, hoist: 'functions', allow: ['parent', 'top', 'open', 'close', 'stop', 'blur', 'status', 'name', 'closed', 'start']}],
    'prefer-named-capture-group': ['warn'],
    'prefer-numeric-literals': ['warn'],
    'require-unicode-regexp': ['warn'],
    'vars-on-top': ['warn'],

    'import/unambiguous': 'warn',
    'import/no-commonjs': 'warn',

    'jsdoc/require-jsdoc': ['warn', {
      require: {
        // ArrowFunctionExpression: true,
        ClassDeclaration: true,
        ClassExpression: true,
        FunctionDeclaration: true, // Default is true
        // FunctionExpression: true,
        MethodDefinition: true
      }
    }],

    'jsdoc/implements-on-classes': ['error', {
      contexts: ['any']
    }],
    'jsdoc/require-returns': ['warn', {
      forceRequireReturn: true,
      contexts: ['any']
    }],
    'jsdoc/require-param-name': ['warn', {
      contexts: ['any']
    }],
    'jsdoc/require-param-type': ['warn', {
      contexts: ['any']
    }],
    'jsdoc/require-returns-type': ['warn', {
      contexts: ['any']
    }],
    'jsdoc/require-throws': ['warn', {
      contexts: ['any']
    }],

    'promise/no-nesting': 'warn',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-callback-in-promise': 'warn',
    'promise/avoid-new': 'warn',
    'promise/no-return-in-finally': 'warn',
    'promise/valid-params': 'warn',
    'promise/prefer-await-to-callbacks': 'warn',

    'unicorn/no-array-callback-reference': 'warn',
    'unicorn/prefer-number-properties': 'warn',
    'unicorn/prefer-string-slice': 'error',

    'eslint-comments/require-description': 'error'
  }
};
