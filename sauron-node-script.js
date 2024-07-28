/* eslint-disable jsdoc/imports-as-dependencies -- Bug */
import sauronNode from './sauron-node.js';
import scriptNode from './script-node.js';

/**
* @type {(
  *   pkg: {
  *     type?: "module"|"commonjs"
  *   }
  * ) => import('eslint').Linter.Config[]
  * }
  */
export default function sauronNodeScript (pkg) {
  return [
    ...sauronNode(pkg),
    ...scriptNode
  ];
}
