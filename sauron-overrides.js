import sauron from './sauron.js';
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
export default function sauronOverrides (types, pkg) {
  return [...sauron(pkg), ...overrides(types, pkg), ...mocha];
}
