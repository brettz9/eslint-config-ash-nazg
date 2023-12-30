// Todo: Move to own repo

/**
 * You can use this in your `eslint.config.js` as follows...
 *
 * @example
 *
 * import {languageOptions} from './detectEnv.js';
 *
 * ...
 *
 * export default [
 *   someConfig,
 *   // Good for use with `eslint-plugin-n`
 *   nodePlugin['recommended-module'],
 *   // Can use `ecmaVersion` for selecting a suitable config within a
 *   //   project which has different config for different version;
 *   //   e.g., set here to ES5 config if not ES6+
 *   ...(languageOptions.ecmaVersion < 2015
 *     ? brettz9Plugin.es5
 *     : brettz9Plugin.es6
 *   ),
 *   {
 *     languageOptions
 *   }
 * }];
 */

import {readFileSync} from 'node:fs';
import {join} from 'node:path';
import semver from 'semver';
import globalsPkg from 'globals';

const getGlobalsForEcmaVersion = ({ecmaVersion, nodeVersion, node = true}) => {
  // Though redundant with `ecmaVersion` for `languageOptions`, also sets globals
  const globals = ecmaVersion >= 2021
    ? globalsPkg.es2021
    : (ecmaVersion >= 2020
      ? globalsPkg.es2020
      // We set `ecmaVersion` for parser, but not globals if Node 8
      //  as it lacks those globals
      : (ecmaVersion >= 2017 &&
        (!node || semver.satisfies(nodeVersion, '>=9.0.0'))
        ? globalsPkg.es2017
        : (ecmaVersion >= 2015
          ? globalsPkg.es2015
          : {})));

  return node ? {...globals, ...globalsPkg.node} : globals;
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
              : (semver.satisfies(nodeVersion, '>=6.0.0')
                ? 2015
                : 5)))));
};

const detectNodeVersion = (packagePath) => {
  let nodeVersion = '5';
  try {
    const {engines: {node}} = JSON.parse(readFileSync(packagePath));
    nodeVersion = semver.minVersion(node);
  } catch (err) {}
  return nodeVersion;
};

const getGlobalsAndEcmaVersionForCwd = (cwd) => {
  const nodeVersion = detectNodeVersion(join(cwd, 'package.json'));
  const ecmaVersion = getEcmaVersionForNodeVersion(nodeVersion);
  const globals = getGlobalsForEcmaVersion({ecmaVersion, nodeVersion});
  return {globals, ecmaVersion};
};

export {
  detectNodeVersion, getEcmaVersionForNodeVersion, getGlobalsForEcmaVersion,
  getGlobalsAndEcmaVersionForCwd
};

export const languageOptions = getGlobalsAndEcmaVersionForCwd(
  process.cwd()
);
