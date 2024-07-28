/* eslint-disable jsdoc/imports-as-dependencies -- Bug */
import greatEye from './great-eye.js';
import sauronNode from './sauron-node.js';

/**
 * @type {(pkg: {
*   type?: "module"|"commonjs"
* }) => import('eslint').Linter.Config[]}
 */
export default function greatEyeNode (pkg) {
  return [...greatEye(pkg), ...sauronNode(pkg)];
}
