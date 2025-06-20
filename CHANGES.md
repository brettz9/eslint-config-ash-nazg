# eslint-config-ash-nazg CHANGES

## 38.0.2

- fix: add missing `languageOptions` for polyglot versions

## 38.0.1

- fix: allow rollup config in overrides to get `ecmaVersion`
- chore: update deps. and devDep.

## 38.0.0

- chore: update deps. and devDeps.
- fix: avoid `sonarjs/no-unused-vars`

## 37.1.0

- fix(overrides): ensure Node globals exist for ESLint and Rollup cfg
- fix(overrides): disable `no-restricted-imports` (for bare/polyglot
    configs) for Rollup/ESLint

## 37.0.1

- docs: demo usage

## 37.0.0

BREAKING CHANGES: Require Node 20+

- fix: default to es2025

## 36.22.2

- fix: overrides issue

## 36.22.1

- fix: mocha issue

## 36.22.0

- fix: great eye node
- chore: update deps. and devDeps.

## 36.21.0

- fix: disable redundant sonarjs/no-unused-expressions
- chore: update deps. and devDeps.

## 36.20.1

- fix: cypress issue

## 36.20.0

- chore: update deps.

## 36.19.0

- feat: `caughtErrors: none` for `no-unused-vars`

## 36.18.1

- fix: apply `no-implicit-globals` rule only if in browser

## 36.18.0

- fix: apply `lexicalBindings` option only for `no-implicit-globals` if in browser
- fix: ensure great eye passes on args
- chore: update deps.

## 36.17.1

- fix: properly disable overly aggressive sonarjs rules
- fix: point to types properly

## 36.17.0

- chore: update deps.
- fix: properly disable overly aggressive sonarjs rules

## 36.16.3

- fix: properly disable overly aggressive sonarjs rules

## 36.16.2

- fix: properly disable overly aggressive sonarjs rules

## 36.16.1

- fix: properly disable overly aggressive sonarjs rules

## 36.16.0

- feat: disable overly aggressive sonarjs rules

## 36.15.1

- fix: Node detection for `requireFlag`

## 36.15.0

- feat: disable overly aggressive sonarjs rules

## 36.14.1

- fix: disable problematic `sonarjs/sonar-no-fallthrough` rule

## 36.14.0

- feat: conditional `requireFlag` on `require-unicode-regexp`
- feat: update deps.

## 36.13.0

- feat: switch to renamed markdown plugin
- chore: update deps.

## 36.12.0

- chore: update deps.

## 36.11.1

- fix: disable escompat rules for (Node) overrides files

## 36.11.0

- feat: add `lintAllEsApis` setting for `eslint-plugin-compat`
- feat: disable `@brettz9/no-use-ignored-vars`

## 36.10.0

- feat: disable `unicorn/no-anonymous-default-export` for module overrides
- chore: update `eslint-plugin-escompat`, `eslint-plugin-jsdoc`

## 36.9.0

- feat: loosen some restrictive mocha rules
- chore: uninstall `eslint-plugin-chai-assert-bdd`

## 36.8.6

- fix: `plugins` to include `n` in overrides

## 36.8.5

- fix: make explict that `strict` is global
- fix: avoid chai globals

## 36.8.4

- fix: avoid certain mocha globals that are now imported
- fix: restate `sourceType: "script"` for script-node

## 36.8.3

- fix: change `cypress/integration` to `cypress/e2e`

## 36.8.2

- fix: ensure scripts includes `require`, `__dirname` and `__filename`

## 36.8.1

- fix: ensure `no-restricted-imports` is off for Node configs (for cases
    inheriting bare config)
- fix: for overrides config, ensure `__dirname` and `__filename` are disabled
    for modules
- fix: for scripts, ensure `module` and `exports` are at least defined

## 36.8.0

- feat: add to default Node/default browser folder overrides
- chore: update deps.

## 36.7.0

- fix(TS): avoid deprecated types

## 36.6.0

- feat: update Unicorn (uses new rule: `no-length-as-slice-end`)

## 36.5.0

- feat: add `strict` option for `promise/prefer-await-to-then`
- chore: update deps.
- fix: `name` tweaks

## 36.4.1

- fix: prioritize browser config over cypress (latter has earlier
    `ecmaVersion`)

## 36.4.0

- feat: adds escompat

## 36.3.1

- fix: avoid certain Promise rules in Cypress

## 36.3.0

- fix: remove/change deprecated rules

## 36.2.1

- fix: add one missing `name`

## 36.2.0

- feat: add `name` to further configs
- chore: bump `semver` and `@brettz9/eslint-plugin`

## 36.1.0

- feat: add `name` to configs
- fix: disable `import/unambiguous` in Cypress

## 36.0.4

- fix: disable `import` rule usage in great-eye
- fix: ensure great-eye is not used when sauron indicated

## 36.0.3

- fix: add `server.js` to auto-Node files

## 36.0.2

- fix: apply Cypress rules to all of `cypress` subdirectories
- fix: ensure Node applied to Node RC scripts

## 36.0.1

- fix: ensure when Node not included that modules does not reference Node
    rules

## 36.0.0

BREAKING CHANGE:

Requires Node 18.20.3+

Now to use the main config which is now a function accepting an array of
combinations of the following (and a second optional config for the
`babel` option):

> "great-eye"|"sauron"|"saruman"|"polyglot"|"bare"|"node"|"browser"|
"script"|"module"|"no-overrides"|"no-cypress"|"mocha"|"babel"|
"third-party"

Was not able to complete reinclusion for the following due to lack of
flat config or ESLint 9 support:

1. eslint-plugin-import
2. eslint-plugin-escompat (now added)
3. eslint-plugin-unsanitized
4. @fintechstudios/eslint-plugin-chai-as-promised
5. eslint-plugin-mocha-cleanup

Renamed `rc` config to `overrides`.

