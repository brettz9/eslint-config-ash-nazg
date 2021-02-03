'use strict';

const {join} = require('path');
const semver = require('semver');

let nodeVersion = '5';
try {
  // eslint-disable-next-line import/no-dynamic-require -- Ensure available synchronously
  const {engines: {node}} = require(join(process.cwd(), 'package.json'));
  nodeVersion = semver.minVersion(node);
} catch (err) {}

const ecmaVersion = semver.satisfies(nodeVersion, '>=14.0.0')
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

/*
const globals = semver.satisfies(nodeVersion, '>=9')
  // Part of ES2017 but was not available by Node 8
  ? {SharedArrayBuffer: true, Atomics: true}
  : {};
*/

// Though redundant with `ecmaVersion` for `parserOptions`, also sets globals
const env = ecmaVersion >= 2021
  ? {
    es2021: true
  }
  : (ecmaVersion >= 2020
    ? {
      es2020: true
    }
    // We set `ecmaVersion` for parser, but not `env` with globals if Node 8 as
    //  it lacks those globals
    : (ecmaVersion >= 2017 && semver.satisfies(nodeVersion, '>=9.0.0')
      ? {
        es2017: true
      }
      : (ecmaVersion > 2015
        ? {
          es6: true
        }
        : {})));

// Script used with Node
env.node = true;

module.exports = {env, ecmaVersion};
