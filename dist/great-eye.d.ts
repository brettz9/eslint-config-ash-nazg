/**
 * @type {(pkg: {
*   type?: "module"|"commonjs"
* }, types: string[]) => import('eslint').Linter.Config[]}
 */
export default function greatEye(pkg: {
    type?: "module" | "commonjs";
}, types: string[]): import("eslint").Linter.Config<import("@eslint/core").RulesConfig>[];
//# sourceMappingURL=great-eye.d.ts.map