Throws if not encountering a `browserslist` in `package.json` when using
the main browser config.

Adds rules to `overrides` for folders, treating folders like `public` or
`browser` as calling for the browser config. Applies more to the
(auto-Node-based) `build` config.

Auto-applies `overrides` and `cypress` by default.

Renamed third-party config to `third-party.js`.

Possibly other changes.

- feat: switch to flat config
- feat: add `bare` and `polyglot` configs
- chore: update globals, semver
- chore: some TS work
- feat: detects `sourceType` automatically for .js files too,
   based on `package.json`
- fix: drop `no-unpublished-import` checks from rc configs
- fix: add `eslint.config.js` to ESM configs

## 35.4.0

- chore: bump devDeps/peerDeps.

## 35.3.0

- chore: bump devDeps/peerDeps.

## 35.2.0

- feat(tighten): update unicorn to 50.0.0
- chore: bump devDeps/peerDeps.

## 35.1.0

- feat(loosen): switch to `markers` for `@stylistic/spaced-comment`
- chore: bump peerDeps/devDeps

## 35.0.0

- chore: switch to use stylistic and internal standard (build
    script is seeing imports as unused despite being used)

## 34.18.0

- chore: bump peerDeps/devDeps

## 34.17.1

- fix: update peers.

## 34.17.0

- feat(`index.js`): add `no-object-constructor`
- chore: bump peerDeps/devDeps

## 34.16.0

- chore: bump semver, peerDeps/devDeps

## 34.15.0

- chore: bump peerDeps/devDeps (including new rule from jsdoc)

## 34.14.0

- chore: bump peerDeps/devDeps

## 34.13.0

- chore: bump semver and peerDeps/devDeps

## 34.12.0

- chore: Update devDeps/peerDeps. (including new rules from Unicorn and jsdoc)

## 34.11.1

- fix: bump peer for `eslint-plugin-jsdoc`

## 34.11.0

- chore: update `semver`, devDeps.
- fix(`index.js`): change `tag-lines` to `startLines: null` to keep old behavior

## 34.10.0

- chore: update `semver`
- refactor: disable new, unused JSDoc rules

## 34.9.1

- fix: add missing cjs extensions to rc.js

## 34.9.0

- chore: update devDeps/peerDeps.

## 34.8.0

- chore: update devDeps/peerDeps.
- chore: use new ESLint config package

## 34.7.1

- fix: update peerDeps.

## 34.7.0

- feat(`index.js`): enable new `import/no-empty-named-blocks`
- feat(`explicitly-unused.js`): disable new
    `import/consistent-type-specifier-style` rule
- chore: update devDeps/peerDeps.

## 34.6.0

- chore: update devDeps/peerDeps.

## 34.5.0

- feat(`index.js`): disable a few new Unicorn rules (inherting one other)

## 34.4.0

- feat(`index.js`): add new built-in rules
- feat(`explicitly-unused.js`): disable new unused jsdoc rule
- chore: update devDeps.

## 34.3.0

- feat(`index.js`): add Promise plugin's `no-multiple-resolved`
- chore: update devDeps/peerDeps.

## 34.2.0

- feat(`explicitly-unused.js`): mention new ESLint rule
- feat(`index.js`): disable new Unicorn recommended rule and allow
    `no-unnecessary-await`
- chore: update semver, devDeps/peerDeps.

## 34.1.0

- chore: Update devDeps/peerDeps.

## 34.0.0

- chore: Update devDeps/peerDeps. (including new rule from Unicorn)
- chore(BREAKING): Update to Node 14.19.1

## 33.1.0

- feat(`index.js`): add new `no-constant-binary-expression` rule
- chore: Update devDeps/peerDeps.

## 33.0.0

- feat: update `eslint-config-standard` and per this change, use
    `eslint-plugin-n` in place of `eslint-plugin-node`

## 32.14.0

- feat: `web-ext-config.js` file as CJS
- chore: Update devDeps/peerDeps.

## 32.13.0

- feat(index): support `@uce` as virtual module

## 32.12.0

- fix(sauron): prevent `object<>` lower-case

## 32.11.0

- fix(sauron): do allow `object` for now with `preferredTypes`

## 32.10.0

- fix(index, sauron): realign preferences for `Object`, etc., and exempting
    in `@typedef`

## 32.9.0

- fix: Drop preference for `PlainObject`; use TypeScript-compatible JS

## 32.8.0

- feat: Update devDeps/peerDeps. (including new rules from Unicorn, a couple
    of which are disabled here)
- feat(`index.js`): add virtual `@uce/reactive` to `import/no-unresolved`
- feat(`explicitly-unused.js`): add `prefer-json-parse-buffer`
- refactor: revert Atom release; code not helpful

## 32.7.1

- fix: bug in `undefined` check

## 32.7.0

- feat: Attempt Atom-friendly release
- npm: Update devDeps/peerDeps.

## 32.6.0

- npm: Update devDeps/peerDeps.

## 32.5.0

- Restore `sonarjs/no-inverted-boolean-check` despite now removal from
    sonarjs recommended
- npm: Update devDeps/peerDeps. (including update from sonarjs)

## 32.4.0

- npm: Update devDeps/peerDeps. (including new rule from Unicorn)
- Update [`explicitly-unused.js`]: Add new `jsdoc/sort-tags`

## 32.3.0

- npm: Update devDeps/peerDeps. (including new rules from Unicorn)

## 32.2.0

- Update [`explicitly-unused.js`]: Add eslint rule
- npm: Update devDeps/peerDeps.

## 32.1.0

- Enhancement [`index.js`] (tighten): Add Unicorn's `no-empty-file` and
    `prefer-code-point`
- npm: Update devDeps/peerDeps.

## 32.0.0

- Breaking change: Disables `jsdoc/check-examples` due to it not yet working
    in ESLint 8 (should re-enable when supported)
- Enhancement [`index.js`] (tighten): Add new ESLint core
    `no-unused-private-class-members` rule
