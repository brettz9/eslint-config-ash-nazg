import greatEye from './great-eye.js';
import sauronNode from './sauron-node.js';

/**
 * @type {(pkg: {
*   type?: "module"|"commonjs"
* }, types: string[]) => import('eslint').Linter.Config[]}
 */
export default function greatEyeNode (pkg, types) {
  return [...greatEye(pkg, types), ...sauronNode(pkg)];
}
