/**
 * @type {(pkg: {
 *   type?: "module"|"commonjs"
 * }) => import('eslint').Linter.Config[]}
 */
export default function sauronNode(pkg: {
    type?: "module" | "commonjs";
}): import("eslint").Linter.Config<import("@eslint/core").RulesConfig>[];
//# sourceMappingURL=sauron-node.d.ts.map