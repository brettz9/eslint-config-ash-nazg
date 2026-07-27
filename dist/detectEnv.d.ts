export type EcmaVersion = 2025 | 2024 | 2023 | 2022 | 2021 | 2020 | 2019 | 2018 | 2017 | 2016 | 2015 | *   3 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;
import semver from 'semver';
/**
 * @param {{
 *   ecmaVersion: EcmaVersion,
 *   nodeVersion: string|import('semver').SemVer,
 *   node?: boolean
 * }} cfg
 */
declare const getGlobalsForEcmaVersion: ({ ecmaVersion, nodeVersion, node }: {
    ecmaVersion: EcmaVersion;
    nodeVersion: string | import('semver').SemVer;
    node?: boolean;
}) => {};
/**
 * @param {string|import('semver').SemVer} nodeVersion
 * @returns {EcmaVersion}
*/
declare const getEcmaVersionForNodeVersion: (nodeVersion: string | import('semver').SemVer) => EcmaVersion;
/**
 * @param {string} packagePath
 */
declare const detectNodeVersion: (packagePath: string) => string | semver.SemVer;
/**
 * @param {{
 *   engines?: {node?: string}
 * }} pkg
 * @param {string} range
 */
export declare const pkgSatisfiesNodeVersion: (pkg: {
    engines?: {
        node?: string;
    };
}, range: string) => boolean | (() => never);
/**
 * @param {{
 *   browserslist?: string[]|string
 * }} pkg
 * @param {string} range
 */
export declare const pkgSatisfiesBrowserVersion: (pkg: {
    browserslist?: string[] | string;
}, range: string) => boolean;
/**
 * @param {string} cwd
 */
declare const getGlobalsAndEcmaVersionForCwd: (cwd: string) => {
    globals: {};
    ecmaVersion: EcmaVersion;
};
export { detectNodeVersion, getEcmaVersionForNodeVersion, getGlobalsForEcmaVersion, getGlobalsAndEcmaVersionForCwd };
export declare const languageOptions: {
    globals: {};
    ecmaVersion: EcmaVersion;
};
//# sourceMappingURL=detectEnv.d.ts.map