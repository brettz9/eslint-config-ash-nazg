module.exports = {
  extends: ["ash-nazg/node", "ash-nazg/sauron"],
  rules: {
    "node/prefer-promises/dns": ["error"],
    "node/prefer-promises/fs": ["error"]
  }
};
