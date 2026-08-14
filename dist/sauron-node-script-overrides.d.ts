/**
 * @type {(
 *   types: import('./index.js').Types,
 *   pkg: {
 *     type?: "module"|"commonjs"
 *   }
 * ) => import('eslint').Linter.Config[]
 * }
 */
export default function sauronNodeScriptOverrides(types: import("./index.js").Types, pkg: {
    type?: "module" | "commonjs";
}): import("eslint").Linter.Config<import("@eslint/core").RulesConfig>[];
//# sourceMappingURL=sauron-node-script-overrides.d.ts.map