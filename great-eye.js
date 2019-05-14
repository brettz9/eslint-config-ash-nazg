module.exports = {
  extends: ["ash-nazg/sauron"],
  rules: {
    "capitalized-comments": ["warn"],
    "complexity": ["warn"],
    "max-statements-per-line": ["warn"],
    "no-magic-numbers": ["warn"],
    "no-plusplus": ["warn"],
    "no-warning-comments": ["warn"],
    "jsdoc/check-alignment": ["warn"],
    "jsdoc/check-indentation": ["warn"],
    "jsdoc/require-description": ["warn"],
    "jsdoc/require-param-description": ["warn"],
    "jsdoc/require-returns-description": ["warn"],
    "jsdoc/require-example": ["warn"],
    "jsdoc/require-jsdoc": ["error"],
    "unicorn/prevent-abbreviations": "error"
  }
};
