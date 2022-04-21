"use strict";
module.exports = {
  rules: {
    "n/no-deprecated-api": "error",
    "n/no-extraneous-import": "error",
    "n/no-extraneous-require": "error",
    "n/no-exports-assign": "error",
    "n/no-missing-require": "error",
    "n/no-unpublished-bin": "error",
    "n/no-unpublished-import": "error",
    "n/no-unpublished-require": "error",
    "n/no-unsupported-features/es-builtins": "error",
    "n/no-unsupported-features/es-syntax": [
      "error",
      {
        "ignores": [
          "modules"
        ]
      }
    ],
    "n/no-unsupported-features/node-builtins": "error",
    "n/process-exit-as-throw": "error",
    "n/shebang": "error"
  }
};