- Enhancement [`index.js`] (tighten): Add unicorn
    `no-invalid-remove-event-listener` and `no-useless-fallback-in-spread`
    rules
- Build: Use native ESM
- npm: Update devDeps/peerDeps.

## 31.2.2

- npm: Update devDeps/peerDeps.

## 31.2.1

- Fix [`index.js`] (loosen): Disable `unicorn/prefer-object-from-entries`

## 31.2.0

- Enhancement [`sauron.js`] (tighten): Add `forceReturnsWithAsync`
- npm: Update devDeps./peerDeps. (new Unicorn rules)

## 31.1.1

- Fix: For untyped `Promise` messages, fix casing of "any"
- Fix: Clarify that replacing Array could also point to specific array type
- Fix: update devDeps./peerDeps (jsdoc patch)

## 31.1.0

- Enhancement [`great-eye.js`] (tighten): set `hoist: 'all'` for `no-shadow`
- npm: Update devDeps./peerDeps.

## 31.0.0

- Enhancement [`sauron.js`] (tighten): Set `lexicalBindings` to `true` to avoid
    browser globals
- npm: Update devDeps./peerDeps.

## 30.1.0

- npm: Update devDeps./peerDeps. (new SonarJS rules)

## 30.0.1

- Fix: Missing `eslint-plugin-sonarjs` under `peerDependencies`
- npm: Update devDeps./peerDeps. (Unicorn patch)

## 30.0.0

- Breaking change: Restore using `eslint-plugin-sonarjs` which is again being
    actively updated/maintained.

## 29.18.0

- Enhancement (`index.js`) [loosen]: Disable somewhat cumbersome
    `unicorn/prefer-prototype-methods`
- npm: Update devDeps./peerDeps. (new Unicorn rules)

## 29.17.1

- Fix (`node.js`) [loosen]: Disable `node/file-extension-in-import`

## 29.17.0

- Enhancement (`great-eye.js`) [tighten]: Expect
    `unicorn/prefer-object-has-own`
- npm: Update devDeps./peerDeps. (new unicorn rules)

## 29.16.2

- npm: Require latest `eslint-plugin-markdown` (without vulnerabilities)

## 29.16.1

- npm: Require latest `eslint-config-standard` patch

## 29.16.0

- npm: Update devDeps./peerDeps. (adds new jsdoc rules)

## 29.15.0

- npm: Update peerDeps/devDeps

## 29.14.0

- Enhancement (`index.js`) [tighten]: Add `jsdoc/require-asterisk-prefix`
- npm: Update peerDeps/devDeps (brings in `unicorn/no-document-cookie` rule)

## 29.13.0

- npm: Update peerDeps/devDeps

## 29.12.1

- Fix (`index.js`) [loosen]: Allow `fs/promises`

## 29.12.0

- Enhancement (`index.js`) [loosen]: Disable new Unicorn `prefer-module` and
    `prefer-node-protocol` rules
- npm: Update peerDeps/devDeps
- npm: Add `lint` script

## 29.11.0

- npm: Update peerDeps/devDeps

## 29.10.1

- Fix (`+script-node.js`) [loosen]: Disable `no-process-exit` which the
    Node plugin adds
- npm: Update peerDeps/devDeps

## 29.10.0

- npm: Update peerDeps/devDeps

## 29.9.0

- Enhancement (`index.js`) [tighten]: Add Unicorn's `no-static-only-class`
- Enhancement (`index.js`) [loosen]: Make explicit avoidal of Unicorn's new
    `prefer-array-flat` until Node 12
- npm: Update `semver` and peerDeps/devDeps.

## 29.8.2

- npm: Remove now redundant `eslint-plugin-standard`

## 29.8.1

- Fix (`rc.js` and overrides): apply to `.mocharc.js`

## 29.8.0

- Fix (`sauron-node-script`/`+script-node.js`): Add `globalReturn: true`
- npm: Update peerDeps/devDeps.

## 29.7.0

- Enhancement (`mocha.js`): Add `expect`, `assert`, `should` globals.
- Enhancement (`mocha-plus.js`): Add `chai-assert-bdd` plugin

## 29.6.0

- Enhancement (`node.js`) [tighten]: Resume adding `import/dynamic-require`
    as `node/global-require` doesn't flag dynamic global requires

## 29.5.0

- Fix: Override `.ncurc.js`, `.3rdparty-eslintrc.js`, and `**/jsdoc-config.js`
- Add experimental configs `rc-module.js` and `rc-script.js`

## 29.4.0

