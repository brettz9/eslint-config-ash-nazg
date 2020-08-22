# eslint-config-ash-nazg CHANGES

<!--
Waiting on https://github.com/standard/eslint-config-standard/pull/160
as would like to remove deprecated rule https://eslint.org/docs/rules/no-negated-in-lhs
-->

## ?

- npm: Update peerDeps/devDeps.

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
