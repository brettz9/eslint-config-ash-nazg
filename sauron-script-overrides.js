/* eslint-disable jsdoc/imports-as-dependencies -- Bug */
import sauronScript from './sauron-script.js';
import overrides from './overrides.js';
import mocha from './mocha.js';

/**
* @type {(
*   types: import('./index.js').Types,
*   pkg: {
*     type?: "module"|"commonjs"
*   }
* ) => import('eslint').Linter.Config[]
* }
*/
export default function sauronScriptOverrides (types, pkg) {
  return [...sauronScript(pkg), ...overrides(types, pkg), ...mocha];
}
