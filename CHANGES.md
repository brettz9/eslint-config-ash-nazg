# eslint-config-ash-nazg CHANGES

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
