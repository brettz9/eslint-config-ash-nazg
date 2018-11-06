# eslint-config-standard-pp

(PROJECT NOT YET PACKAGED FOR DISTRIBUTION)

I favor the idea of using, or at least adapting, a pseudo-["standard"](https://standardjs.com/)
for [code styling](https://github.com/standard/eslint-config-standard) (though
regardless of non-necessity, semi-colons are my way to go! A handful of other
deviations below).

However, a good number of rules were missing from ESLint, so `standard-pp`
aims to offer defaults on these where beneficial for catching errors and bad
practices and hard-to-read patterns (or lack of pattern).

(I'd also like to list all missing rules in source for a frame of
reference for purely styling rules, even if I disable them here.)

## Strict config

The strict config indicates generally good practice but is less likely to be
due to an error and may possibly also require an undue amount of refactoring.

## Deprecated rule non-inclusion

The following deprecated items were also not included:

- `indent-legacy`
- `lines-around-directive`
- `no-catch-shadow`
- `no-native-reassign`
- `prefer-reflect`

## Rationale for disabled rules

Note: asterisked items refer to features I might enable if the described
option could become available (or upon further review). I might also tweak
some "standard" rules further which I have not had time to examine (but
it would probably be toward the stricter rather than looser as I have been
happy with it thus far).

- *`array-element-newline`* - While the "consistent" option would be nice,
    it doesn't work well to keep up with a max width and the desire to avoid
    excessive height `[\n a, b, \n c, d\n]`
- `arrow-body-style` - With `as-needed` and `requireReturnForObjectLiteral`
    seems reasonable, but too often in debugging, one needs to add brackets
    to do any logging.
- *`func-names`* - Too prohibitive, though if applied to methods only, it may
  be useful (though with object shorthand, less necessary)
- `func-style` - Declarations are simpler so appealing also. If enabling, would
    also want `allowArrowFunctions`.
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
- `multiline-comment-style` - Would be nice if allowed multiline "starred-block"
    OR "bare-block" given some one may wish as JSDoc-style and others not
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
- *`padding-line-between-statements`* - Might revisit
- `prefer-arrow-callback` - Not compelling
- `prefer-template` - Sounds good, but too cumbersome in practice
- *`sort-imports`* - Would be useful with "warn" if could sort by
  multiple/single type and sort members while avoiding alphabetical
  sorting across imports which seems too rigid
- `sort-keys` - Too cumbersome
- `sort-vars` - Too cumbersome

### Rationale for disabled import rules

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

# Rationale for warnings

These are good practices, but cumbersome, not as familiar to developers,
prohibitive during ongoing debugging or conversion of existing projects, etc.
But perhaps useful for a new project which can pay closer attention to
standards without the undue burden of having to refactor lots of code (which
may not all be under one's control).

- `class-methods-use-this` -
- `complexity` -
- `default-case` - Refactoring code to know whether to throw or silently
  ignore requires time.
- `max-len` -
- `no-alert` -
- `no-console` -
- `no-empty-function` -
- `no-magic-numbers` -
- `no-warning-comments` -
- `prefer-numeric-literals` -
- `require-jsdoc` -
- `require-unicode-regexp` -
- `vars-on-top` - Not needed for `let`/`const`, and if overriding, this is
    cumbersome, despite being useful

## Rationale for included rules

- `no-implicit-globals` - Included despite not applying to modules, in
    case overriding.
- `object-shorthand` - The option `avoidExplicitReturnArrows` does
    not avoid if the functions have `this` (though doesn't currently
    document); this is probably good, though use of `this` may signal
    an error if within a method
- `strict` -  Included despite not being needed for modules, in
    case overriding.

## Rationale for changing required rules' configuration away from defaults

- `function-paren-newline` - The default multiline can get too long whereas
    "consistent" can be clean and short.
- `multiline-ternary` - Inline ternary can be very readable when not
    spanning lines
- `no-empty` - Empty catches occur frequently enough to justify
- `no-mixed-requires` - Grouping is more organized, while calls are
    compellingly convenient
- `no-restricted-globals` - Use example defaults for `event` (and
    `fdescribe`) as convenient
- `no-restricted-properties` - Use example default of restricting
    `__defineGetter__` in favor of `Object.defineProperty` as convenient
- `no-shadow` - It is better practice not to confuse by using globals! I
    didn't feel the examples for allowing necessitated their use
- `object-shorthand` - Enabling `avoidExplicitReturnArrows` as methods
    without `this` that this rule grabs (which have their own meaning with
    arrow functions) are more succinctly expressed in shorthand, and
    shorthand also conduces better to events where `this` refers to the
    element (unless one needs the outer scope `this`).
- `prefer-destructuring` - Did not set array to true due to its problems
    with direct access of large numbers (requiring many commas) and
    non-iterable ‘array-like’ objects.
- `quote-props` - Changed to "as-needed" as properties more verbose and
    uglier with quoting
- `valid-jsdoc` - The specific rules adopted add more checking.
- `import/order` - Enforcing "builtin", "external", "internal" and then
  ["parent", "sibling", "index"] in any order as these may be
  project-specific.

## Rationale for adding JSDoc rules

JSDoc, when in use, is, in my view, generally best updated during development.

## Rationale for overriding "standard" rules

- `semi` - Even if not strictly required, semi-colons are conventional in
    JavaScript and help denote the end of statements (as opposed to the
    end of a line which may continue)
- `indent` - While it may take some getting used to, 2 spaces does allow more
    in one's field of vision. However, changed to use `outerIIFEBody` for
    avoiding indents with the IIFE body, as this often minimizes indent level
    for much or all of the whole file.
- `object-property-newline` - Properties on the same line can be very
    convenient, including stacking for space to avoid max length (though
    without stacking the height too high).
- *`one-var`* - While I normally favor enforcing conventions, this one seems
    to me to be of little consequence. It also prevents grouping like
    items together. I might favor an option to require separate lines for
    variable declarations, but for uninitialized ones, adding to the same
    line is convenient, especially for single-letter variables. I would
    like a rule to have declarations as close as possible to being just
    above any used scopes (for `let` and `const`).
- `object-curly-spacing` - Not sure why "standard" switched from the default
    here.

## Rationale for suppressing some jsdoc plugin rules

- TO-DO

## To-dos

1. Remove items duplicating eslint:recommended
