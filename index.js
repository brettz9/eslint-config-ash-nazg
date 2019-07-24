module.exports = {
  "extends": [
    // This plugin's rules are overridden by following configs (except for
    //   its own rules), so including first; we also don't want its disabling
    //   of some, e.g., recommended rules
    // Actually, we're disabling instead for now (and manually enabling in
    //   `index.js` and adding to `plugins`), as has disabling and adds rules
    //   we don't want; filed the following to get an "all" config instead
    //   showing only rules specific to the plugin:
    //     https://github.com/mysticatea/eslint-plugin/issues/21
    // "plugin:@mysticatea/es2019",

    "eslint:recommended",
    // These may override "standard" which includes their rules,
    //   so including first
    "plugin:promise/recommended",
    "plugin:import/recommended",
    // This may override eslint:recommended and the promise/import rules,
    //  but it doesn't turn any off
    "standard",
    // These only add their own rules and are not used by the others
    "plugin:unicorn/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:compat/recommended",
    "plugin:array-func/all",
    "plugin:sonarjs/recommended",
    "plugin:jsdoc/recommended"
  ],
  "plugins": [
    // These have no rules
    "markdown",
    "html",
    // See above on why adding here instead of extending a config
    "@mysticatea",
    // Filed the following to avoid need for adding `plugins` for this as well
    //  as adding the rule manually as we do below (will need to reference in
    //  `package.json` if do so can show in `implicitly-included`):
    // https://github.com/dustinspecker/eslint-plugin-no-use-extend-native/issues/125
    "no-use-extend-native",
    // Filed the following to avoid need for adding `plugins` for this as
    //  well as `extends`: https://github.com/SonarSource/eslint-plugin-sonarjs/issues/117
    "sonarjs"
  ],
  "settings": {
    "jsdoc": {
      "tagNamePreference": {
        "augments": "extends"
      }
    }
  },
  "rules": {
    // RULES SHOULD ONLY BE DIFFERENT FROM INHERITED (ENABLING, DISABLING, CHANGING)

    "array-bracket-newline": ["error", "consistent"],
    "array-bracket-spacing": ["error"],
    "array-callback-return": ["error"],
    "arrow-parens": ["error"],
    "block-scoped-var": ["error"],
    "callback-return": ["error"],
    "computed-property-spacing": ["error"],
    "consistent-return": ["error"],
    "dot-notation": ["error"],
    "func-name-matching": ["error"],
    "function-paren-newline": ["error", "consistent"],
    "global-require": ["error"],
    "guard-for-in": ["error"],
    "implicit-arrow-linebreak": ["error"],
    "jsx-quotes": ["error"],
    "linebreak-style": ["error"],
    "max-nested-callbacks": ["error"],
    "multiline-ternary": ["error", "always-multiline"],
    "no-await-in-loop": ["error"],
    "no-bitwise": ["error"],
    "no-buffer-constructor": ["error"],
    "no-confusing-arrow": ["error"],
    "no-div-regex": ["error"],
    "no-duplicate-imports": ["error"],
    "no-else-return": ["error"],
    "no-empty": ["error", {"allowEmptyCatch": true}],
    "no-eq-null": ["error"],
    "no-extra-label": ["error"],
    "no-implicit-coercion": ["error"],
    "no-implicit-globals": ["error"],
    "no-lonely-if": ["error"],
    "no-loop-func": ["error"],
    "no-mixed-requires": ["error", {"grouping": true, "allowCall": true}],
    "no-process-env": ["error"],
    "no-restricted-globals": ["error", {
      "name": "event",
      "message": "Use local event parameter instead (preferably as \"e\" or \"ev\")."
    }, {
      "name": "fdescribe",
      "message": "Do not commit fdescribe. Use describe instead."
    }],
    "no-restricted-properties": ["error", {
      "property": "__defineGetter__",
      "message": "Please use `Object.defineProperty` instead."
    }],
    "no-script-url": ["error"],
    "no-sync": ["error"],
    "no-var": ["error"],
    "no-void": ["error"],
    "nonblock-statement-body-position": ["error"],
    "object-shorthand": ["error", "always", {"avoidExplicitReturnArrows": true}],
    "operator-assignment": ["error"],
    "prefer-const": ["error"],
    "prefer-destructuring": ["error", {"object": true}],
    "prefer-object-spread": ["error"],
    "prefer-rest-params": ["error"],
    "prefer-spread": ["error"],
    "quote-props": ["error", "as-needed"],
    "radix": ["error", "as-needed"],
    "require-await": ["error"],
    "semi-style": ["error"],
    "strict": ["error"],
    "switch-colon-spacing": ["error"],
    "wrap-regex": ["error"],

    "semi": ["error", "always"],
    "indent": ["error", 2, {"outerIIFEBody": 0}],
    "object-curly-spacing": ["error", "never"],
    "no-restricted-syntax": ["error", "[operator=instanceof]"],

    // Disable standard
    "object-property-newline": ["off"],
    "one-var": ["off"],
    "lines-between-class-members": "off",

    // PROMISE
    "promise/no-new-statics": "error",
    "promise/prefer-await-to-then": "error",

    // PROMISE DISABLE
    "promise/param-names": "off",
    "promise/no-native": "off",
    "promise/no-nesting": "off",
    "promise/no-promise-in-callback": "off",
    "promise/no-callback-in-promise": "off",
    "promise/avoid-new": "off",
    "promise/no-return-in-finally": "off",
    "promise/valid-params": "off",

    // IMPORT
    "import/no-absolute-path": "error",
    "import/no-dynamic-require": "error",
    "import/no-self-import": "error",
    "import/no-useless-path-segments": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",
    "import/no-deprecated": "error",
    "import/no-extraneous-dependencies": "error",
    "import/no-mutable-exports": "error",
    "import/no-amd": "error",

    "import/extensions": ["error", "always", {"ignorePackages": true}],
    "import/order": ["error", {"groups": [
      "builtin",
      "external",
      "internal",
      ["parent", "sibling", "index"]
    ]}],
    "import/newline-after-import": "error",
    "import/no-anonymous-default-export": "error",

    // JSDOC DISABLE
    "jsdoc/check-alignment": ["off"],
    "jsdoc/newline-after-description": ["off"],
    "jsdoc/no-undefined-types": ["off"],
    "jsdoc/require-description": ["off"],
    "jsdoc/require-param-description": ["off"],
    "jsdoc/require-returns-description": ["off"],
    "jsdoc/require-example": ["off"],
    "jsdoc/require-jsdoc": ["off"],
    "jsdoc/require-returns": ["off"],

    // JSDOC
    "jsdoc/check-examples": ["error", {
      "matchingFileName": "dummy.md",
      "rejectExampleCodeRegex": "^`"
    }],
    "jsdoc/check-param-names": ["error"],
    "jsdoc/check-syntax": ["error"],
    "jsdoc/check-tag-names": ["error"],
    "jsdoc/check-types": ["error"],
    "jsdoc/match-description": ["error"],
    "jsdoc/valid-types": ["error"],

    // Unicorn disable
    "unicorn/catch-error-name": "off",
    "unicorn/explicit-length-check": "off",
    "unicorn/filename-case": "off",
    "unicorn/no-unreadable-array-destructuring": "off",
    "unicorn/throw-new-error": "off",
    "unicorn/import-index": "off",
    "unicorn/prevent-abbreviations": "off",

    // UNICORN
    "unicorn/custom-error-definition": "error",
    "unicorn/no-unsafe-regex": "error",

    // `@mysticatea`
    "@mysticatea/block-scoped-var": "error",

    // These should be inherited by `es2019` config, but we don't want to
    //   extend as it has other items we don't want (see comment at top)
    "@mysticatea/no-literal-call": "error",
    "@mysticatea/no-this-in-static": "error",
    "@mysticatea/no-useless-rest-spread": "error",

    // `@mysticatea` disabled
    "@mysticatea/no-use-ignored-vars": "off",
    "@mysticatea/prettier": "off",
    "@mysticatea/prefer-for-of": "off",

    // Disable mysticatea items we don't want
    "func-style": "off",
    "init-declarations": "off",
    "multiline-comment-style": "off",
    "no-invalid-this": "off",
    "no-param-reassign": "off",
    "no-useless-concat": "off",
    "padding-line-between-statements": "off",
    "max-params": "off",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "prefer-template": "off",
    "@mysticatea/no-instanceof-array": "off",
    "@mysticatea/no-instanceof-wrapper": "off",

    // We're directly using `eslint-comments` and without this, these will
    //  mistakenly show up in our @mysticatea/eslint-plugin inherited list
    "@mysticatea/eslint-comments/disable-enable-pair": "off",
    "@mysticatea/eslint-comments/no-aggregating-enable": "off",
    "@mysticatea/eslint-comments/no-duplicate-disable": "off",
    "@mysticatea/eslint-comments/no-unlimited-disable": "off",
    "@mysticatea/eslint-comments/no-unused-disable": "off",
    "@mysticatea/eslint-comments/no-unused-enable": "off",
    "@mysticatea/eslint-comments/no-use": "off",

    // eslint-comments
    "eslint-comments/no-unused-disable": "error",
    "eslint-comments/disable-enable-pair": ["error", {"allowWholeFile": true}],

    // array-func
    "array-func/prefer-array-from": "off",

    // SONARJS
    "sonarjs/max-switch-cases": "off",
    "sonarjs/no-collapsible-if": "off",
    "sonarjs/no-duplicate-string": "off",
    "sonarjs/no-identical-functions": "off",
    "sonarjs/no-small-switch": "off",
    "sonarjs/prefer-immediate-return": "off",
    "sonarjs/cognitive-complexity": "off",

    // no-use-extend-native
    // Should not be needed here; see comment in `plugins`
    //   re: "no-use-extend-native" above
    "no-use-extend-native/no-use-extend-native": "error"
  }
};
