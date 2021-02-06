'use strict';

// Move to own repo so can have `@babel/eslint-parser` and `@babel/eslint-plugin` as deps.

// Adapted from MIT-licensed: https://github.com/futagoza/eslint-config-futagozaryuu/blob/master/packages/%40futagoza/eslint-config-core/stylistic-issues.js

/**
 * Allows passing in a whole config to wrap.
 * @param {ESLintConfig} config
 * @returns {ESLintConfig}
 */
module.exports = function (config) {
  return {
    parser: '@babel/eslint-parser',
    parserOptions: {
      ...config.parserOptions,
      requireConfigFile: false
    },

    plugins: [
      ...config.plugins,
      '@babel/eslint-plugin'
    ],
    rules: {

      ...config.rules,

      // `@babel/eslint-plugin` provides better support for the following rules

      'new-cap': 'off',
      'no-invalid-this': 'off',
      'no-unused-expressions': 'off',
      'object-curly-spacing': 'off',
      semi: 'off',

      /**
       * Require constructor names to begin with a capital letter.
       *
       * @see
       * - http://eslint.org/docs/rules/new-cap
       * - https://github.com/babel/babel/tree/master/eslint/babel-eslint-plugin#rules
       */
      '@babel/new-cap': config.rules['new-cap'] || 'off',

      /**
       * Disallow `this` keywords outside of classes or class-like objects.
       *
       * @see
       * - http://eslint.org/docs/rules/no-invalid-this
       * - https://github.com/babel/babel/tree/master/eslint/babel-eslint-plugin#rules
       */
      '@babel/no-invalid-this': config.rules['no-invalid-this'] || 'off',

      /**
       * Disallow unused expressions.
       *
       * @see
       * - http://eslint.org/docs/rules/no-unused-expressions
       * - https://github.com/babel/babel/tree/master/eslint/babel-eslint-plugin#rules
       */
      '@babel/no-unused-expressions': config.rules['no-unused-expressions'] || 'off',

      /**
       * Enforce consistent spacing inside braces (🔧 ).
       *
       * @see
       * - http://eslint.org/docs/rules/object-curly-spacing
       * - https://github.com/babel/babel/tree/master/eslint/babel-eslint-plugin#rules
       */
      '@babel/object-curly-spacing': config.rules['object-curly-spacing'] || 'off',

      /**
       * Require or disallow semicolons instead of ASI (🔧).
       *
       * @see
       * - http://eslint.org/docs/rules/semi
       * - https://github.com/babel/babel/tree/master/eslint/babel-eslint-plugin#rules
       */
      '@babel/semi': config.rules.semi || 'off'
    }
  };
};
