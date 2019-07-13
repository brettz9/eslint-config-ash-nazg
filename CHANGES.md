# eslint-config-ash-nazg CHANGES

## 8.4.0

- Enhancement: Add `eslint-conf_eslint-all.js` for showing
  non-eslint-recommended rules (e.g., by standard)
- Build: Update "standard" and eslint-recommended comparison files as
  "standard" now incorporates more recommended rules (and removes a
  few of its own redundant ones)
- npm: Bump peerDeps/devDeps

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
