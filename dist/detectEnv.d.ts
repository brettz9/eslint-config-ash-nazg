export function pkgSatisfiesNodeVersion(pkg: {
    engines?: {
        node?: string;
    };
}, range: string): boolean | (() => never);
export function pkgSatisfiesBrowserVersion(pkg: {
    browserslist?: string[] | string;
}, range: string): boolean;
export namespace languageOptions {
    export { globals };
    export { ecmaVersion };
}
export type EcmaVersion = 2025 | 2024 | 2023 | 2022 | 2021 | 2020 | 2019 | 2018 | 2017 | 2016 | 2015 | 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;
/**
 * @param {string} packagePath
 */
export function detectNodeVersion(packagePath: string): string | semver.SemVer;
/**
 * @param {string|import('semver').SemVer} nodeVersion
 * @returns {EcmaVersion}
*/
export function getEcmaVersionForNodeVersion(nodeVersion: string | import("semver").SemVer): EcmaVersion;
/**
 * @param {{
 *   ecmaVersion: EcmaVersion,
 *   nodeVersion: string|import('semver').SemVer,
 *   node?: boolean
 * }} cfg
 */
export function getGlobalsForEcmaVersion({ ecmaVersion, nodeVersion, node }: {
    ecmaVersion: EcmaVersion;
    nodeVersion: string | import("semver").SemVer;
    node?: boolean;
}): {};
/**
 * @param {string} cwd
 */
export function getGlobalsAndEcmaVersionForCwd(cwd: string): {
    globals: {};
    ecmaVersion: EcmaVersion;
};
declare const globals: {};
declare const ecmaVersion: EcmaVersion;
import semver from 'semver';
export {};
//# sourceMappingURL=detectEnv.d.ts.map