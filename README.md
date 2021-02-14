# @passport-next/eslint-config-passport-next

Forked from https://github.com/brettz9/eslint-config-ash-nazg

Status:
[![NPM version](https://img.shields.io/npm/v/@passport-next/eslint-config-passport-next.svg)](https://www.npmjs.com/package/@passport-next/eslint-config-passport-next)
[![Build Status](https://travis-ci.org/passport-next/skel.svg?branch=master)](https://travis-ci.org/passport-next/eslint-config-passport-next)
[![Maintainability](https://api.codeclimate.com/v1/badges/b828067546e03aadbe57/maintainability)](https://codeclimate.com/github/passport-next/eslint-config-passport-next/maintainability)
[![Dependencies](https://david-dm.org/eslint-config-passport-next.png)](https://david-dm.org/passport-next/eslint-config-passport-next)


A ruthless--though not arbitrary--degree of control for your kingdom!

**[One ring](https://en.wikipedia.org/wiki/One_Ring) to
rule them all!**

## Installation

```sh
npm i -D eslint-config-ash-nazg
install-peerdeps -d eslint-config-ash-nazg
```

## The rules

See [index.js](./index.js) (and [node.js](./node.js) for `ash-nazg/node`
rules) for the rules we explicitly include (and see
[sauron.js](./sauron.js) for the even stricter `ash-nazg/sauron` rules or
[great-eye](./great-eye.js) (or [great-eye-node](./great-eye-node.js)) for
still stricter rules though which are probably best not used).

`env` is set to automatically include `'shared-node-browser': true` given that
most environments will be Node or a browser or a polyglot Node-browser. If you
really don't want this, you can override by setting
`'shared-node-browser': false`. Note that this setting only adds globals which
are present in either Node or the browser; it won't falsely allow browser
globals in a Node app or vice versa; you can use `env`'s `node: true` or
`browser: true` if you want to support Node or browser globals.

(See [explicitly-unused.js](./explicitly-unused.js) for the core and extended
rules we don't include (rationale for non-inclusion below).)

- [Main rules](https://eslint.org/docs/rules/) (also search for "error" within <https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js>) for the `eslint:recommended` rules we inherit (though see below for our two modifications to these).
- ["standard"](https://github.com/standard/eslint-config-standard/blob/master/eslintrc.json)
rules we inherit (though see below for our handful of modifications).
- [@brettz9/eslint-plugin](https://github.com/brettz9/eslint-plugin)
    for a number of added rules
- [eslint-comments/recommended](https://github.com/mysticatea/eslint-plugin-eslint-comments)
- [eslint-plugin-no-use-extend-native](https://github.com/dustinspecker/eslint-plugin-no-use-extend-native) for one added rule.
- [eslint-plugin-no-unsanitized](https://github.com/mozilla/eslint-plugin-no-unsanitized) for two added rules.
- [Recommended Unicorn rules](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/index.js#L20-L53) (a few items disabled and enabled as per below)
- [eslint-plugin-array-func](https://github.com/freaktechnik/eslint-plugin-array-func#array-funcall-configuration) for further rules

I've focused below on deviations because the original sites tend to
already articulate the usefulness of the rules I *have* incorporated
for these plugins/configs. This is for tracking design choices and
not disparaging the utility of non-included rules.

## Other bundled configs

The `ash-nazg/node` config expands upon the regular `ash-nazg` rules to
add rules specific to Node environments. Specifically,
`plugin:node/recommended-module` has been adopted for now along with
some stylistic choices. However, if you are using more CJS exports,
you can override this by adding `plugin:node/recommended-script` to your
`extends` array (after `ash-nazg`) or, for Sauron-Node, by using
`sauron-node-script`.

The `ash-nazg/node` configs also detect minimum Node from `engines` and set
`env` to use the highest supported ES globals, e.g., `ES2021` (and also sets
`node: true`) as well as sets `ecmaVersion`.

The `ash-nazg/sauron` config expands upon the regular `ash-nazg` rules to
indicate what are generally best practices but are less likely to be due to
an error and may possibly also require a high (and possibly tyrannical)
degree of refactoring for existing projects. See below for the rationales
for inclusion.

The `ash-nazg/great-eye` and `ash-nazg/great-eye-node` configs expands on
`ash-nazg/sauron` (and `ash-nazg/sauron-node`) to include
rules which enforce good practices, but which are so cumbersome and may
flag too much legitimate code that I personally won't regularly use them.
Still, I like to track them here, including in the event that their
config changes to make them less all-encompassing.

The `ash-nazg/sauron-node` config incorporates both `ash-nazg/node` and
`ash-nazg/sauron`. It adds specific rules of its own which may be unduly
strict for `ash-nazg/node`.

A few experimental configs have been added as well, though this might be
removed or significantly modified in a future version:

- `+script-node.js`: Applies script source type with Node; used by
    `sauron-node-script`
- `+script.js`: Applies script source type for non-Node; used by
    `sauron-script`
- `sauron-node-overrides.js`: `sauron-node` with `rc` and `mocha`
- `sauron-node-script-overrides.js`): `sauron-node-script` with `rc` and
    `mocha`
- `sauron-overrides.js`: `sauron` with `rc` and `mocha`
- `sauron-script.js`: `sauron` with `+script.js` file
- `+babel.js`: Wraps a module to support equivalent babel/eslint-parser rules
- `mocha.js`: Sets up Mocha (and `chai` global) on test directories
    (via overrides)
- `mocha-plus.js`: Strict but reasonable rules for checking Mocha/Chai (not
    naming "sauron" as not bundling with Sauron)
- `cypress.js`: Strict but reasonable rules for checking Cypress
- `rc.js`: Config for using `overrides` to give Rollup and RC config files to
    support modules where available (and script where not)

## Comparison to other "standards"

`eslint-config-ash-nazg` is a collection of some excellent preexisting
rules other projects have created, curated with the intent of attaining
productive strictness.

["standard"](https://standardjs.com/) ([config](https://github.com/standard/eslint-config-standard))
and `eslint:recommended` have brought a welcome degree of
pseudo-standardization for code styling and error checking.

However, they do not impose as high of a degree of control as one may
find desirable to enforce common, sane styling practices, catch bad
practices and hard-to-read patterns, or in some cases even catch errors.

Moreover, `standard` enforces a few styling rules which are contrary to
regular JavaScript practice (e.g., its enforced absence of semi-colons).

`ash-nazg` aims to offer defaults which adhere to norms, build upon
productive restrictions, and in a few cases, offer greater latitude
where some constraints are unduly confining.

To see which rules from an extended config ended up enabled (we are
typically inheriting "recommended" configs), see
`/inherited-rules/implicitly-included`.

To see which rules from the extended config we disabled, see our relevant
config(s) (e.g., `index.js`).

To see which rules from the plugin that each extended config derives from
(i.e., the non-recommended rules of a plug-in), see `explicitly-unused.js`
for ones we have consciously not used and see our relevant config(s)
(e.g., `index.js`) for the ones we did add (alongside any recommended).

The `unused` folder is used to capture any (non-recommended) rules which
are not explicitly either enabled or within `explicitly-unused.js` (as
might be found during an update of our config dependencies), but it is
currently, and should hopefully remain, empty, as we wish to be
consciously aware of all rules from inherited projects and whether we
wished to include them. As far as new rules added to `recommended`, we
can see these within diffs of `inherited-rules/implicitly-included`
files (built during development by `npm run compare`).

## Rationales for inclusion of dependent plug-ins

Besides incorporating more from ESLint core, we also add rules from
a few other (peer) dependencies.

- `eslint-plugin-compat` - Though its list of browsers to support is not
  added by our code, it is a basic enough of a need to remind one
  of its need to be present (and to avoid needing to add the rule for it).
- `eslint-plugin-import` - Besides being peer dependencies of `standard`,
  this has some additional useful rules we apply.
- `eslint-plugin-jsdoc` - provides a number of helpful rules for catching
  bad or incomplete JSDoc during development. Note that we do not impose
  `jsdoc/require-jsdoc` except as a warning in `ash-nazg/sauron` mode, so
  all of the `eslint-plugin-jsdoc` rules should only apply when JSDoc is
  used. We also avoid some of `eslint-plugin-jsdoc` stricter checking
  requirements for descriptions.
- `eslint-plugin-markdown` - Another basic use case is ensuring code
  snippets are linted, which is why this is expected. You may find its
  discussion of `overrides` helpful for tweaking rules for Markdown (and
  you may also wish to use `overrides`, for the `eslint-plugin-jsdoc`
  rule `check-examples` if you wish to lint your JSDoc examples according
  to different standards). You must pass the file extension within the `--ext`
  flag, e.g., `--ext .md,.js` to get this to take effect.
- `eslint-plugin-html` - One basic use case is ensuring HTML
    is linted, which is why this is expected. You may wish to use
    `overrides` for HTML-specific rules or enable the plugin's
    [own rules](https://github.com/BenoitZugmeyer/eslint-plugin-html#settings).
    You must pass the file extension within the `--ext` flag, e.g.,
    `--ext .html,.htm,.js` to get this to take effect.
- `eslint-plugin-promise` - Besides being peer dependencies of `standard`,
  this has some additional useful rules we apply.

## Deviations

### Deviation from `eslint:recommended`

In comparison to `eslint:recommended`, ash-nazg only *adds* restrictions with
the exceptions of:

1. Loosening the ESLint < 6 requirement of `no-console` into a mere warning
  and only in the stricter `ash-nazg/sauron` configuration. This is for the
  reason that console logging is too useful for debugging (and sometimes
  for reporting progress) to have to disable it at every turn and to distract
  one from actual errors.
2. Change `no-empty` so that `allowEmptyCatch` is `true`. There are enough
  cases where one legitimately needs to suppress errors.

### Rationale for overriding `standard` rules

1. `semi` - Even if not strictly required, semi-colons are conventional in
    JavaScript and help denote the end of statements (as opposed to the
    end of a line which may continue).
2. `indent` - While it may take some getting used to, 2 spaces does allow more
    in one's field of vision. However, changed to use `outerIIFEBody` for
    avoiding indents with the IIFE body, as this often minimizes indent level
    for much or all of the whole file.
3. `object-property-newline` - Properties on the same line can be very
    convenient, including stacking for space to avoid max length (though
    without stacking the height too high).
4. *`one-var`* - While I normally favor enforcing conventions, this one seems
    to me to be of little consequence. It also prevents grouping like
    items together. I might favor an option to require separate lines for
    variable declarations, but for uninitialized ones, adding to the same
    line is convenient, especially for single-letter variables. I would
    like a rule to have declarations as close as possible to being just
    above any used scopes (for `let` and `const`).
5. `object-curly-spacing` - Not sure why `standard` switched from the default
    here.
6. `quotes` - `avoidEscape` is too reasonable to avoid ugliness;
    `allowTemplateLiterals` is useful to begin a pattern that may expend to
    allow other quotes or dynamic variables.
7. `object-curly-newline` - Doesn't allow `let f = {foo () {
    dosomething();
}};`
8. `lines-between-class-members` - Don't feel any need for it

## Rationale for changing required rules' configuration away from ESLint defaults

While these are not part of `standard` or `eslint-recommended`, I've noted
here why we have deviated from the defaults set by ESLint for those applying
the rule.

- `array-bracket-newline` - Switched to "consistent" over "always" as
    sometimes nice to be a little condensed, especially when representing
    HTML as JSON within Jamilih (or JsonML) templates.
- `function-paren-newline` - The default multiline can get too long whereas
    "consistent" can be clean and short.
- `multiline-ternary` - Inline ternary can be very readable when not
    spanning lines
- `no-empty` - Empty catches occur frequently enough to justify
  `allowEmptyCatch`
- `no-mixed-requires` - Grouping is more organized, while calls are
    compellingly convenient
- `no-warning-comments` - As per `great-eye` discussion of this rule,
  to-dos can be useful, but we nevertheless include the rule with `terms`
  set to `fixme` and `xxx` so we reject these other forms of `todo`. To
  also reject `todo`, see `great-eye`.
- `no-restricted-globals` - Use example defaults for `event` (and
    `fdescribe`) as convenient
- `no-restricted-properties` - Use example default of restricting
    `__defineGetter__` in favor of `Object.defineProperty` as convenient
- `no-restricted-syntax` - Set to eliminate any use of `instanceof`
    (as it is not cross-frame safe, except if using `Symbol.hasInstance`)
- `no-shadow` - It is better practice not to confuse by using globals! I
    didn't feel the examples for allowing necessitated their use.
    I added `"parent"`, `"top"`, `"open"`, `"close"`, `"stop"`, `"blur"`,
    `"status"`, `"name"`, `"closed"`, and `"start"` to `allow` as frequent
    local variables technically shadowing globals (`start` for QUnit env).
- `object-shorthand` - Enabling `avoidExplicitReturnArrows` as methods
    without `this` that this rule grabs (which have their own meaning with
    arrow functions) are more succinctly expressed in shorthand, and
    shorthand also conduces better to events where `this` refers to the
    element (unless one needs the outer scope `this`). The option
    `avoidExplicitReturnArrows` does not avoid if the functions have
    `this` (though this isn't currently documented); this is probably
    good, though use of `this` may signal an error if within a method
- `prefer-destructuring` - Did not set array to true due to its problems
    with direct access of large numbers (requiring many commas) and
    non-iterable ‘array-like’ objects.
- `quote-props` - Changed to "as-needed" as properties more verbose and
    uglier with quoting
- `radix` - We're only dealing with ES5+ environments, so the radix is
    redundant for base 10.
- `import/order` - Enforcing "builtin", "external", "internal" and then
  ["parent", "sibling", "index"] in any order as these may be
  project-specific.

### Rationale for not including some rules

The following rules are not included within `eslint:recommended` or `standard`,
nor have we chosen to include them in any of the `ash-nazg` rules.

Note: italicized items refer to features I might enable if the described
option could become available (or upon further review). I might also tweak
some `standard` rules further which I have not had time to examine (but
it would probably be toward the stricter rather than looser as I have been
happy with it thus far).

- *`array-element-newline`* - While the "consistent" option would be nice,
    it doesn't work well to keep up with a max width and the desire to avoid
    excessive height `[\n a, b, \n c, d\n]`
- `arrow-body-style` - With `as-needed` and `requireReturnForObjectLiteral`,
    this seems reasonable, but too often in debugging, one needs to add
    brackets to do any logging.
- *`func-names`* - Too prohibitive, though if applied to methods only, it may
    be useful (though with object shorthand, less necessary)
- `func-style` - Declarations are simpler so appealing also. If enabling,
    would also want `allowArrowFunctions`.
- `id-blacklist` - Can be helpful but a little tyrannical
- `id-length` - Can be helpful (especially a minimum) but a little tyrannical
- `id-match` - Too project-specific
- `init-declarations` - Nice with "always" and `ignoreForLoopInit`, but
    cumbersome and seemingly wasteful at times
- `line-comment-position` - Too inflexible to enforce either way
- `lines-around-comment` - Irksome to me
- `max-classes-per-file` - A bit tyrannical
- `max-depth` - Sounds good but tyrannical
- `max-lines-per-function` - A bit tyrannical
- `max-lines` - A bit tyrannical
- `max-params` - Can be troublesome when one is forced to abide by some API
- `multiline-comment-style` - Would be nice if allowed multiline
  "starred-block" OR "bare-block" given some one may wish as JSDoc-style
  and others not
- `newline-after-var` - Not very flexible (deprecated)
- `newline-before-return` - Not very flexible (deprecated)
- `newline-per-chained-call` - Not flexible in practice
- `no-continue` - Can be convenient
- `no-inline-comments` - Can be faster and more succint
- `no-invalid-this` - Sounds good but not useful for element event
  handlers/jQuery
- `no-multi-assign` - Sounds good, but can be burdensome
- `no-negated-condition` - Is generally simpler, but it can be annoying
    if one wishes to get a much smaller condition body visible at the top.
- `no-nested-ternary` - Nested ternaries can be helpful to avoid clutter of
    duplicated assignment code
- `no-param-reassign` - Can be helpful, but not convenient, including when
    making defaults against more than `undefined` (e.g., `null`)
- `no-restricted-imports` - Project-specific
- `no-restricted-modules` - Project-specific
- `no-ternary` - Not useful
- `no-undefined` - `undefined` is ok for ES6 modules and strict code, so using
    `no-global-assign` and `no-shadow-restricted-names` instead
- `no-underscore-dangle` - Too restrictive
- `no-useless-concat` - Too restrictive when one has certain formatting one
    wishes to draw out
- `one-var-declaration-per-line` - Sounds good, but too cumbersome for small
  integer or boolean inits, and the indented next lines are not as
  immediately clear that they belong to the declaration.
- *`padding-line-between-statements`* - Might revisit
- `prefer-arrow-callback` - Not compelling
- `prefer-template` - Sounds good, but too cumbersome in practice
- `require-atomic-updates` - Many false positives
- *`sort-imports`* - Would be useful with "warn" if could sort by
  multiple/single type and sort members while avoiding alphabetical
  sorting across imports which seems too rigid
- `sort-keys` - Too cumbersome
- `sort-vars` - Too cumbersome

#### Rationale for disabled import rules

- `import/no-restricted-paths` - Project-specific
- `import/no-internal-modules` - Don't see any advantage
- `import/no-cycle` - Don't see a problem with cyclic imports in ESM
- `import/no-nodejs-modules` - Useful for some projects, but not all
  including even client-side (though does offer `allow` option)
- `import/exports-last` - Has some reason for being, but nicer to see
  with declaration that the object is being exported. To find all, just
  search for "export"
- `import/no-namespace` - While can be more efficient to import only what
  one needs, having a namespace can also avoid confusion.
- `import/prefer-default-export` - Could even be a bad practice as
  ugly to import with non-defaults added later
- `import/no-default-export` - Has some basis, but defaults are admittedly
  convenient. Let's not be so opinionated.
- `import/no-named-export` - Could even be a bad practice as
  ugly to import with non-defaults added later
- `import/no-relative-parent-imports` - Appealing in some ways, but too rigid
  for a broad standard
- *`import/dynamic-import-chunkname`* - Might revisit for warnings, but
  probably too specific for a broad standard
- `import/max-dependencies` - Too constraining
- `import/no-unassigned-import` - Could be useful with `allow` option,
  but that would be project-specific, and unassigned imports are needed
  for polyfills
- `import/group-exports` - Too rigid as with `exports-last`.

#### Rationale for disabled Node and Promise rules

`no-process-exit` (added by Node recommended) - has a version in Unicorn
which allows in CLI apps.

`node/global-require` - Redundant with `import/no-dynamic-require`

`node/prefer-promises/dns` and `node/prefer-promises/fs` are good, but
a bit early with Node 12.

`node/no-restricted-import` - project-specific

`node/no-restricted-require` - project-specific

`promise/no-native` is disabled as promises are essential--even, it
appears, to Dark Lords.

`promise/param-names` can be too tyrannical in some cases.

`promise/no-nesting` - can be useful to nest sometimes

`promise/no-promise-in-callback` - May be difficult to apply (Note: Is disabled in `index.js` but enabled in `sauron.js`)

`promise/no-callback-in-promise` - May be difficult to apply (Note: Is disabled in `index.js` but enabled in `sauron.js`)

`promise/avoid-new` - Can be useful or even necessary for APIs missing Promise version (Note: Is disabled in `index.js` but enabled in `sauron.js`; could use `promisify`)

`promise/no-return-in-finally` - (Note: Is disabled in `index.js` but enabled in `sauron.js`)

`promise/valid-params` - (Note: Is disabled in `index.js` but enabled in `sauron.js`)

#### Rationale for suppressing some `eslint-plugin-jsdoc` rules

- `jsdoc/check-line-alignment` - More desirable default not yet implemented
- `jsdoc/no-types` - Types have utility in jsdoc unless using TypeScript
- `jsdoc/newline-after-description` (recommended) - I can see its draw,
    but seems too pedantic to me for documentation.
- `jsdoc/no-defaults` - Haven't transitioned to TypeScript
- `jsdoc/no-undefined-types` (recommended) - I'd like something like this,
    but since it [isn't aware](https://github.com/gajus/eslint-plugin-jsdoc/issues/99)
    of all of one's `@typedef`s, etc., it is too restrictive for me at this
    time.
- `jsdoc/require-description-complete-sentence` seems like a good idea, as
    English mistakes can be jarring as with bad styling, but this didn't
    seem to work too well. I use `jsdoc/match-description` with a special
    value to capture a subset of this.
- `jsdoc/require-hyphen-before-param-description` - I can see its draw,
    but seems too pedantic to me for documentation.

### Rationale for disabling some `unicorn` rules

(The following are recommended rules unless otherwise noted.)

- `catch-error-name` - It can actually be useful to use different
    error names to indicate what type of error may be expected.
- `consistent-destructuring` - In practice can be cumbersome
- `consistent-function-scoping` - Though this can be useful, and it
  shouldn't be difficult to manually hoist functions upward, besides taking
  some time to refactor, this often removes functions from a logical
  grouping, and may even increase bugs, as one may be tempted to move out
  a function whose dependency is no longer wrapped with it.
- `empty-brace-spaces` - Easier to build on and cleaner if allowing newlines
- `explicit-length-check` - Seems wasteful.
- *`filename-case`* - Looks potentially useful with `camelCase`.
- `import-index` - While understandable, seems may cause more trouble in
    making it harder to find references to `index`.
- `import-style` - Using `eslint-plugin-import` instead
- `no-array-reduce` - Though I can see some appeal to this (and `reduce` also
    suffers from not being able to short-circuit), I like it for object
    property accumulation, conditional array accumulation that can later be
    flattened, etc. It also seems superfluous to add an extra `join` with
    string concatenation.
- `no-array-for-each` - Writing code for `forEach` allows later refactoring,
    e.g., to move out of the block.
- `no-instanceof-array` - Covered by our blocking of all `instanceof`
- `no-keyword-prefix` - See no need.
- `no-lonely-if` - Nested ifs can be useful to catch and ignore.
- `no-nested-ternary` - As with eslint's `no-nested-ternary`
- `no-null` - A good idea, but besides use of `null` in JSON, and semantic
    arguments in favor (having an explicit, intentional empty value),
    it makes for cleaner, quicker to understand code.
- `no-unreadable-array-destructuring` - Better to use this than multiple lines
- `no-unused-properties` - While no doubt useful, it won't catch all cases,
    sounds computationally expensive, and may better be done with TypeScript
- `no-useless-undefined` - I don't like the consequence of changing
    `array-callback-return` to `allowImplicit`, and it can make clear that
    use of `undefined` is deliberate.
- `prefer-array-flat-map` - Present in `array-func`
- `prefer-exponentiation` - Now present in eslint core
- `prefer-optional-catch-binding` - Understandable rule, but extra work if
    refactoring to add later, and the catch binding can also force
    documentation of the error's purpose
- `prefer-string-slice` - Added to Sauron but can be cumbersome to change for
  old projects
- `prefer-string-replace-all` - Good but not available yet in Node (even 14)
- `regex-shorthand` - Was renamed to `better-regex`.
- `string-content` - Don't want the trouble of requiring formatted apostrophes (not recommended anyways).
- `throw-new-error` - Potentially confining.

### Rationale for altering default on Unicorn rules

- `better-regex` - Character classes can be arranged for readability.

### Rationale for including some Unicorn rules which are disabled in `plugin:unicorn/recommended`

- `unicorn/custom-error-definition` - Does not seem confining.
- `unicorn/no-unsafe-regex` - Seems like something to watch for, though
    I may revisit if this reports too many common expressions.

### Rationale for including eslint-comments rules which are not in `plugin:eslint-comments/recommended`

- `eslint-comments/no-unused-disable` - Might be indicative of an error
    and inefficient in any case

### Rationale for changing eslint-comments rules from default recommended

`eslint-comments/disable-enable-pair` - If at top, behavior is clear, and
    no need to reenable within doc

### Rationale for not including some `eslint-comments` rules

- `eslint-comments/no-restricted-disable` - See no need
- `eslint-comments/no-use` - See no need

### Rationale for not including some `plugin:@brettz9/es6` rules

- `@brettz9/arrow-parens` - Covered by other rules
- `@brettz9/no-instanceof-array` - Covered by our blocking of all
    `instanceof`
- `@brettz9/no-instanceof-wrapper` - Covered by our blocking of all
    `instanceof`
- `@brettz9/prefer-for-of` - I prefer array extras for easier reuse,
    currying, etc. than `for-of`
- `@brettz9/no-use-ignored-vars` - Relies on a regex (for pseudo-privates)
    which can be useful

### Rationale for not including some `array-func` rules

- `array-func/prefer-array-from` - While it may benefit performance, it is
    more sleek to use the spread operator. Would like to know how much it
    impacts performance before enabling.

### Rationale for not including some `radar` rules

(All radar rules are currently "recommended" rules as well.)

- `max-switch-cases` - Sounds too arbitrary.
- `no-collapsible-if` - Sometimes more logically clear or made in preparation
  for future expansion
- `no-duplicate-string` - Often used in test files and repeated in fairly
  minor instances or instances repeated but spread out within a large file
- `no-identical-functions` - Often used in test files and repeated by fairly
  minor functions or functions repeated but spread out within a large file
- `no-small-switch` - Too useful to start a pattern to which one intends to add later.
- `prefer-immediate-return` - Can be useful for documenting even if method name
    should be descriptive, especially if there are different returns with subtly
    different results

### Rationale for including eslint-plugin-jsdoc rules which are not in `plugin:jsdoc/recommended`

- `check-examples` - If examples are present, they ought to follow one's standards,
  including if overrides are in place to loosen/tighten. Set to match any Markdown
  rules (`.md` extension) by default and excludes any example beginning with a
  backtick.
- `check-syntax` - Following jsdoc, not Closure syntax
- `match-description` - Cleaner to see complete sentences which its default allows.
- `no-bad-blocks` - Useful to catch blocks likely intended as jsdoc
- `require-returns-check` - If the return value doesn't match, there may be a problem.
- `require-file-overview` - Don't need `@file` in every file.

### Rationale for only including some rules within `ash-nazg/sauron`

These are good practices, but cumbersome, not as familiar to developers,
prohibitive during ongoing debugging or conversion of existing projects, etc.
But perhaps useful for a new project which can pay closer attention to
standards without the undue burden of having to refactor lots of code (which
may not all be under one's control).

- `class-methods-use-this` - Good for new code (though even here may need
    disabling). May break existing APIs.
- `consistent-this` - A good practice, but sometimes, especially with jQuery
    or DOM event handlers, and large functions where it can be difficult to
    track what a generic `that` is in reference to, `this` may be more clearly
    named as the object
- `default-case` - Refactoring code to know whether to throw or silently
    ignore requires time.
- `max-len` - May require a lot of refactoring.
- `no-alert` - No quick easy replacement yet with poor `dialog` support.
- `no-console` - Useful for debugging (and sometimes for reporting progress)
    to have to disable it at every turn and to distract one from actual errors,
    even for production.
- `no-empty-function` - Cumbersome to add comments within every no-op.
- `no-shadow` - Can catch errors, but also some work to refactor (See also
    section "Rationale for changing required rules' configuration away
    from defaults".)
- `prefer-numeric-literals` - Good but some work.
- `require-unicode-regexp` - Good, but some work to fix all.
- `vars-on-top` - Not needed for `let`/`const`, and if overriding, this is
    cumbersome, despite being useful
- `import/unambiguous` - A good practice, and one which `overrides` can
    override (e.g., for polyfills or simple HTML tests), but cumbersome
    to label all files
- `promise/prefer-await-to-callbacks` - Sometimes useful, but callbacks
    may be used within repeating events
- `unicorn/no-array-callback-reference` - May be cumbersome though does
    catch potential problems
- `unicorn/prefer-number-properties` - Good but some refactoring needed (and not
    always readily fixable).
- `jsdoc/require-returns` (recommended) - Put in `ash-nazg/sauron` as
    it is more than just a consistent styling convention, and it is
    not impossible to follow, but a bit difficult. Added `forceRequireReturn`
    option to ensure return type considered even if `void`/`undefined`
    and added `contexts: ['any']` so it checks virtual functions
    (e.g., with `@implements`).
- `jsdoc/require-jsdoc` (recommended) - Imposes a heavy burden on
    preexisting large projects (added as "error" in `great-eye.js`);
    we have expanded its options there though to check on `ClassDeclaration`,
    `ClassExpression`, and `MethodDefinition` in addition to
    `FunctionDeclaration`. This may still `FunctionExpression` and
    `ArrowFunctionExpression`, and these may admittedly be used on such as
    exports, but until the context option discussed at
    <https://github.com/gajus/eslint-plugin-jsdoc/issues/384> may be fixed,
    that may be too oppressive to impose.
- `jsdoc/require-param-name` (recommended): Expanded this to
  `contexts: ['any']`; see description for `jsdoc/require-jsdoc`.
- `jsdoc/require-param-type` (recommended): Expanded this to
  `contexts: ['any']`; see description for `jsdoc/require-jsdoc`.
- `jsdoc/require-returns-type` (recommended): Expanded this to
  `contexts: ['any']`; see description for `jsdoc/require-jsdoc`.
- `jsdoc/implements-on-classes` - Added with `contexts: ['any']`;
    see description for `jsdoc/require-jsdoc`. Better to be
    TypeScript-compatible.

The `forceRequireReturn` setting was also applied therein as it may be
cumbersome to add to all returns or not favored as a requirement in
all projects though it does note that a method's return was considered
even if `undefined`.

The `preferredTypes` setting was enabled here as it can be cumbersome
for projects to specify all child types.

### Rationale for only including some rules within `ash-nazg/great-eye`

- `capitalized-comments` - May be very prevalent; reports with commented
    out code
- `complexity` - A generally good practice, but can be work to refactor,
    and sometimes impractical to enforce.
- *`max-statements-per-line`* - Tyrannical when prohibiting single-line
  `if (...) { continue; }`; might revisit if allowed for control statements
- `max-statements` - A bit tyrannical even if good for clear code
- `no-magic-numbers` - Very helpful for clear code, but cumbersome,
    and sometimes very cumbersome.
- *`no-plusplus`* - Would be nice if there were an option to allow if not
    combined inline with other expressions
- `no-warning-comments` (with default value on `terms` option blocking
  "todo") - Good to catch to-dos, but better to search or
  parse code as a separate process rather than polluting one's ESLint
  warnings--some to-dos are ok to be left for the long term
- `import/no-unused-modules` - Useful (for `missingExports` at least),
  but doesn't catch dynamic imports and reports for other deliberately
  non-modular scripts
- `jsdoc/check-alignment` (recommended) - A pretty good practice, but not
    that important.
- `jsdoc/check-indentation` - A pretty good practice, but that that important.
- `jsdoc/require-description` - Though a very good practices, this is
    difficult for large code bases to implement and even cumbersome
    for new ones to have to follow for lesser parameters, so that's
    why they are not even in `ash-nazg/sauron`, though if you feel
    you can succeed at imposing such rigor for your hordes of
    developer minions, by all means, have a hand at it...
- `jsdoc/require-param-description` (recommended) - See
  `jsdoc/require-description`.
- `jsdoc/require-returns-description` (recommended) - See
  `jsdoc/require-description`.
- `jsdoc/require-property-description` (recommended) - See
  `jsdoc/require-description`.
- `jsdoc/require-example` - See `jsdoc/require-description`.
- `radar/cognitive-complexity` - As with `complexity` perhaps (though may
    add to sauron if demonstrates not to be too oppressive)
- `unicorn/numeric-separators-style` - Good but may involve many changes.
- `unicorn/prevent-abbreviations` - Very cumbersome for frequent conventions such
  as `e` for `event`
- `unicorn/prefer-set-has` - Very good, but troublesome to refactor.

The `preferredTypes` setting was enabled here for integer/float as it can
be cumbersome for projects to distinguish and because `Promise` even
subclassed doesn't indicate the rejector type.

## Rationale for including rules that might not seem necessary

- `no-implicit-globals` - Included despite not applying to modules, in
    case overriding.
- `strict` -  Included despite not being needed for modules, in
    case overriding.

## Rationale for not including some non-recommended eslint rules

- `no-return-await` - As per [this issue](https://github.com/standard/standard/issues/1442),
  it causes problems with stack traces and fails to flag function return as
  async (particularly in conjunction with `require-await` which effectively
  enforces not using `async` on such functions either).
- (This section is incomplete)

## Deprecated rule non-inclusion

[Deprecated and removed items](https://eslint.org/docs/rules/) from ESLint
are also naturally not included.

## Contributing

While I will admit to being opinionated, and one may need to disable some
rules (or possibly add a few ones mentioned in my non-inclusion sections),
feel free to file issues if you really feel there are compelling reasons
for different defaults. But again, I have to add caution that ring bearers
can be picky about giving up their *preh-shus*...

## To-dos

- Waiting: Add [eslint-plugin-no-constructor-bind](https://github.com/markalfred/eslint-plugin-no-constructor-bind)
    when class properties start landing
- Add own rules:
    1. [tweak for `no-new-object`](https://github.com/eslint/eslint/issues/11810)
    1. [allow npm_config_* with `no-process-env`](https://github.com/eslint/eslint/issues/11808)
    1. [to-do query tool/extractor](https://github.com/sindresorhus/eslint-plugin-unicorn/issues/238#issuecomment-506917348)
- Review <https://github.com/dustinspecker/awesome-eslint#practices>
- See if <https://github.com/sarbbottam/eslint-find-rules> may eliminate
  need for our comparison code
- Rule for no functions with `this` (to use `class`)? Might adapt <https://github.com/matijs/eslint-plugin-this>?
- To consider:
    - <https://yeonjuan.github.io/html-eslint> Lint HTML itself
    - <https://github.com/ota-meshi/eslint-plugin-regexp>
    - <https://github.com/BrainMaestro/eslint-plugin-optimize-regex> (Catches basic errors like `/{/u` and `/(/` too)
    - <https://github.com/ota-meshi/eslint-plugin-jsonc>
    - <https://www.npmjs.com/package/eslint-plugin-const-case>
    - <https://github.com/johnstonbl01/eslint-no-inferred-method-name> / <https://github.com/johnstonbl01/eslint-no-inferred-method-name/blob/master/docs/rules/no-inferred-method-name.md>
    - <https://github.com/getify/eslint-plugin-proper-arrows>
    - <https://github.com/selaux/eslint-plugin-filenames>
- See also `eslint-plugin-privileges` for plugins/config to add for security/transparency
- Make plugins/tool config/toolkit?
    - <https://github.com/not-an-aardvark/eslint-plugin-eslint-plugin>
    - <https://github.com/j-f1/eslint-docs>
    - <https://github.com/jfmengels/eslint-rule-documentation>
    - <https://github.com/sarbbottam/eslint-find-rules>
    - <https://github.com/pimlie/eslint-multiplexer>
    - <https://github.com/wagerfield/eslint-index>
    - <https://github.com/nickdeis/eslint-plugin-notice>
    - <https://github.com/eslint/generator-eslint> (global install of `yo` also)
    - Note `eslint --print-config file` for getting at applied config for a file