- Enhancement (`node.js`) [loosen]: Add `node/global-require` and instead drop
    `import/no-dynamic-require` as the redundant one (didn't seem as accurate)

## 29.3.0

- Enhancement [`sauron-script-overrides.js`]: Add new config
- npm: Update peerDeps/devDeps.

## 29.2.0

- Enhancement [`rc.js`] (loosen): Disable `compat/compat` for RC/build files;
    check `.eslintrc.cjs` also

## 29.1.0

- Enhancement [`rc.js`] (loosen): Disable `node/no-unpublished-import` for
    config and build directory files
- Refactoring [`node.js`]: Disable `node/no-missing-import` as redundant with
    `import/no-unresolved`
- npm: Add `prepublishOnly` script

## 29.0.0

- npm: Update devDeps/peerDeps (to allow `rc.js` and its targeting of Markdown
    per `eslint-plugin-markdown`'s 2.0 use of ESLint 7's new processor API
    to be used alongside the updated `eslint-plugin-jsdoc` with its linting of
    `@example` according to the expectations of the same ESLint 7 processor
    API)

## 28.0.1

- Fix (`rc.js`): Ensure properly using new Markdown API
- Docs: Mention inclusion of "md" in `---ext` if latter is explicit

## 28.0.0

- Update to use `eslint-plugin-markdown` 2.0.0, with its updated use of
    ESLint's processor API, see <https://github.com/eslint/eslint-plugin-markdown/tree/v2.0.0#migrating-from-eslint-plugin-markdown-v1> for migrating.
- Update (`rc.js`): Use new Markdown API

## 27.0.1

- Fix: Avoid `postinstall` script which causes problems for non-pnpm dependents

## 27.0.0

- Switch from `@mysticatea` to `@brettz9` fork (fixes and simplifies
    `peerDependencies` and removes extra code)
- Enhancement (`index.js`) [loosen]: Disable sometimes cumbersome
    `unicorn/consistent-destructuring`
- Enhancement (`index.js`) [loosen]: Add `shared-node-browser` env for
    polyglot-friendly globals (other globals specific to envrionment are not
    whitelisted); to actually prevent these, will now need to set
    `shared-node-browser` `env` to `false`.
- Enhancement (`node.js`) [loosen]: Drop `node/global-require` as redundant
    with `import/no-dynamic-require`
- Enhancement (`node.js`): Based on `engines: {node}` set
    `env: {node: true, es20XX: true}` (extra ES globals as relevant to Node
    version), `parserOptions` `ecmaVersion`
- pnpm: Switch to pnpm
- npm: Bump semver; peerDeps/devDeps.
- npm: Bump engines to Node 10

**Experimental additions**:
- Enhancement (`+script-node.js`): Add file for applying script
    source type with Node; used by `sauron-node-script`
- Enhancement (`+script.js`): Add file for applying script source
    type for non-Node; used by `sauron-script`
- Enhancement (`sauron-node-overrides.js`): `sauron-node` with `rc` and `mocha`
- Enhancement (`sauron-node-script-overrides.js`): `sauron-node-script` with
    `rc` and `mocha`
- Enhancement (`sauron-overrides.js`): `sauron` with `rc` and `mocha`
- Enhancement (`sauron-script.js`): `sauron` with `+script.js`
    file
- Enhancement (`+babel.js`): Add file for wrapping a module to support
    equivalent babel/eslint-parser rules
- Enhancement (`mocha.js`): Sets up Mocha (and `chai` global) on test
    directories (via overrides)
- Enhancement (`mocha-plus.js`): Strict but reasonable rules for checking
    Mocha/Chai (not naming "sauron" as not bundling with Sauron)
- Enhancement (`cypress.js`): Strict but reasonable rules for checking Cypress
- Enhancement (`rc.js`): Add config for using `overrides` to give Rollup
    and RC config files to support modules where available (and script where
    not)
- Refactoring (`sauron-node-script.js`): Use new `+script-node.js` file

## 26.1.0

- npm: Update peerDeps/devDeps.

## 26.0.0

- Breaking enhancement: Switch from SonarJS to Radar, a maintained fork which
    doesn't warn when using ESLint 7 for `peerDependencies`. Changes
    `inherited-rules/implicitly-included/sonars-recommended.js` to
    `inherited-rules/implicitly-included/radar-recommended.js`

## 25.1.0

- Enhancement: Enforce type on `yields`

## 25.0.0

- Enhancement [`index.js`] (tighten): Update new jsdoc and Unicorn rules,
    though disable `unicorn/no-array-for-each`
- Enhancement [`great-eye.js`] (tighten): Prevent plain use of even subclassed
    `Promise<>` to instead use an interface where the specific resolver and
    rejector can be documented.
- npm: Update peerDeps/devDeps.

## 24.0.0

- Enhancement [`index.js`] (tighten): Uses all new Unicorn 26.0.0 rules
- remark: remove remarkrc
- npm: Update peerDeps/devDeps.

## 23.0.0

- Enhancement [`index.js`] (tighten): Add `no-nonoctal-decimal-escape` and
    `no-unsafe-optional-chaining`
- Enhancement [`index.js`] (tighten): Add `unicorn/prefer-array-some`,
    `unicorn/prefer-date-now`, `unicorn/prefer-default-parameters`
- Enhancement [`index.js`] (tighten): Use renamed Unicorn rules
- Enhancement [`index.js`]: Avoid new Unicorn rules `no-lonely-if` and
    `empty-brace-spaces`
- Update [`explicitly-unused.js`]: Add renamed Unicorn rules
- npm: Update peerDeps/devDeps.

## 22.10.0

- Enhancement [`index.js`]: Apply latest standard; remove now unneeded
    `standard/no-calback-literal`, `no-negated-in-lhs`
- Enhancement [`explicitly-unused.js`]: Remove disabling of
    `node/no-callback-literal` (rule now used)
- npm: Update peerDeps/devDeps.

## 22.9.0

- Enhancement [`index.js`]: Add `checkDefaults`, `checkParams`, and
    `checkProperties` to `jsdoc/check-examples` rule
- Enhancement [`great-eye.js`]: Add `unicorn/numeric-separators-style` (but
    disable in `index.js`)
- npm: Update peerDeps/devDeps.

## 22.8.0

- npm: Update peerDeps/devDeps.
- Update: Disable new Unicorn and jsdoc rules

## 22.7.0

- npm: Update peerDeps/devDeps.

## 22.6.0

- Enhancement [`index.js`] (Tighten): Add Unicorn rules
    `no-object-as-default-parameter` and `prefer-array-find`;
    add back `prefer-flat-map`
- npm: Update peerDeps/devDeps.

## 22.5.1

- npm: Update peerDeps/devDeps.

## 22.5.0

- Enhancement [`index.js`] (Tighten): Add `no-promise-executor-return`,
    `no-unreachable-loop`
- npm: Update peerDeps/devDeps.

## 22.4.0

- Enhancement [`sauron.js`] (Tighten): Add `jsdoc/require-throws`
- npm: Update peerDeps/devDeps.

## 22.3.0

- Enhancement [`sauron.js`] (Tighten): Add
    `eslint-comments/require-description`
- Linting: As per latest sauron
- npm: Update peerDeps/devDeps.

## 22.2.0

- Enhancement: [`index.js`] (Tighten): Add `no-loss-of-precision`.
- npm: Update peerDeps/devDeps.

## 22.1.0

- Update [`index.js`]: Disable new Unicorn recommended rules
- npm: Update devDeps/peerDeps.
- npm: Remove explicit reference to new ESLint 7 recommended rules
    (will automatically be set)

## 22.0.0

- Enhancement [`index.js`] (tighten): Add `default-case-last` and
    `no-useless-backreference`
- Update [`explicitly-unused.js`] (loosen): Add disabled
    `no-restricted-exports` (ESLint 7 rule)
- npm: Update devDeps/peerDeps

## 21.0.0

- Update [index.js]: Disable new `unicorn/no-null`
- Docs: Update explanation for `regex-shorthand`
- npm: Update devDep./peerDep. (unicorn)

## 20.0.0

- npm: Update devDeps/peerDeps

## 19.0.0

- Breaking change/Update: Move Node-specific rules out of `index.js`
    into `node.js` (but as (non-deprecated) `eslint-plugin-node` equivalents
    to ESLint rules)
- Update [`explicitly-unused.js`]: Add (disabling of) new project-specific
    `eslint-plugin-node` rules
- Enhancement: Add new `sauron-node-script` which overrides use of Modules
    to allow CommonJS
- Refactoring: Simplify by included new `recommended` configs of `sonarjs`
    and `no-use-extend-native`
- npm: Update devDeps/peerDeps

## 18.0.0

- Enhancement [`sauron.js`] (tighten): Add `unicorn/prefer-number-properties`
- Enhancement [`great-eye.js`] (tighten): Add `unicorn/unicorn/prefer-set-has`
- Maintenance: 4 sp. for MD files
- npm: Update devDeps./peerDeps.

## 17.5.0

- Enhancement [`index.js`] (loosen): Surface `standard`'s reasonable dropping of
  '`no-return-await` (and add to `explicitly-unused`).
- npm: Update devDeps./peerDeps.

## 17.4.0

- Update [`explicitly-unused.js`]: Add `unicorn/string-content` and
  deprecated `unicorn/regex-shorthand`
- Enhancement [`index.js`] (tighten): Add recommended `unicorn/better-regex`
  but with option `sortCharacterClasses` set to `false`
- Optimization: Use strict mode
- Linting: Switch to single quotes; fix indent; add ignore file
- npm: Update devDep/peerDep (unicorn) and `package-lock.json`

## 17.3.0

- npm: Update devDeps/peerDeps

## 17.2.0

- Enhancement [`sauron.js`] (tighten): Offer replacements for
  `function` and `array` lower-cased
- npm: Update devDeps

## 17.1.0

- Fix: Disable Unicorn `prefer-exponentiation-operator` with proper name
- npm: Update peerDeps/devDeps

## 17.0.0

- Enhancement [`sauron.js`] (tighten): For `jsdoc/require-jsdoc`, target
  `ClassDeclaration`, `ClassExpression`, `MethodDefinition` in addition to
  `FunctionDeclaration`
- npm: Update peerDeps/devDeps

## 16.5.0

- Enhancement [`index.js`] (tighten): Add `jsdoc/no-bad-blocks`
- Update: Add `jsdoc/no-defaults`
- npm: Update peerDeps/devDeps

## 16.4.0

- Enhancement [`index`] (change): Remove `matchingFileName` option on
  `jsdoc/check-examples` in favor of new default which follows path of
  containing file, though still with ".md" extension
- npm: Update peerDeps/devDeps

## 16.3.0

- Enhancement [`sauron`] (tighten): Added `contexts: ['any']` for
  `require-param-name`, `require-param-type`, and `require-returns-type`
  so as to document virtual functions (e.g., with `@implements`)
- Enhancement [`sauron`] (tighten): Added `implements-on-classes` with
  `contexts: ['any']`
- npm: Update peerDeps/devDeps

## 16.2.0

- Enhancement [`great-eye`] (tighten): Add `jsdoc/require-property-description`
- Enhancement [`index`] (tighten): For `match-description`, add with
  `contexts: ['any']`
- Docs: Explain exclusions

## 16.1.0

- Enhancement [`index.js`] (tighten): Now includes `jsdoc` plugin update,
  with `check-property-names`, `require-property`, `require-property-name`,
  `require-property-type` rules (though disabling
  `require-property-description` and avoiding `require-file-overview`).
- Enhancement [`index.js`] (loosen): Add `exemptTagContexts` option for
  `typedef` with `object` or `PlainObject` (so can have as a base type
    without complaint)
- npm: Fix build to properly remove files (no current effect)
- npm: Update peerDeps/devDeps

## 16.0.0

- npm: Update peerDeps/devDeps (including breaking node plugin change)

## 15.0.0

- Enhancement [`index.js`] (tighten): Now includes
  `unicorn/prefer-modern-dom-apis` by inheritance
- Enhancement [`index.js`] (loosen): Now excludes
  `require-atomic-updates` which was problematic
- Docs: Clarify some missing or misplaced descriptions for rationales on
  disabled rules
- Enhancement [`explicitly-unused.js`]: Add `lines-between-class-members`
  and `require-atomic-updates`
- npm: Update peerDeps/devDeps

## 14.0.3

- Fix: Disable `no-process-exit` in Node config

## 14.0.2

- Fix (loosen): Disable `no-process-exit` since `unicorn/no-process-exit`
  allows in CLI apps

## 14.0.1

- Fix: Ensure `eslint-plugin-no-unsanitized` is added as a peerdep.

## 14.0.0

- Enhancement [`sauron.js`] (tighten): Add new `eslint-plugin-no-unsanitized`
  rules
- npm: Update devDeps/peerDeps

## 13.1.0

- Enhancement [`index.js`] (loosen): Disable `regex-shorthand` until such
  time as it may provide option not to sort character classes
- npm: Update devDeps/peerDeps

## 13.0.0

- Enhancement [`index.js`] (tighten): Add new unicorn rules
  (`prefer-negative-index`, `prefer-trim-start-end`)
- npm: Update devDeps/peerDeps

## 12.0.0

- Enhancement [`index.js`] (tighten): Add new eslint rules
  (`grouped-accessor-pairs`, `no-constructor-return`, `no-dupe-else-if`,
  `no-setter-return`, `prefer-exponentiation-operator`)
- Change: Disabled `unicorn/prefer-exponentiation-operator` in favor of
  now built-in `prefer-exponentiation-operator`
- npm: Update devDeps/peerDeps

## 11.5.0

- npm: Update peerDeps/devDeps

## 11.4.0

- Enhancement [`index.js`] (tighten): By update, gain new
    `eslint-plugin-jsdoc` rules
- Maintenance: Add `.editorconfig`
- npm: Update peerDeps/devDeps

## 11.3.0

- Enhancement [`index.js`] (tighten): By update, gain new `sonarjs` rules:
  `no-collection-size-mischeck` `no-redundant-jump`,
  `no-same-line-conditional`, `no-unused-collection`
- npm: Update peerDeps/devDeps

## 11.2.0

- Enhancement [`sauron`] (tighten): Ensure checking `Object`
- npm: Update peerDeps/devDeps

## 11.1.0

- Refactoring [`node`]: Remove redundant `plugins: ['node']` (recommended
   config already includes)
- Linting: Dog food our own linting rules
- Docs: Mention use of `plugin:node/recommended-script`
- npm: Update peerDeps/devDeps

## 11.0.1

- Fix [`index.js`]: Ensure is enforcing "single" for `quotes`

## 11.0.0

- Enhancement [`index.js`] (loosen): Change `quotes` from `standard` approach
  to add settings `avoidEscape: true` and `allowTemplateLiterals: true`.
- npm: update peerDeps/devDeps

## 10.0.0

- Enhancement [`sauron`] (tighten) Add Unicorn `prefer-string-slice` rule

## 9.0.1

- Fix: Remove `unicorn/consistent-function-scoping` as prematurely added

## 9.0.0

- Breaking change: Require >= node 8.10.0
- Enhancement [`index.js`] (tighten): Add new rules: `default-param-last`,
  `no-import-assign`, `prefer-regex-literals`
- Enhancement [`index.js`] (tighten): Inherit new rules from unicorn:
  `prefer-dataset`, `prefer-reflect-apply`
- Enhancement [`index.js`]: `unicorn/expiring-todo-comments` but allowing
  for no conditions
- Enhancement [`index.js`]: Add `no-warning-comments` with terms set to `fixme`
  and `xxx` so as to block these (in favor of `todo`)
- Enhancement [`great-eye`]: `unicorn/expiring-todo-comments` and insisting
  on conditions
- Enhancement [`sauron`]: `unicorn/consistent-function-scoping`
- Testing: Compare to es2020
- npm: Bump `@mysticatea/eslint-plugin`, `eslint-plugin-jsdoc`,
  `eslint-plugin-unicorn`, `typescript`, `eslint` devDeps/peerDeps

## 8.9.0

- Enhancement [`index.js`]: Update node plugin with recommended update;
  adds `node/no-exports-assign`
- npm: Update devDeps/peerDeps

## 8.8.0

- Update: Avoid `node/no-callback-literal` which duplicates
  `standard/no-callback-literal`
- npm: Update devDeps/peerDeps

## 8.7.0

- Enhancement [`index.js`] (tighten): remove rule
  `function-call-argument-newline` (oppressive)

## 8.6.0

- Enhancement [`index.js`] (tighten): apply rule
  `function-call-argument-newline` set to `never`
- Enhancement [`index.js`]: apply rule `no-label-var` for comparison purposes
  (though already a part of `eslint:recommended`)
- Enhancement [`index.js`]: Disable `object-curly-newline` since added to
  "standard"
- npm: Update devDeps/peerDeps

## 8.5.2

- npm: Update peer and devDeps (including import, jsdoc, and unicorn plugins)

## 8.5.1

- Fix: Avoid use of now removed template variables in messages calling
  for replacement

## 8.5.0

- npm: Update eslint-plugin-jsdoc

## 8.4.0

- Change: [`index.js`]: Explicitly reject items if we inherit from mysticatea
- Enhancement: Add `eslint-conf_eslint-all.js` for showing
  non-eslint-recommended rules (e.g., by standard)
- Build: Update "standard" and eslint-recommended comparison files as
  "standard" now incorporates more recommended rules (and removes a
  few of its own redundant ones)
- Build: Only check `explicitly-unused` rules in comparison with unused,
  not with inherited, as need to see which explicitly unused rules may
  later become used
- Build: Ensure removing files before testing
- npm: Bump peerDeps/devDeps
- Fix [`index.js`]: Disable `lines-between-class-members` as inherited
  now from standard

## 8.3.0

- npm: Bump eslint-plugin-jsdoc, typescript devDeps/peerDeps

## 8.2.0

- npm: Bump eslint-plugin-jsdoc devDep/peerDep

## 8.1.0

- npm: Update eslint-plugin-jsdoc and move from settings to options
  accordingly; document choice of options

## 8.0.3

- npm: Bump `eslint-plugin-jsdoc` for dep. fix

## 8.0.2

- npm: Bump `eslint-plugin-jsdoc` (getting latest jsdoctypeparser for
  jsdoc type improvements)

## 8.0.1

- Fix (jsdoc) [`sauron`]: `object` and `Array` `preferredTypes` were
  reporting parents instead of children
- Refactoring: Remove trailing commas

## 8.0.0

- Breaking change [`index.js`]: require `@extends` in place of `@augments`
- Breaking change [`sauron`]: `preferredTypes` to prefer Typescript-friendly
  `any` instead of `Any`
- Change [`index.js`]: Reorder `extends` (what should be
  backward-compatibly) and avoid adding to `plugins` except where needed
- Change [`index.js`]: Make explicit deriving from `promise/recommended`,
    `import/recommended`, and `jsdoc/recommended`, though disabling rules
    we don't want (and removing some explicit rule additions which are
    now inherited); though not currently deriving from its `es2019` config,
    we are disabling some `@mysticatea/eslint-plugin` rules, as though we
    were inheriting only those rules which it doesn't inherit from other
    plugins/configs. In the absence of inheriting the config, we are also
    therefore adding some of its rules manually. Should be
    backward-compatible.
