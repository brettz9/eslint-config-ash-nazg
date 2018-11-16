module.exports = {
  extends: ["ash-nazg"],
  plugins: ["node"],
  rules: {
    "node/no-extraneous-import": ["error"],
    "node/no-extraneous-require": ["error"],
    "node/no-missing-import": ["error"],
    "node/no-missing-require": ["error"],
    "node/no-unpublished-bin": ["error"],
    "node/no-unpublished-require": ["error"],
    "node/no-unsupported-features/es-builtins": ["error"],
    "node/no-unsupported-features/node-builtins": ["error"],
    "node/shebang": ["error"],

    "node/exports-style": ["error", "module.exports"],
    "node/prefer-global/buffer": ["error", "always"],
    "node/prefer-global/console": ["error", "always"],
    "node/prefer-global/process": ["error", "always"],
    "node/prefer-global/text-decoder": ["error", "always"],
    "node/prefer-global/text-encoder": ["error", "always"],
    "node/prefer-global/url-search-params": ["error", "always"],
    "node/prefer-global/url": ["error", "always"]
  }
};
