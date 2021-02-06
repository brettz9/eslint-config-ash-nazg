'use strict';

module.exports = {
  rules: {
    // This file is for indicating those rules available in inherited plugins
    // which we have consciously not included (and not help catch any not
    // so considered as part of our `build.js` routines). See the README for
    // details on why we have decided not to include these.
    'array-element-newline': 'off',
    'arrow-body-style': 'off',
    'function-call-argument-newline': 'off',
    'func-names': 'off',
    'func-style': 'off',
    'id-blacklist': 'off',
    'id-denylist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'init-declarations': 'off',
    'line-comment-position': 'off',
    'lines-around-comment': 'off',
    'lines-between-class-members': 'off',
    'max-classes-per-file': 'off',
    'max-depth': 'off',
    'max-lines-per-function': 'off',
    'max-lines': 'off',
    'max-params': 'off',
    'multiline-comment-style': 'off',
    'newline-per-chained-call': 'off',
    'no-continue': 'off',
    'no-inline-comments': 'off',
    'no-invalid-this': 'off',
    'no-multi-assign': 'off',
    'no-negated-condition': 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'no-restricted-exports': 'off',
    'no-restricted-imports': 'off',
    'no-restricted-modules': 'off',
    'no-return-await': 'off',
    'no-ternary': 'off',
    'no-undefined': 'off',
    'no-underscore-dangle': 'off',
    'no-useless-concat': 'off',
    'one-var-declaration-per-line': 'off',
    'padding-line-between-statements': 'off',
    'prefer-arrow-callback': 'off',
    'prefer-template': 'off',
    'require-atomic-updates': 'off',
    'sort-imports': 'off',
    'sort-keys': 'off',
    'sort-vars': 'off',

    // Node-specific rules that are apparently to be removed in ESLint 7
    //  (have replacements we are using in eslint-plugin-node)
    'callback-return': 'off',
    'global-require': 'off',
    'no-mixed-requires': 'off',
    'no-process-env': 'off',
    'no-sync': 'off',

    // Deprecated
    'node/no-hide-core-modules': 'off',
    'node/no-unsupported-features': 'off',
    'import/imports-first': 'off',
    'unicorn/regex-shorthand': 'off',

    // NON-RECOMMENDED (so no need to add to `index.js`, etc. and override)

    'import/dynamic-import-chunkname': 'off',
    'import/exports-last': 'off',
    'import/group-exports': 'off',
    'import/max-dependencies': 'off',
    'import/no-cycle': 'off',
    'import/no-default-export': 'off',
    'import/no-internal-modules': 'off',
    'import/no-named-export': 'off',
    'import/no-namespace': 'off',
    'import/no-nodejs-modules': 'off',
    'import/no-relative-parent-imports': 'off',
    'import/no-restricted-paths': 'off',
    'import/no-unassigned-import': 'off',
    'import/prefer-default-export': 'off',

    'node/no-restricted-import': 'off',
    'node/no-restricted-require': 'off',

    'promise/no-native': 'off',

    '@brettz9/arrow-parens': 'off',
    '@brettz9/no-instanceof-array': 'off',
    '@brettz9/no-instanceof-wrapper': 'off',

    'eslint-comments/no-restricted-disable': 'off',
    'eslint-comments/no-use': 'off',

    'jsdoc/no-defaults': 'off',
    'jsdoc/require-description-complete-sentence': 'off',
    'jsdoc/require-hyphen-before-param-description': 'off',
    'jsdoc/require-file-overview': 'off',

    // These rules are actually part of recommended, but since it is 'off'
    //   there, we don't include it in comparisons to show what is
    //   inherited from `recommended` or unused from the plugin so we
    //   need to add here
    'jsdoc/no-types': 'off',

    'unicorn/no-unused-properties': 'off',
    'unicorn/no-keyword-prefix': 'off',
    'unicorn/prefer-string-replace-all': 'off',
    'unicorn/string-content': 'off',

    // Renamed
    'unicorn/no-array-instanceof': 'off',
    'unicorn/no-fn-reference-in-iterator': 'off',
    'unicorn/no-reduce': 'off',
    'unicorn/prefer-dataset': 'off',
    'unicorn/prefer-node-append': 'off',
    'unicorn/prefer-node-remove': 'off',
    'unicorn/prefer-event-key': 'off',
    'unicorn/prefer-flat-map': 'off',
    'unicorn/prefer-replace-all': 'off',
    'unicorn/prefer-starts-ends-with': 'off',
    'unicorn/prefer-text-content': 'off',
    'unicorn/prefer-trim-start-end': 'off'
  }
};
