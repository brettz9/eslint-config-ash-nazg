# eslint-config-ash-nazg

A ruthless--though not arbitrary--degree of control for your kingdom!

**[One ring](https://en.wikipedia.org/wiki/One_Ring) to
rule them all!**

## The rules

See <https://eslint.org/docs/rules/> (or search for "error" within <https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js>)
for the `eslint:recommended` rules we
inherit (though see below for our two modifications to these).

See <https://github.com/standard/eslint-config-standard/blob/master/eslintrc.json>
for the `standard` rules we inherit (though see below for our handful of
modifications).

See [index.js](./index.js) (and [node.js](./node.js) for `ash-nazg/node`
rules) for the rules we explicitly include (and see
[sauron.js](./sauron.js) for the even stricter `ash-nazg/sauron` rules).

(See [explicitly-unused.js](./explicitly-unused.js) for the core and extended
rules we don't include (rationale for non-inclusion below).)

See [eslint-plugin-no-use-extend-native](https://github.com/dustinspecker/eslint-plugin-no-use-extend-native) for one added rule.

See [Recommended Unicorn rules](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/index.js#L20-L53)
for other rules (though with a few items disabled and enabled as per below).

## Other bundled configs

The `ash-nazg/node` config expands upon the regular `ash-nazg` rules to
add rules specific to Node environments.

The `ash-nazg/sauron` config expands upon the regular `ash-nazg` rules to
indicate what are generally best practices but are less likely to be due to
an error and may possibly also require a high (and possibly tyrannical)
degree of refactoring for existing projects. See below for the rationales
for inclusion.

The `ash-nazg/sauron-node` config incorporates both `ash-nazg/node` and
`ash-nazg/sauron`. It currently adds no specific rules of its own (in the
future, it may add Node-specific rules which may be unduly strict for
`ash-nazg/node`).

## Comparison to other "standards"

`eslint-config-ash-nazg` is a collection of some excellent preexisting
rules other projects have created, curated with the intent of attaining
productive strictness.

["standard"](https://standardjs.com/) ([config](https://github.com/standard/eslint-config-standard)) and `eslint:recommended` have brought a welcome degree of
pseudo-standardization for code styling and error checking.

However, they do not impose as high of a degree of control as one may
find desirable to enforce common, sane styling practices, catch bad
practices and hard-to-read patterns, or in some cases even catch errors.

Moreover, `standard` enforces a few styling rules which are contrary to
regular JavaScript practice (e.g., its enforced absence of semi-colons).

`ash-nazg` aims to offer defaults which adhere to norms, build upon
productive restrictions, and in a few cases, offer greater latitude
where some constraints are unduly confining.

## Rationales for inclusion of dependent plug-ins

Besides incorporating more from ESLint core, we also add rules from
a few other (peer) dependencies.

Besides being peer dependencies of `standard`, `eslint-plugin-promise`
and `eslint-plugin-import` have some additional useful rules we apply.

The list of browsers to support is not added in our use of
`eslint-plugin-compat`, but it is a basic enough of a need to remind one
of its need to be present (and to avoid needing to add the rule for it).

`eslint-plugin-jsdoc` provides a number of helpful rules for catching
bad or incomplete JSDoc during development. Note that we do not impose
`require-jsdoc` except as a warning in `ash-nazg/sauron` mode, so
`valid-jsdoc` and all of the `eslint-plugin-jsdoc` rules only apply for
when JSDoc is used. We also avoid some of `eslint-plugin-jsdoc` stricter
checking requirements for descriptions.

Another basic use case is ensuring code snippets are linted, which is
why `eslint-plugin-markdown` is expected. You may find its discussion of
`overrides` helpful for tweaking rules for Markdown (and you may also wish
to use `overrides`, for the `eslint-plugin-jsdoc` rule `check-examples` if
you wish to lint your JSDoc examples according to different standards).

## Deviations

### Deviation from `eslint:recommended`

In comparison to `eslint:recommended`, ash-nazg only *adds* restrictions with
the exceptions of:

1. Loosening the requirement of `no-console` into a mere warning and only in
  the stricter "sauron" configuration. This is for the reason that console
  logging is too useful for debugging (and sometimes for reporting progress)
  to have to disable it at every turn and to distract one from actual errors.
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

## Rationale for changing required rules' configuration away from ESLint defaults

While these are not part of `standard` or `eslint-recommended`, I've noted
here why we have deviated from the defaults set by ESLint for those applying
the rule.

- `function-paren-newline` - The default multiline can get too long whereas
    "consistent" can be clean and short.
- `multiline-ternary` - Inline ternary can be very readable when not
    spanning lines
- `no-empty` - Empty catches occur frequently enough to justify
  `allowEmptyCatch`
- `no-mixed-requires` - Grouping is more organized, while calls are
    compellingly convenient
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
- `valid-jsdoc` - The specific rules adopted add more checking.
- `import/order` - Enforcing "builtin", "external", "internal" and then
  ["parent", "sibling", "index"] in any order as these may be
  project-specific.

### Rationale for not including some rules

The following rules are not included within `eslint:recommended` or `standard`,
nor have we chosen to include them in any of the `ash-nazg` rules.

Note: asterisked items refer to features I might enable if the described
option could become available (or upon further review). I might also tweak
some `standard` rules further which I have not had time to examine (but
it would probably be toward the stricter rather than looser as I have been
happy with it thus far).

- *`array-bracket-newline`* - Switched to "consistent" as sometimes nice to
    be a little condensed, especially when representing HTML as JSON within
    Jamilih (or JsonML) templates.
- *`array-element-newline`* - While the "consistent" option would be nice,
    it doesn't work well to keep up with a max width and the desire to avoid
    excessive height `[\n a, b, \n c, d\n]`
- `arrow-body-style` - With `as-needed` and `requireReturnForObjectLiteral`,
    this seems reasonable, but too often in debugging, one needs to add
    brackets to do any logging.
- `radix` - We're only dealing with ES5+ environments, so the radix is
    redundant for base 10.
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
- `lines-between-class-members` - Don't feel any need for it
- `max-classes-per-file` - A bit tyrannical
- `max-depth` - Sounds good but tyrannical
- `max-lines-per-function` - A bit tyrannical
- `max-lines` - A bit tyrannical
- `max-params` - Can be troublesome when one is forced to abide by some API
- *`max-statements-per-line`* - Tyrannical when prohibiting single-line
  `if (...) { continue; }`; might revisit if allowed for control statements
- `max-statements` - A bit tyrannical
- `multiline-comment-style` - Would be nice if allowed multiline
  "starred-block" OR "bare-block" given some one may wish as JSDoc-style
  and others not
- `newline-after-var` - Not very flexible
- `newline-before-return` - Not very flexible
- `newline-per-chained-call` - Not flexible in practice
- `no-continue` - Can be convenient
- `no-invalid-this` - Sounds good but not useful for element event
  handlers/jQuery
- `no-multi-assign` - Sounds good, but can be burdensome
- `no-negated-condition` - Is generally simpler, but it can be annoying
    if one wishes to get a much smaller condition body visible at the top.
- `no-nested-ternary` - Nested ternaries can be helpful to avoid clutter of
    duplicated assignment code
- `no-param-reassign` - Can be helpful, but not convenient, including when
    making defaults against more than `undefined` (e.g., `null`)
- *`no-plusplus`* - Would be nice if there were an option to allow if not
    combined inline with other expressions
- `no-restricted-imports` - Project-specific
- `no-restricted-modules` - Project-specific
- *`no-restricted-properties`* - Might expand the list
- *`no-restricted-syntax`* - Project-specific unless some forms exist which
    should be deprecated
- `no-ternary` - Not useful
- `no-undefined` - `undefined` is ok for ES6 modules and strict code, so using
    `no-global-assign` and `no-shadow-restricted-names` instead
- `no-underscore-dangle` - Too restrictive
- `no-useless-concat` - Too restrictive when one has certain formatting one
    wishes to draw out
- *`object-curly-newline`* - Doesn't allow `let f = {foo () {
    dosomething();
}};`
- `one-var-declaration-per-line` - Sounds good, but too cumbersome for small
  integer or boolean inits, and the indented next lines are not as
  immediately clear that they belong to the declaration.
- *`padding-line-between-statements`* - Might revisit
- `prefer-arrow-callback` - Not compelling
- `prefer-template` - Sounds good, but too cumbersome in practice
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

`node/no-unpublished-import` is disabled as I'd like it to have an
option to check within `devDependencies`.

`node/no-unsupported-features/es-syntax` is disabled as I want to use
`import`/`export`in Node files, whether for polyglot source or
`babel-node` execution.

`promise/no-native` is disabled as promises are essential--even, it
appears, to Dark Lords.

#### Rationale for suppressing some `eslint-plugin-jsdoc` rules

`jsdoc/require-description-complete-sentence` seems like a good idea, as
bad English can be jarring as with bad styling, but this didn't seem to
work too well. I use `valid-jsdoc` with a special `matchDescription` to
capture this (I'm keeping `valid-jsdoc` on for now, but really need
[this issue](https://github.com/eslint/doctrine/issues/221) and [this one](https://github.com/eslint/doctrine/issues/222)
fixed for it to avoid complaining against actually valid code.)

I'd like something like `jsdoc/no-undefined-types`, but since it
[isn't aware](https://github.com/gajus/eslint-plugin-jsdoc/issues/99)
of all of one's `@typedef`s, etc., it is too restrictive for me at this time.

I can see the draw of `jsdoc/require-hyphen-before-param-description`,
and `jsdoc/newline-after-description` but seems too pedantic to me for
documentation.

While `jsdoc/require-description`, `jsdoc/require-param-description` and
`jsdoc/require-returns-description` are very good practices (as is
`jsdoc/require-example`), they are difficult for large code bases to
implement and even cumbersome for new ones to have to follow for lesser
parameters, so that's why they are not even in `ash-nazg/sauron`, though
if you feel you can succeed at imposing such rigor for your hordes of
developer minions, by all means, have a hand at it...

### Rationale for disabling some `plugin:unicorn/recommended` rules

- `catch-error-name` - It can actually be useful to use different
    error names to indicate what time of error may be expected.
- `explicit-length-check` - Seems wasteful.
- *`filename-case`* - Looks potentially useful with `camelCase`.
- `throw-new-error` - Potentially confining.
- `import-index` - While understandable, seems may cause more trouble in
    making it harder to find references to `index`.

### Rationale for including some Unicorn rules which are disabled in `plugin:unicorn/recommended`

- `unicorn/custom-error-definition` - Does not seem confining.
- `unicorn/no-unsafe-regex` - Seems like something to watch for, though
    I may revisit if this reports too many common expressions.

### Rationale for only including some rules within `ash-nazg/sauron`

These are good practices, but cumbersome, not as familiar to developers,
prohibitive during ongoing debugging or conversion of existing projects, etc.
But perhaps useful for a new project which can pay closer attention to
standards without the undue burden of having to refactor lots of code (which
may not all be under one's control).

- `capitalized-comments` - May be very prevalent
- `class-methods-use-this` - Good for new code (though even here may need
  disabling). May break existing APIs.
- `complexity` - A generally good practice, but can be work to refactor.
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
- `no-magic-numbers` - Very helpful for clear code, but cumbersome.
- `no-shadow` - Can catch errors, but also some work to refactor (See also
    section "Rationale for changing required rules' configuration away
    from defaults".)
- `no-warning-comments` - Good to catch to-dos, but better to search or
  parse code as a separate process rather than polluting one's ESLint
  warnings--some to-dos are ok to be left for the long term
- `prefer-numeric-literals` - Good but some work.
- `require-jsdoc` - Imposes a heavy burden on preexisting large projects
- `require-unicode-regexp` - Good, but some work to fix all.
- `vars-on-top` - Not needed for `let`/`const`, and if overriding, this is
    cumbersome, despite being useful
- `import/unambiguous` - A good practice, and one which `overrides` can
    override (e.g., for polyfills or simple HTML tests), but cumbersome
    to label all files
- `promise/prefer-await-to-callbacks` - Sometimes useful, but callbacks
    may be used within repeating events
- `unicorn/no-fn-reference-in-iterator` - May be cumbersome though does
    catch potential problems

## Rationale for including rules that might not seem necessary

- `no-implicit-globals` - Included despite not applying to modules, in
    case overriding.
- `strict` -  Included despite not being needed for modules, in
    case overriding.

## Deprecated rule non-inclusion

[Deprecated and removed items](https://eslint.org/docs/rules/) from ESLint
are also naturally not included.

## Contributing

While I will admit to being opinionated, and one may need to disable some
rules (or possibly add a few ones mentioned in my non-inclusion sections),
feel free to file issues if you really feel there are compelling reasons
for different defaults. But again, I have to add caution that ring bearers
can be picky about giving up their *preh-shus*...
