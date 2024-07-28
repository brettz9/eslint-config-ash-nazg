/**
 * @param {import('eslint').Linter.Config|
*   import('eslint').Linter.Config[]} cfgs
* @param {string[]} files
* @returns {import('eslint').Linter.Config|
*    import('eslint').Linter.Config[]
* }
*/
export function addFiles(cfgs: import("eslint").Linter.Config | import("eslint").Linter.Config[], files: string[]): import("eslint").Linter.Config | import("eslint").Linter.Config[];
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
 * @param {import('eslint').Linter.Config} [config]
 */
export default function index(types: Types, config?: import("eslint").Linter.Config<import("eslint").Linter.RulesRecord> | undefined): import("eslint").Linter.Config<import("eslint").Linter.RulesRecord>[];
export type Types = ("great-eye" | "sauron" | "saruman" | "polyglot" | "bare" | "node" | "browser" | "script" | "module" | "no-overrides" | "no-cypress" | "mocha" | "babel" | "third-party")[];
//# sourceMappingURL=index.d.ts.map