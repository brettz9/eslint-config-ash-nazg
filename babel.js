// Move to own repo so can have `@babel/eslint-parser` and
//   `@babel/eslint-plugin` as deps.

// Adapted from MIT-licensed: https://github.com/futagoza/eslint-config-futagozaryuu/blob/master/packages/%40futagoza/eslint-config-core/stylistic-issues.js

// Types: https://github.com/babel/babel/issues/16221

import babelParser from '@babel/eslint-parser';
import babelEslintPlugin from '@babel/eslint-plugin';

/**
 * Allows passing in a whole config to wrap.
 * @param {import('eslint').Linter.Config} config
 * @returns {import('eslint').Linter.Config}
 */
export default function babelConfig (config) {
  return {
    name: 'ash-nazg/babel',
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        // eslint-disable-next-line unicorn/no-useless-fallback-in-spread -- TS
        ...config.languageOptions?.parserOptions ?? {},
        requireConfigFile: false
      }
    },

    plugins: {
      ...config.plugins,
      babelEslintPlugin
    },
    rules: {

      ...config.rules,

      // `@babel/eslint-plugin` provides better support for the following rules

      'new-cap': 'off',
      'no-invalid-this': 'off',
      'no-unused-expressions': 'off',

      '@stylistic/object-curly-spacing': 'off',
      'object-curly-spacing': 'off',
      '@stylistic/semi': 'off',
      semi: 'off',

      /**
       * Require constructor names to begin with a capital letter.
       *
       * @see {@link https://eslint.org/docs/rules/new-cap}
       * @see {@link https://github.com/babel/babel/tree/master/eslint/babel-eslint-plugin#rules}
       */
      '@babel/new-cap': config?.rules?.['new-cap'] || 'off',

      /**
       * Disallow `this` keywords outside of classes or class-like objects.
       *
       * @see {@link https://eslint.org/docs/rules/no-invalid-this}
       * @see {@link https://github.com/babel/babel/tree/master/eslint/babel-eslint-plugin#rules}
       */
      '@babel/no-invalid-this': config?.rules?.['no-invalid-this'] || 'off',

      /**
       * Disallow unused expressions.
       *
       * @see {@link https://eslint.org/docs/rules/no-unused-expressions}
       * @see {@link https://github.com/babel/babel/tree/master/eslint/babel-eslint-plugin#rules}
       */
      '@babel/no-unused-expressions':
        config?.rules?.['no-unused-expressions'] || 'off',

      /**
       * Enforce consistent spacing inside braces (🔧 ).
       *
       * @see {@link https://eslint.org/docs/rules/object-curly-spacing}
       * @see {@link https://github.com/babel/babel/tree/master/eslint/babel-eslint-plugin#rules}
       */
      '@babel/object-curly-spacing':
        config?.rules?.['object-curly-spacing'] || 'off',

      /**
       * Require or disallow semicolons instead of ASI (🔧).
       *
       * @see {@link https://eslint.org/docs/rules/semi}
       * @see {@link https://github.com/babel/babel/tree/master/eslint/babel-eslint-plugin#rules}
       */
      '@babel/semi': config?.rules?.semi || 'off'
    }
  };
}
