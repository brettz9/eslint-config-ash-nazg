/**
 * @type {(pkg: {
 *   type?: "module"|"commonjs",
 *   engines?: {node?: string},
 *   browserslist?: string[]|string
 * }, types: string[]) => import('eslint').Linter.Config[]}
 */
export default function sauron(pkg: {
    type?: "module" | "commonjs";
    engines?: {
        node?: string;
    };
    browserslist?: string[] | string;
}, types: string[]): import("eslint").Linter.Config<import("@eslint/core").RulesConfig>[];
//# sourceMappingURL=sauron.d.ts.map