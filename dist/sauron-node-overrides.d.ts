export default sauronNodeOverrides;
/**
 * @param {import('./index.js').Types} types
 * @param {{
 *   type?: "module"|"commonjs"
 * }} pkg
 * @returns {import('eslint').Linter.Config[]}
 */
declare function sauronNodeOverrides(types: import("./index.js").Types, pkg: {
    type?: "module" | "commonjs";
}): import("eslint").Linter.Config[];
//# sourceMappingURL=sauron-node-overrides.d.ts.map