- Update [\*]: Fix config extension paths for ESLint 6

- Fix [`index.js`] (tighten): Ensure `no-use-extend-native` is being applied
- Fix [`explicitly-unused.js`]: Remove those which were (or now are) in
  other configs like `sauron`

- Enhancement [`index.js`] (tighten): Add plugin with its recommended
  rules (`sonarjs`), disabling some
- Enhancement [`index.js`] (tighten): Add `eslint-plugin-html` plugin
    (though need to enable for HTML, e.g., `--ext .js,.md,.html`)
- Enhancement [`index.js`] (tighten): Add plugin `array-func/all` with its
  `all` rules (though disabling `array-func/prefer-array-from` for now)
- Enhancement [`sauron`] (tighten): Add `prefer-named-capture-group`
- Enhancement [`great-eye`] (tighten): Add `max-statements`,
  `import/no-unused-modules`, and `sonarjs/cognitive-complexity`
- Enhancement [`great-eye`] (tighten): Add `import/no-unused-modules` (with
    `missingExports` and `unusedExports`)
- Enhancement [`great-eye-node`]: Add new config which expands on `great-eye`
  and `sauron-node`
- Enhancement [`explicitly-unused.js`]: Add unused `@mysticatea` and
  `eslint-comments` items and some deprecated rules
