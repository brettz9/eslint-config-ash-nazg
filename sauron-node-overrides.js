import sauronNode from './sauron-node.js';
import overrides from './overrides.js';

/**
 * @param {import('./index.js').Types} types
 * @param {{
 *   type?: "module"|"commonjs"
 * }} pkg
 */
export default function sauronNodeOverrides (types, pkg) {
  return [
    ...sauronNode(pkg),
    ...overrides(types, pkg)
  ];
}
