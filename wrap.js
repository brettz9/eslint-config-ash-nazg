// @ts-check
'use strict';

const {defineConfig} = require('eslint-define-config');
const {getEnvAndEcmaVersionForCwd} = require('./detectEnv.js');

module.exports = function (...args) {
  let force;
  let mod = args[0];
  if (args.length === 2) {
    [force, mod] = args;
  }
  // Now `process.cwd()` should be safe
  const {env, ecmaVersion} = getEnvAndEcmaVersionForCwd(process.cwd());

  if (!Array.isArray(mod.extends)) {
    mod.extends = [mod.extends];
  }
  const extnds = mod.extends;

  if (extnds.some((ext) => {
    // Could be node.js, sauron-node, +script-node.js, etc.
    return ext.includes('node');
  })) {
    mod.env = {...mod.env, ...env};
    mod.parserOptions = {...mod.parserOptions, ecmaVersion};
    /*
    if (extnds.some((ext) => {
      // node.js or a sauron-node version
      return ext.includes('./node.js') || ext.includes('sauron');
    })) {
      mod.extends = [
        ...mod.extends.filter((ext) => {
          return !ext.includes('plugin:@brettz9/es');
        }),
        ...(ecmaVersion < 2015
          ? ['plugin:@brettz9/es5']
          : ['plugin:@brettz9/es6']
        )
      ];
    }
    */
  }
  if (force) {
    mod = {...mod, ...force};
  }
  return defineConfig(mod);
};
