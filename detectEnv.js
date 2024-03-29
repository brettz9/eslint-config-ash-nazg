'use strict';

// Todo: Move to own repo

/**
 * You can use this in your `.eslintrc.js` as follows...
 *
 * @example
 *
 * 'use strict';
 *
 * const {env, ecmaVersion} = require('./detectEnv.js');
 *
 * module.exports = {
 *   extends: [
 *     './someConfig.js',
 *
 *     // Good for use with `eslint-plugin-n`
 *     'plugin:n/recommended-module',
 *
 *     // Can use `ecmaVersion` for selecting a suitable config within a project which has different config
 *     //   for different version; e.g., set here to ES5 config if not ES6+
 *     ...(ecmaVersion < 2015
 *       ? ['plugin:@brettz9/es5']
 *       : ['plugin:@brettz9/es6']
 *     )
 *   ],
 *   env,
 *   parserOptions: {
 *     ecmaVersion
 *   }
 * };
 */

const {join} = require('path');
const semver = require('semver');

const getEnvForEcmaVersion = ({ecmaVersion, nodeVersion, node = true}) => {
  // Though redundant with `ecmaVersion` for `parserOptions`, also sets globals
  const env = ecmaVersion >= 2021
    ? {
      es2021: true
    }
    : (ecmaVersion >= 2020
      ? {
        es2020: true
      }
      // We set `ecmaVersion` for parser, but not `env` with globals if Node 8
      //  as it lacks those globals
      : (ecmaVersion >= 2017 &&
        (!node || semver.satisfies(nodeVersion, '>=9.0.0'))
        ? {
          es2017: true
        }
        : (ecmaVersion > 2015
          ? {
            es6: true
          }
          : {})));

  return node ? {...env, node: true} : env;
};

const getEcmaVersionForNodeVersion = (nodeVersion) => {
  return semver.satisfies(nodeVersion, '>=15.0.0')
    ? 2021
    : semver.satisfies(nodeVersion, '>=14.0.0')
      ? 2020
      : (semver.satisfies(nodeVersion, '>=12.0.0')
        ? 2019
        : (semver.satisfies(nodeVersion, '>=10.0.0')
          ? 2018
          : (semver.satisfies(nodeVersion, '>=8.0.0')
            ? 2017
            : (semver.satisfies(nodeVersion, '>=7.0.0')
              ? 2016
              : (semver.satisfies(nodeVersion, '>=7.0.0')
                ? 2015
                : 5)))));
};

const detectNodeVersion = (packagePath) => {
  let nodeVersion = '5';
  try {
    // eslint-disable-next-line n/global-require, import/no-dynamic-require -- Ensure available synchronously
    const {engines: {node}} = require(packagePath);
    nodeVersion = semver.minVersion(node);
  } catch (err) {}
  return nodeVersion;
};

const getEnvAndEcmaVersionForCwd = (cwd) => {
  const nodeVersion = detectNodeVersion(join(cwd, 'package.json'));
  const ecmaVersion = getEcmaVersionForNodeVersion(nodeVersion);
  const env = getEnvForEcmaVersion({ecmaVersion, nodeVersion});
  return {env, ecmaVersion};
};

module.exports = {
  detectNodeVersion, getEcmaVersionForNodeVersion, getEnvForEcmaVersion,
  getEnvAndEcmaVersionForCwd,
  ...getEnvAndEcmaVersionForCwd(
    process.cwd()
  )
};
