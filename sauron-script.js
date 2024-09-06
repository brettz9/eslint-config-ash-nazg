import sauron from './sauron.js';
import script from './script.js';

/**
 * @type {(pkg: {
*   type?: "module"|"commonjs"
* }) => import('eslint').Linter.Config[]}
 */
export default function sauronScript (pkg) {
  return [...sauron(pkg, []), ...script];
}
