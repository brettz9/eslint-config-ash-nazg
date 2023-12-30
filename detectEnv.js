// Todo: Move to own repo

/**
 * You can use this in your `eslint.config.js` as follows...
 *
 * @example
 *
 * import {languageOptions} from 'eslint-config-ash-nazg/detectEnv.js';
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

/**
 * @typedef {2024|2023|2022|2021|2020|2019|2018|2017|2016|2015|
 *   3|5|6|7|8|9|10|11|12|13|14|15} EcmaVersion
 */

/* eslint-disable n/no-sync -- Not sure possible to use here */
import {readFileSync} from 'node:fs';
import {join} from 'node:path';
import semver from 'semver';
import globalsPkg from 'globals';

/**
 * @param {{
 *   ecmaVersion: EcmaVersion,
 *   nodeVersion: string|import('semver').SemVer,
 *   node?: boolean
 * }} cfg
 */
const getGlobalsForEcmaVersion = ({ecmaVersion, nodeVersion, node = true}) => {
  // Though redundant with `ecmaVersion` for `languageOptions`,
  //   also sets globals
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

  // We don't know if this is script or module, so don't inject Node globals,
  //   as they differ (i.e., __dirname and __filename)
  // return node ? {...globals, ...globalsPkg.node} :
  return globals;
};

/**
 * @param {string|import('semver').SemVer} nodeVersion
 * @returns {EcmaVersion}
*/
const getEcmaVersionForNodeVersion = (nodeVersion) => {
  return semver.satisfies(nodeVersion, '>=20.0.0')
    ? 2023
    : semver.satisfies(nodeVersion, '>=16.0.0')
      ? 2022
      : semver.satisfies(nodeVersion, '>=15.0.0')
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

/**
 * @param {string} packagePath
 */
const detectNodeVersion = (packagePath) => {
  /** @type {string|import('semver').SemVer} */
  let nodeVersion = '5';
  try {
    // @ts-expect-error `JSON.parse` can read buffer
    const {engines: {node}} = JSON.parse(readFileSync(packagePath));
    const version = semver.minVersion(node);
    if (!version) {
      throw new Error('skip');
    }
    nodeVersion = version;
  } catch {}
  return nodeVersion;
};

/**
 * @param {string} cwd
 */
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
