/* eslint-disable jsdoc/imports-as-dependencies -- Bug */
import node from './node.js';
import sauron from './sauron.js';

/**
 * @type {(pkg: {
 *   type?: "module"|"commonjs"
 * }) => import('eslint').Linter.FlatConfig[]}
 */
export default function sauronNode (pkg) {
  return [
    ...node(pkg),
    ...sauron(pkg),
    {
      rules: {
        'n/prefer-promises/dns': ['error'],
        'n/prefer-promises/fs': ['error']
      }
    }
  ];
}
