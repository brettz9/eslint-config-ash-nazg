module.exports = {
  extends: ["./", "plugin:node/recommended-module"],
  plugins: ["node"],
  rules: {
    "node/file-extension-in-import": ["error"],
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
