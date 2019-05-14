# eslint-config-ash-nazg CHANGES

## ?

- Loosen: Allow backtick at beginning of jsdoc descriptions

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
