/* eslint-disable jsdoc/imports-as-dependencies -- Bug */
import sauronNodeScript from './sauron-node-script.js';
import overrides from './overrides.js';

/**
* @type {(
  *   types: import('./index.js').Types,
  *   pkg: {
  *     type?: "module"|"commonjs"
  *   }
  * ) => import('eslint').Linter.Config[]
  * }
  */
export default function sauronNodeScriptOverrides (types, pkg) {
  return [
    ...sauronNodeScript(pkg),
    ...overrides(types, pkg)
  ];
}
