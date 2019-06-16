module.exports = {
  extends: ["./node", "./sauron"],
  rules: {
    "node/prefer-promises/dns": ["error"],
    "node/prefer-promises/fs": ["error"]
  }
};
