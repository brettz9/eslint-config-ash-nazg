/**
 * @type {(
 *   types: import('./index.js').Types,
 *   pkg: {
 *     type?: "module"|"commonjs"
 *   }
 * ) => import('eslint').Linter.Config[]
 * }
 */
export default function overrides(types: import("./index.js").Types, pkg: {
    type?: "module" | "commonjs";
}): import("eslint").Linter.Config<import("@eslint/core").RulesConfig>[];
//# sourceMappingURL=overrides.d.ts.map