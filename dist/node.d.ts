/**
 * @type {(pkg: {
 *   type?: "module"|"commonjs"
 * }) => import('eslint').Linter.Config[]}
 */
export default function node(pkg: {
    type?: "module" | "commonjs";
}): import("eslint").Linter.Config<import("@eslint/core").RulesConfig>[];
//# sourceMappingURL=node.d.ts.map