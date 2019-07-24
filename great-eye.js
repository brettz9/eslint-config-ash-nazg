module.exports = {
  extends: ["./sauron"],
  settings: {
    preferredTypes: {
      number: {
        message: "Use `Integer` or `Float`"
      }
    }
  },
  rules: {
    "capitalized-comments": ["warn"],
    "complexity": ["warn"],
    "max-statements": ["warn"],
    "max-statements-per-line": ["warn"],
    "no-magic-numbers": ["warn"],
    "no-plusplus": ["warn"],
    "no-warning-comments": ["warn"],

    "import/no-unused-modules": ["warn", {missingExports: true, unusedExports: true}],

    "jsdoc/check-alignment": ["warn"],
    "jsdoc/check-indentation": ["warn"],
    "jsdoc/require-description": ["warn"],
    "jsdoc/require-param-description": ["warn"],
    "jsdoc/require-returns-description": ["warn"],
    "jsdoc/require-example": ["warn"],
    "jsdoc/require-jsdoc": ["error"],

    "sonarjs/cognitive-complexity": "warn",

    "unicorn/prevent-abbreviations": "error"
  }
};
