'use strict';

module.exports = {
  extends: ['./index.js', 'plugin:no-unsanitized/DOM'],
  settings: {
    jsdoc: {
      preferredTypes: {
        '*': {
          message: 'Use a more precise type or if necessary use `any` or add to a `typedef`.',
          replacement: 'any'
        },
        any: {
          message: 'Use a more precise type or if necessary use in a `typedef`',
          replacement: false
        },
        Any: {
          message: 'Use a more precise type or if necessary use `any` or add to a `typedef`.',
          replacement: 'any'
        },
        Function: {
          message: 'Point to a `@callback` namepath or add to a `typedef` if truly arbitrary in form',
          replacement: false
        },
        function: {
          message: 'Point to a `@callback` namepath or add `Function` to a `typedef` if truly arbitrary in form',
          replacement: 'Function'
        },
        Promise: {
          message: 'Specify the specific Promise type, including, if necessary, pointing to the type `any`',
          replacement: false
        },
        '.<>': {
          message: 'Prefer type form without dot',
          replacement: '<>'
        },
        Object: {
          message: 'Use the specific object type or add `object` to a typedef if truly arbitrary',
          replacement: 'object'
        },
        object: {
          message: 'Use the specific object type or add to a typedef if truly arbitrary',
          replacement: false
        },
        Array: {
          message: 'Use the specific array type or add it to a typedef if it is truly arbitrary.',
          replacement: false
        },
        array: {
          message: 'Use the specific array type or add `Array` to a typedef if it is truly arbitrary.',
          replacement: false
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

    'no-implicit-globals': ['error', {lexicalBindings: true}],

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
      forceReturnsWithAsync: true,
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
