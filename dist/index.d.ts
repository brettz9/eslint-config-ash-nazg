/**
 * @typedef {("great-eye"|"sauron"|"saruman"|
 *   "polyglot"|"bare"|"node"|"browser"|
 *   "no-overrides"|
 *   "script"|"module"|
 *   "cypress"|"mocha"|
 *   "babel"|"third-party")[]} Types
 */
/**
 * @param {Types} types
 * @param {import('eslint').Linter.FlatConfig} [config]
 */
export default function index(types: Types, config?: import("eslint").Linter.FlatConfig<import("eslint").Linter.RulesRecord> | undefined): import("eslint").Linter.FlatConfig<import("eslint").Linter.RulesRecord>[];
export type Types = ("great-eye" | "sauron" | "saruman" | "polyglot" | "bare" | "node" | "browser" | "no-overrides" | "script" | "module" | "cypress" | "mocha" | "babel" | "third-party")[];
//# sourceMappingURL=index.d.ts.map