- Enhancement [`inherited-rules/implicitly-included`]: Add these auto-built
  configs to track rules that were inherited (and not disabled)
- Enhancement [`inherited-rules/unused`]: Add space for these auto-built
  configs (currently none) to track if there are any rules in the plug-ins
  and configs we have extended but have not either incorporated or
  explicitly rejected.

- Linting: Fix `.eslintrc` error
- Docs: Indicate how to find which rules were inherited or rejected and
  to calculate if any inherited ones are missing from our lists;
  some doc fixes
- npm: Update devDeps, peerDeps

## 7.0.1

- Fix: For `Promise`, was reporting parents instead of children

## 7.0.0

- Tighten: Require `Promise` to have a type
- Tighten: Add rules, `unicorn/prefer-event-key` and `unicorn/prefer-flat-map`
- Tighten: Disallow `.<>` syntax in favor of `<>` syntax
- npm: Update unicorn, jsdoc, typescript peerDeps/devDeps

## 6.1.1

- Fix: Issue in formatting of `settings.jsdoc`

## 6.1.0

- Change: Prefer not having `allowAugmentsExtendsWithoutParam` setting
  or its recommended replacement
- Refactoring: Remove now default config
- npm: Update import (patch), jsdoc (feature) plugins

## 6.0.1

- npm: Update devDep

