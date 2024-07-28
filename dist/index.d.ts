/**
 * @param {import('eslint').Linter.FlatConfig|
*   import('eslint').Linter.FlatConfig[]} cfgs
* @param {string[]} files
* @returns {import('eslint').Linter.FlatConfig|
*    import('eslint').Linter.FlatConfig[]
* }
*/
export function addFiles(cfgs: import("eslint").Linter.FlatConfig | import("eslint").Linter.FlatConfig[], files: string[]): import("eslint").Linter.FlatConfig | import("eslint").Linter.FlatConfig[];
/**
 * @typedef {("great-eye"|"sauron"|"saruman"|
 *   "polyglot"|"bare"|"node"|"browser"|
 *   "script"|"module"|
 *   "no-overrides"|
 *   "no-cypress"|"mocha"|
 *   "babel"|"third-party")[]} Types
 */
/**
 * @param {Types} types
 * @param {import('eslint').Linter.FlatConfig} [config]
 */
export default function index(types: Types, config?: import("eslint").Linter.FlatConfig | undefined): import("eslint").Linter.FlatConfig[];
export type Types = ("great-eye" | "sauron" | "saruman" | "polyglot" | "bare" | "node" | "browser" | "script" | "module" | "no-overrides" | "no-cypress" | "mocha" | "babel" | "third-party")[];
//# sourceMappingURL=index.d.ts.map