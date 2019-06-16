module.exports = {
  rules: {
    // This file is for indicating those rules available in inherited plugins
    // which we have consciously not included (and not help catch any not
    // so considered as part of our `build.js` routines). See the README for
    // details on why we have decided not to include these.
    "array-element-newline": ["off"],
    "arrow-body-style": ["off"],
    "func-names": ["off"],
    "func-style": ["off"],
    "id-blacklist": ["off"],
    "id-length": ["off"],
    "id-match": ["off"],
    "init-declarations": ["off"],
    "line-comment-position": ["off"],
    "lines-around-comment": ["off"],
    "lines-between-class-members": ["off"],
    "max-classes-per-file": ["off"],
    "max-depth": ["off"],
    "max-lines-per-function": ["off"],
    "max-lines": ["off"],
    "max-params": ["off"],
    "multiline-comment-style": ["off"],
    "newline-per-chained-call": ["off"],
    "no-continue": ["off"],
    "no-inline-comments": ["off"],
    "no-invalid-this": ["off"],
    "no-multi-assign": ["off"],
    "no-negated-condition": ["off"],
    "no-nested-ternary": ["off"],
    "no-param-reassign": ["off"],
    "no-restricted-imports": ["off"],
    "no-restricted-modules": ["off"],
    "no-ternary": ["off"],
    "no-undefined": ["off"],
    "no-underscore-dangle": ["off"],
    "no-useless-concat": ["off"],
    "object-curly-newline": ["off"],
    "one-var-declaration-per-line": ["off"],
    "padding-line-between-statements": ["off"],
    "prefer-arrow-callback": ["off"],
    "prefer-template": ["off"],
    "sort-imports": ["off"],
    "sort-keys": ["off"],
    "sort-vars": ["off"],

    // Deprecated
    "node/no-hide-core-modules": "off",
    "node/no-unsupported-features": "off",
    "import/imports-first": ["off"],

    // NON-RECOMMENDED (so no need to add to `index.js`, etc. and override)

    "import/dynamic-import-chunkname": ["off"],
    "import/exports-last": ["off"],
    "import/group-exports": ["off"],
    "import/max-dependencies": ["off"],
    "import/no-cycle": ["off"],
    "import/no-default-export": ["off"],
    "import/no-internal-modules": ["off"],
    "import/no-named-export": ["off"],
    "import/no-namespace": ["off"],
    "import/no-nodejs-modules": ["off"],
    "import/no-relative-parent-imports": ["off"],
    "import/no-restricted-paths": ["off"],
    "import/no-unassigned-import": ["off"],
    "import/prefer-default-export": ["off"],

    "promise/no-native": ["off"],

    "@mysticatea/arrow-parens": "off",
    "@mysticatea/no-instanceof-array": "off",
    "@mysticatea/no-instanceof-wrapper": "off",

    "eslint-comments/no-restricted-disable": ["off"],
    "eslint-comments/no-use": ["off"],

    "jsdoc/require-description-complete-sentence": ["off"],
    "jsdoc/require-hyphen-before-param-description": ["off"],

    // These rules are actually part of recommended, but since it is "off"
    //   there, we don't include it in comparisons to show what is
    //   inherited from `recommended` or unused from the plugin so we
    //   need to add here
    "jsdoc/no-types": ["off"],

    "unicorn/no-unused-properties": ["off"]
  }
};