## 6.0.0

- Breaking change: Node minimum 6.0.0
- Tighten (`great-eye`): Add `preferredTypes`
- Tighten (`sauron`): Add `forceRequireReturn` and `preferredTypes`
- Tighten: Add `require-returns-check`
- Loosen: `allowOverrideWithoutParam`, `allowImplementsWithoutParam`,
  `allowAugmentsExtendsWithoutParam` all `true` by default
- Tighten: Set `rejectExampleCodeRegex` to ``^``` to allow avoiding example <!-- `-->
- Change: Set `matchingFileName` to `dummy.md` so that it will match any
  Markdown rules by default
- Change (`great-eye`): Switch from `require-jsdoc` to
  `jsdoc/require-jsdoc` (former is deprecated);
- Remove `valid-jsdoc` in favor of corresponding `eslint-plugin-jsdoc` config
    - Breaking changes relative to `valid-jsdoc` as used previously:
        - `jsdoc/check-types` - Per new defaults, use `object` instead
            of `Object`
        - `jsdoc/require-returns`: true only in sauron and as warning
        - `jsdoc/require-returns-type` and `jsdoc/require-param-type` are
            only warnings
        - `jsdoc/match-description`: Now allowing backtick or digits at beginning
            of jsdoc descriptions
- Integrate eslint-plugin-jsdoc 7.0.0 (listing features/breaking changes only
  and only apply if we add by default or if you enable the rule)
    which:
    - Breaking change: Drops Node v4 support; minimum 6.0.0; updated devDeps,
        eslint peer dep to >= 5.16.0 (from >= 4.14.0)
    - Breaking change: Add `meta.type` (usable by `--fix-type`) and
        `meta.schema` (enforces schema on options) to rules
    - Breaking change: `check-types` now expects "object" instead of "Object"
    - `check-examples`: Change behavior to also check classes
    - `check-types` and `no-undefined-types`: utilize `settings.jsdoc.preferredTypes` map
    - `check-types`: Add option object with `noDefaults`
    - `implements-on-classes`: Add rule to prevent @implements on
        non-constructor functions
    - `match-description`: Added rule (see `valid-jsdoc` note above)
    - `no-types`: Add rule to prevent types on @param/@returns
    - `no-undefined-types`: Consider Node.js/Commonjs as module (including
        variables in module scope as well as global)
    - `no-undefined-types` now automatically allows `NaN`
        and `Infinity` types
    - `no-undefined-types`: Add option object with `preferredTypesAreDefined` and `definedTypes`
    - `no-undefined-types`, only check tags expected to have types (as
      with `check-types`) or, for `valid-types`, tags expected to have
      types or namepaths
    - `require-description`: Add options `contexts` and `noDefaults` to
        allow additional contexts (e.g., `ClassDeclaration`)
    - `require-example`: Implement `avoidExampleOnConstructors` setting;
        also skip if possesses `inheritdoc`/`override`
    - `require-hyphen-before-param-description`: check `param`
        `tagNamePreference` setting
    - `require-jsdoc`: exempt empty functions option
    - `require-param`: `ignorePrivate` setting
    - `require-returns`, `require-returns-check`, and `require-jsdoc`: Treat
        `async` functions as returning a value (since they return Promises)
    - `require-returns`: Allow presence of `@interface` to avoid need for
        `@returns` (as `@interface implies a class`); Allow presence of
        ES setter to avoid need for `@returns` as setters don't return
    - `require-returns`: `forceRequireReturns` setting
    - `require-returns`: Avoid reporting when `@implements` is present
    - `require-returns-check`: If a return is documented, allow `@class`
        and `@interface` (as with `@constructor`) to ignore reporting a
        missing return in body as constructors implicitly return the class;
        for testing, add getter check
    - `require-return-checks`: Prevent from erring within
        `@virtual`/`@constructor` and class constructor
