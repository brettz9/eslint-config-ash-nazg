/**
* @type {(
*   types: import('./index.js').Types,
*   pkg: {
*     type?: "module"|"commonjs"
*   }
* ) => import('eslint').Linter.Config[]
* }
*/
export default function sauronScriptOverrides(types: import("./index.js").Types, pkg: {
    type?: "module" | "commonjs";
}): import("eslint").Linter.Config<import("@eslint/core").RulesConfig>[];
//# sourceMappingURL=sauron-script-overrides.d.ts.map