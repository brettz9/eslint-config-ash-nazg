/**
 * @type {(
 *   types: import('./index.js').Types,
 *   pkg: {
 *     type?: "module"|"commonjs"
 *   }
 * ) => import('eslint').Linter.Config[]
 * }
 */
export default function sauronOverrides(types: import("./index.js").Types, pkg: {
    type?: "module" | "commonjs";
}): import("eslint").Linter.Config<import("@eslint/core").RulesConfig>[];
//# sourceMappingURL=sauron-overrides.d.ts.map