- npm: Update eslint-plugin-node

## 5.0.0

- Integrate eslint-plugin-jsdoc 4.8.4 which allows:
  1. (Tighten): For `jsdoc/check-types`, check `undefined` and `null` for
    casing
  2. (Tighten): Add `jsdoc/require-jsdoc` rule (to great-eye only)
  3. (Tighten): For `jsdoc/valid-types`, check namepath type tags for
    empty or invalid namepaths
  4. (Loosen): Support `@memberof!` with `jsdoc/check-tag-names`
  5. This is not in effect, but the rule `jsdoc/no-undefined-types` will
    loosen the types `undefined` and `null`, and check a variety of tags
    which define names (e.g., `@class`).

## 4.0.0

- Tighten: Apply `plugin:node/recommended-module` rules, bringing
    `node/no-unsupported-features/es-syntax` with `ignores: ["modules"]`,
    `node/no-unpublished-import`, `node/no-deprecated-api`,
    `node/process-exit-as-throw`.
- Tighten: Add new Node rule `node/file-extension-in-import`
- Tighten: Add `node/prefer-promises/dns` and `node/prefer-promises/fs`
    in sauron-node
- Loosen: Remove `no-process-exit` to `node`-based rules only
- npm: Update eslint-plugin-node, eslint-plugin, js-yaml

## 3.0.1

- npm: Add typescript and plugins node/standard to peerDeps
- npm: Add typescript as devDep

## 3.0.0

- License: Add file (MIT)
- npm devDep: import, eslint-plugin

## 2.0.0

- Fail for new `check-syntax` (Closure-specific syntax)
- Sauron only: `jsdoc/require-returns` warning
- Make explicit lack of acceptance of `jsdoc/check-alignment`
    and `jsdoc/check-indentation` except in the `ash-nazg/great-eye`

## 1.0.2

- Fix: Mistakenly enabled rather than disabled `prevent-abbreviations`

## 1.0.1

- Fix: Omitted actual `prevent-abbreviations` disabling

## 1.0.0

- Change (tighten, loosen): Updated `eslint-plugin-compat` to [3.1.0](https://github.com/amilajack/eslint-plugin-compat/releases)
- Change (tighten, loosen): Updates Unicorn to [8.0.1](https://github.com/sindresorhus/eslint-plugin-unicorn/releases/),
  though disabling `prevent-abbreviations` except in the `great-eye` subconfig
- Docs (README): List dependencies alphabetically in list, lb
- npm: Update devDeps

## 0.5.0

- Change (loosen): Disable cumbersome `@mysticatea/no-use-ignored-vars`

## 0.4.4

- Change (loosen): For `eslint-comments/disable-enable-pair`,
    set option `allowWholeFile` to true

## 0.4.3

- Change: Avoid `unicorn/no-unreadable-array-destructuring` rule
- Docs: Update explicit listing per jsdoc changes
- Docs: Explain missing included rules

## 0.4.2

- Fix: Try to workaround problem with recommended comments plugin

## 0.4.1

- Fix: Add missing `eslint-plugin-eslint-comments` devDep/peerDep

## 0.4.0

- Enhancement: Add some rules from @mysticatea/eslint-plugin
- npm: Update devDeps/peerDeps

## 0.3.0

- Breaking change: Move rules (`capitalized-comments`, `complexity`,
    `no-magic-numbers`, `no-warning-comments`) to new config
    `ash-nazg/great-eye` (and add `max-statements-per-line` and
    `no-plusplus` as well as jsdoc rules `require-description`,
    `require-param-description`, `require-returns-description`
    and `require-example`)
- Fix: Though not a package, lint `explicitly-unused.js` file
- Linting: Fix indent, tab
- npm: Add ESLint config and script for project itself (using double
    quotes given JSON-ish style)
- npm: Update to versioned `eslint-plugin-jsdoc`
- npm: Update devDep

## 0.2.0

- Enhancement: Add `no-restricted-syntax` with `[operator=instanceof]` to
    forbid use of `instanceof` (which, unless one is using
    `Symbol.hasInstance`, is cross-frame unsafe)

## 0.1.1

- Fix: Add missing `peerDependencies` for new items

## 0.1.0

- Enhancement: Add `eslint-plugin-no-use-extend-native` and add from
    `eslint-plugin-unicorn`

## 0.0.4

- Fix: Make devDeps explicitly include `eslint-plugin-node` and
  `eslint-plugin-standard` as `eslint-config-standard` currently relying
  on them.

## 0.0.3

- Fix: Should need `eslint-config-standard` instead of
  `eslint-plugin-standard`

## 0.0.2

- Name change/first working version
