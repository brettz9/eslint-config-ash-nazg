/**
 * @param {import('./index.js').Types} types
 * @param {{
 *   type?: "module"|"commonjs"
 * }} pkg
 */
export default function sauronNodeOverrides(types: import("./index.js").Types, pkg: {
    type?: "module" | "commonjs";
}): import("eslint").Linter.FlatConfig[];
//# sourceMappingURL=sauron-node-overrides.d.ts.map