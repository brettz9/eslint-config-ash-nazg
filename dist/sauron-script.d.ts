/**
 * @type {(pkg: {
 *   type?: "module"|"commonjs"
 * }) => import('eslint').Linter.Config[]}
 */
export default function sauronScript(pkg: {
    type?: "module" | "commonjs";
}): import("eslint").Linter.Config<import("@eslint/core").RulesConfig>[];
//# sourceMappingURL=sauron-script.d.ts.map