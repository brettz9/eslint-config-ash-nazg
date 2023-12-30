export namespace languageOptions {
    export { globals };
    export { ecmaVersion };
}
/**
 * @param {string} packagePath
 */
export function detectNodeVersion(packagePath: string): string | semver.SemVer;
/**
 * @param {string|import('semver').SemVer} nodeVersion
*/
export function getEcmaVersionForNodeVersion(nodeVersion: string | import("semver").SemVer): 5 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021;
/**
 * @param {{
 *   ecmaVersion: number,
 *   nodeVersion: string|import('semver').SemVer,
 *   node?: boolean
 * }} cfg
 */
export function getGlobalsForEcmaVersion({ ecmaVersion, nodeVersion, node }: {
    ecmaVersion: number;
    nodeVersion: string | import("semver").SemVer;
    node?: boolean;
}): {};
/**
 * @param {string} cwd
 */
export function getGlobalsAndEcmaVersionForCwd(cwd: string): {
    globals: {};
    ecmaVersion: number;
};
declare const globals: {};
declare const ecmaVersion: 5 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021;
import semver from 'semver';
export {};
//# sourceMappingURL=detectEnv.d.ts.map