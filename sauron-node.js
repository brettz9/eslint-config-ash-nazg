module.exports = {
  extends: ["@passport-next/eslint-config-passport-next/node", "@passport-next/eslint-config-passport-next/sauron"],
  rules: {
    "node/prefer-promises/dns": ["error"],
    "node/prefer-promises/fs": ["error"]
  }
};
