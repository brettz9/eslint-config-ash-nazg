module.exports = {
  rules: {
    "no-process-exit": "error",
    "node/no-deprecated-api": "error",
    "node/no-extraneous-import": "error",
    "node/no-extraneous-require": "error",
    "node/no-exports-assign": "error",
    "node/no-missing-import": "error",
    "node/no-missing-require": "error",
    "node/no-unpublished-bin": "error",
    "node/no-unpublished-import": "error",
    "node/no-unpublished-require": "error",
    "node/no-unsupported-features/es-builtins": "error",
    "node/no-unsupported-features/es-syntax": [
      "error",
      {
        "ignores": [
          "modules"
        ]
      }
    ],
    "node/no-unsupported-features/node-builtins": "error",
    "node/process-exit-as-throw": "error",
    "node/shebang": "error"
  }
};
