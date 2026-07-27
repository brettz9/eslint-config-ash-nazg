/**
 * @type {(pkg: {
*   type?: "module"|"commonjs"
* }, types: string[]) => import('eslint').Linter.Config[]}
 */
export default function greatEyeNode(pkg: {
    type?: "module" | "commonjs";
}, types: string[]): import("eslint").Linter.Config<import("@eslint/core").RulesConfig>[];
//# sourceMappingURL=great-eye-node.d.ts.map