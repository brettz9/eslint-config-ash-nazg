// import {fixupPluginRules} from '@eslint/compat'
// import {FlatCompat} from '@eslint/eslintrc';

import stylistic from '@stylistic/eslint-plugin';
import js from '@eslint/js';
import brettz9 from '@brettz9/eslint-plugin';

import markdown from '@eslint/markdown';
import html from 'eslint-plugin-html';
import promise from 'eslint-plugin-promise';
// import importPlugin from 'eslint-plugin-import';
import unicorn from 'eslint-plugin-unicorn';
import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';

import arrayFunc from 'eslint-plugin-array-func';
import sonarjs from 'eslint-plugin-sonarjs';
import jsdoc from 'eslint-plugin-jsdoc';
import noUseExtendNative from 'eslint-plugin-no-use-extend-native';

import script from './script.js';
import modules from './modules.js';
import standard from './standard.js';
import {addFiles} from './index.js';

// const __dirname = import.meta.dirname;
// const compat = new FlatCompat({
//   baseDirectory: __dirname
// });

/**
 * @type {(cfg: {
 *   type?: "module"|"commonjs"
 * }) => import('eslint').Linter.Config[]}
 */
export default function main (pkg) {
  return [
    {
      name: 'ash-nazg/ignore-dist',
      ignores: ['dist'] // "third-party" can unset
    },
    ...(/** @type {import('eslint').Linter.Config[]} */ (
      addFiles(pkg.type === 'module' ? modules : script, ['**/*.js'])
    )),
    {
      ...script[0],
      name: 'ash-nazg/script/cjs',
      files: ['**/*.cjs']
    },
    {
      ...modules[0],
      name: 'ash-nazg/modules/mjs',
      files: ['**/*.mjs']
    },
    {
      name: 'ash-nazg/@eslint-js/recommended',
      ...js.configs.recommended
    },
    ...brettz9.configs.es6,

    // These may override 'standard' which includes their rules,
    //   so including first
    // ...compat.extends('plugin:import/recommended'), // Todo: Reenable after ESLint 9/Flat support: https://github.com/import-js/eslint-plugin-import/issues/2948
    promise.configs['flat/recommended'],
    // This may override eslint:recommended and the promise/import rules,
    //  but it doesn't turn any off
    standard[0], // Using this until eslint-config-standard fixes

    // These only add their own rules and are not used by the others
    unicorn.configs['flat/recommended'],
    {
      name: 'ash-nazg/comments/recommended',
      ...comments.recommended
    },
    {
      name: 'ash-nazg/array-func/all',
      ...arrayFunc.configs.all
    },
    {
      name: 'ash-nazg/sonarjs/recommended',
      ...(/** @type {import('eslint').Linter.Config} */ (
        sonarjs.configs.recommended
      ))
    },
    jsdoc.configs['flat/recommended'],
    {
      name: 'ash-nazg/no-use-extend-native/recommended',
      ...noUseExtendNative.configs.recommended
    },

    modules[0],
    {
      name: 'ash-nazg/main',
      plugins: {
        '@stylistic': stylistic,
        // Avoid its `recommended` config
        markdown,
        // This has no rules
        html // In case this doesn't work? https://github.com/BenoitZugmeyer/eslint-plugin-html/issues/250
      },
      settings: {
        jsdoc: {
          structuredTags: {
            yields: {
              name: 'text',
              required: ['type'],
              type: true
            }
          },
          tagNamePreference: {
            augments: 'extends'
          }
        }
      },
      rules: {
        // RULES SHOULD ONLY BE DIFFERENT FROM INHERITED (ENABLING,
        //   DISABLING, CHANGING)

        '@stylistic/array-bracket-newline': ['error', 'consistent'],
        '@stylistic/array-bracket-spacing': ['error'],
        '@stylistic/arrow-parens': ['error'],
        '@stylistic/computed-property-spacing': ['error'],
        '@stylistic/function-paren-newline': ['error', 'consistent'],
        '@stylistic/implicit-arrow-linebreak': ['error'],
        '@stylistic/indent': ['error', 2, {outerIIFEBody: 0}],
        '@stylistic/jsx-quotes': ['error'],
        '@stylistic/linebreak-style': ['error'],
        '@stylistic/multiline-ternary': ['error', 'always-multiline'],
        '@stylistic/no-confusing-arrow': ['error'],
        '@stylistic/no-extra-semi': ['error'],
        '@stylistic/nonblock-statement-body-position': ['error'],
        '@stylistic/object-curly-spacing': ['error', 'never'],
        '@stylistic/quote-props': ['error', 'as-needed'],
        '@stylistic/quotes': ['error', 'single', {
          avoidEscape: true,
          allowTemplateLiterals: true
        }],
        '@stylistic/semi': ['error', 'always'],
        '@stylistic/semi-style': ['error'],
        '@stylistic/switch-colon-spacing': ['error'],
        '@stylistic/wrap-regex': ['error'],

        // Disable standard (which still uses)
        '@stylistic/lines-between-class-members': 'off',
        // 'lines-between-class-members': 'off', // Deprecated
        '@stylistic/object-curly-newline': ['off'],
        // 'object-curly-newline': ['off'], // Deprecated
        '@stylistic/object-property-newline': ['off'],
        // 'object-property-newline': ['off'], // Deprecated
        '@stylistic/no-extra-parens': ['off'],
        // 'no-extra-parens': ['off'], // Deprecated

        // Override standard
        '@stylistic/padded-blocks': ['error', 'never'],
        // 'padded-blocks': ['error', 'never'], // Deprecated
        '@stylistic/spaced-comment': ['error', 'always', {markers: ['/']}],

        // Disable non-stylistic from standard
        'no-use-before-define': 'off',

        'array-callback-return': ['error'],
        'block-scoped-var': ['error'],
        'consistent-return': ['error'],
        'default-case-last': ['error'],
        'default-param-last': ['error'],
        'dot-notation': ['error'],
        'func-name-matching': ['error'],
        'grouped-accessor-pairs': ['error'],
        'guard-for-in': ['error'],
        'max-nested-callbacks': ['error'],
        'no-await-in-loop': ['error'],
        'no-constant-binary-expression': 'error',
        'no-bitwise': ['error'],
        // 'no-buffer-constructor': ['error'], // Deprecated
        'no-constructor-return': ['error'],
        'no-div-regex': ['error'],
        'no-duplicate-imports': ['error'],
        'no-else-return': ['error'],
        'no-empty': ['error', {allowEmptyCatch: true}],
        'no-empty-static-block': 'error',
        'no-eq-null': ['error'],
        'no-extra-label': ['error'],
        'no-implicit-coercion': ['error'],
        'no-implicit-globals': ['error'],
        'no-lonely-if': ['error'],
        'no-loop-func': ['error'],
        'no-loss-of-precision': ['error'],
        'no-new-native-nonconstructor': 'error',
        'no-nonoctal-decimal-escape': ['error'],
        'no-object-constructor': ['error'],
        'no-restricted-globals': ['error', {
          name: 'event',
          message: 'Use local event parameter instead ' +
            '(preferably as \'e\' or \'ev\').'
        }, {
          name: 'fdescribe',
          message: 'Do not commit fdescribe. Use describe instead.'
        }],
        'no-restricted-properties': ['error', {
          property: '__defineGetter__',
          message: 'Please use `Object.defineProperty` instead.'
        }],
        'no-script-url': ['error'],
        'no-unsafe-optional-chaining': ['error'],
        'no-unused-private-class-members': ['error'],
        'no-useless-backreference': ['error'],
        'no-var': ['error'],
        'no-void': ['error'],
        'no-warning-comments': ['error', {terms: ['fixme', 'xxx']}],
        'object-shorthand': ['error', 'always', {
          avoidExplicitReturnArrows: true
        }],
        'operator-assignment': ['error'],
        'prefer-const': ['error'],
        'prefer-destructuring': ['error', {object: true}],
        'prefer-exponentiation-operator': ['error'],
        'prefer-object-spread': ['error'],
        'prefer-regex-literals': ['error'],
        'prefer-rest-params': ['error'],
        'prefer-spread': ['error'],
        radix: ['error', 'as-needed'],
        'require-await': ['error'],
        strict: ['off'],

        'no-restricted-syntax': ['error', '[operator=instanceof]'],

        'no-promise-executor-return': 'error',
        'no-unreachable-loop': 'error',

        // Disable standard
        'one-var': ['off'],

        // PROMISE
        'promise/no-multiple-resolved': 'error',
        'promise/no-new-statics': 'error',
        'promise/prefer-await-to-then': ['error', {
          strict: true
        }],

        // PROMISE DISABLE
        'promise/param-names': 'off',
        'promise/no-native': 'off',
        'promise/no-nesting': 'off',
        'promise/no-promise-in-callback': 'off',
        'promise/no-callback-in-promise': 'off',
        'promise/avoid-new': 'off',
        'promise/no-return-in-finally': 'off',
        'promise/valid-params': 'off',

        // IMPORT
        // Todo: Reenable
        // 'import/no-absolute-path': 'error',
        // 'import/no-dynamic-require': 'error',
        // 'import/no-empty-named-blocks': 'error',
        // 'import/no-self-import': 'error',
        // 'import/no-useless-path-segments': 'error',
        // 'import/no-named-as-default': 'error',
        // 'import/no-named-as-default-member': 'error',
        // 'import/no-deprecated': 'error',
        // 'import/no-extraneous-dependencies': 'error',
        // 'import/no-mutable-exports': 'error',
        // 'import/no-amd': 'error',

        // 'import/no-unresolved': ['error', {
        //   ignore: ['fs/promises', '@uce', '@uce/reactive']
        // }],

        // 'import/extensions': ['error', 'always', {ignorePackages: true}],
        // 'import/order': ['error', {groups: [
        //   'builtin',
        //   'external',
        //   'internal',
        //   ['parent', 'sibling', 'index']
        // ]}],
        // 'import/newline-after-import': 'error',
        // 'import/no-anonymous-default-export': 'error',

        // JSDOC DISABLE
        'jsdoc/check-alignment': ['off'],
        'jsdoc/newline-after-description': ['off'],
        'jsdoc/no-undefined-types': ['off'],
        'jsdoc/require-description': ['off'],
        'jsdoc/require-param-description': ['off'],
        'jsdoc/require-returns-description': ['off'],
        'jsdoc/require-example': ['off'],
        'jsdoc/require-jsdoc': ['off'],
        'jsdoc/require-returns': ['off'],
        'jsdoc/require-property-description': 'off',
        'jsdoc/check-line-alignment': 'off',

        // JSDOC
        // Disable until ESLint 9 supports
        'jsdoc/check-examples': 0,
        /*
        'jsdoc/check-examples': ['error', {
          rejectExampleCodeRegex: '^`',
          checkDefaults: true,
          checkParams: true,
          checkProperties: true
        }],
        */
        'jsdoc/tag-lines': ['warn', 'never', {
          startLines: null
        }],
        'jsdoc/require-asterisk-prefix': ['error', 'always', {
          tags: {
            any: ['example', 'license', 'copyright']
          }
        }],
        'jsdoc/check-param-names': ['error'],
        'jsdoc/check-syntax': ['error'],
        'jsdoc/check-tag-names': ['error'],
        'jsdoc/check-types': ['error', {
          exemptTagContexts: [
            {
              tag: 'typedef',
              types: ['object', 'Array', 'Function', 'any']
            }
          ]
        }],
        'jsdoc/imports-as-dependencies': 'error',
        'jsdoc/match-description': ['error', {
          contexts: ['any']
        }],
        'jsdoc/no-bad-blocks': ['error'],
        'jsdoc/valid-types': ['error'],

        // Unicorn disable
        'unicorn/catch-error-name': 'off',
        'unicorn/consistent-destructuring': 'off',
        'unicorn/consistent-function-scoping': 'off',
        'unicorn/empty-brace-spaces': 'off',
        'unicorn/explicit-length-check': 'off',
        'unicorn/filename-case': 'off',
        // 'unicorn/import-index': 'off', // Deprecated
        'unicorn/import-style': 'off',
        'unicorn/no-array-for-each': 'off',
        'unicorn/no-array-reduce': 'off',
        'unicorn/no-await-expression-member': 'off',
        'unicorn/no-lonely-if': 'off',
        'unicorn/no-negated-condition': 'off',
        'unicorn/no-nested-ternary': 'off',
        'unicorn/no-null': 'off',
        'unicorn/no-typeof-undefined': 'off',
        'unicorn/no-unreadable-array-destructuring': 'off',
        'unicorn/no-useless-switch-case': 'off',
        'unicorn/no-useless-undefined': 'off',
        'unicorn/numeric-separators-style': 'off',

        // Disabling as array-func supports
        'unicorn/prefer-array-flat': 'off',
        'unicorn/prefer-array-flat-map': 'off',

        'unicorn/prevent-abbreviations': 'off',
        // 'unicorn/prefer-exponentiation-operator': 'off', // Deprecated
        'unicorn/prefer-export-from': 'off',
        'unicorn/prefer-module': 'off',
        'unicorn/prefer-node-protocol': 'off',
        'unicorn/prefer-number-properties': 'off',
        'unicorn/prefer-object-from-entries': 'off',
        'unicorn/prefer-prototype-methods': 'off',
        'unicorn/prefer-set-has': 'off',
        'unicorn/prefer-string-slice': 'off',
        'unicorn/prefer-optional-catch-binding': 'off',
        'unicorn/switch-case-braces': 'off',
        'unicorn/template-indent': 'off',
        'unicorn/throw-new-error': 'off',

        // UNICORN
        'unicorn/better-regex': ['error', {sortCharacterClasses: false}],
        'unicorn/custom-error-definition': 'error',
        // 'unicorn/no-unsafe-regex': 'error', // Removed
        'unicorn/prefer-event-target': 'error',
        'unicorn/require-post-message-target-origin': 'error',

        'unicorn/expiring-todo-comments': ['error', {
          allowWarningComments: true, terms: ['todo']
        }],

        // Adding here for comparison purposes only (already added by
        //   eslint:recommended)
        'no-label-var': 'error',

        // eslint-comments
        '@eslint-community/eslint-comments/no-unused-disable': 'error',
        '@eslint-community/eslint-comments/disable-enable-pair': [
          'error', {allowWholeFile: true}
        ],

        // array-func
        'array-func/prefer-array-from': 'off',

        // SonarJS
        'sonarjs/no-inverted-boolean-check': 'error',

        // Due to bug: https://sonarsource.atlassian.net/browse/JS-296
        'sonarjs/sonar-no-fallthrough': 'off',

        'sonarjs/max-switch-cases': 'off',
        'sonarjs/no-collapsible-if': 'off',
        'sonarjs/no-commented-code': 'off',
        'sonarjs/no-duplicate-string': 'off',
        'sonarjs/no-identical-functions': 'off',
        'sonarjs/no-nested-conditional': 'off',
        'sonarjs/no-small-switch': 'off',
        'sonarjs/prefer-immediate-return': 'off',
        'sonarjs/cognitive-complexity': 'off',
        'sonarjs/no-nested-switch': 'off',
        'sonarjs/no-nested-template-literals': 'off',
        'sonarjs/todo-tag': 'off',

        'sonarjs/no-nested-functions': 'off',
        'sonarjs/no-lonely-if': 'off',
        'sonarjs/no-self-compare': 'off',
        'sonarjs/prefer-default-last': 'off',
        'sonarjs/no-primitive-wrappers': 'off',
        'sonarjs/regex-complexity': 'off',
        'sonarjs/slow-regex': 'off',
        // Handling elsewhere
        'sonarjs/code-eval': 'off',

        // Disable @brettz9/eslint-plugin
        '@brettz9/prefer-for-of': 'off',
        '@brettz9/no-use-ignored-vars': 'off'
      }
    }
  ];
}
