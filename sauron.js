module.exports = {
  extends: ["ash-nazg"],
  rules: {
    "capitalized-comments": ["warn"],
    "class-methods-use-this": ["warn"],
    "complexity": ["warn"],
    "consistent-this": ["warn"],
    "default-case": ["warn"],
    "max-len": ["warn", {
      "ignoreUrls": true,
      "ignoreRegExpLiterals": true
    }],
    "no-alert": ["warn"],
    "no-console": ["warn"],
    "no-empty-function": ["warn"],
    "no-magic-numbers": ["warn"],
    "no-shadow": ["warn", {"builtinGlobals": true, "hoist": "functions", "allow": ["parent", "top", "open", "close", "stop", "blur", "status", "name", "closed", "start"]}],
    "no-warning-comments": ["warn"],
    "prefer-numeric-literals": ["warn"],
    "require-jsdoc": ["warn"],
    "require-unicode-regexp": ["warn"],
    "vars-on-top": ["warn"],

    "promise/no-nesting": "warn",
    "promise/no-promise-in-callback": "warn",
    "promise/no-callback-in-promise": "warn",
    "promise/avoid-new": "warn",
    "promise/no-return-in-finally": "warn",
    "promise/valid-params": "warn",
    "promise/prefer-await-to-callbacks": "warn",
    "import/unambiguous": "warn",
    "import/no-commonjs": "warn",

    "unicorn/no-fn-reference-in-iterator": "warn",
  }
};
