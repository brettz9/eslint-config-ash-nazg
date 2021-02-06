# inherited

This directory includes an auto-built listing of those rules which are
present in inherited configs (as errors or warnings) yet are not overridden
by ash-nazg.

Note that `no-use-extend-native` rules is currently empty as it is not being
directly inherited. (`html` and `markdown` currently have no rules.)

Note also that the eslint recommended rules deliberately do not include such
rules as are included within "standard" (as that is currently the main config
which we are tracking against, albeit with many additions and some changes).
The eslint recommended list does include some which "standard" has not added,
however.

The eslint "all" rules list is not actually an inherited config but includes
those inherited "standard" eslint rules which are in use but which are not
eslint recommended ones.

The files were generated using the very helpful tool,
[eslint-compare-config](https://github.com/scottnonnenberg/eslint-compare-config).

It is built with `npm run inherited` (which is also a part of `npm run compare`).

## To-dos

- Ideally, the API would allow expressing as JS/JSON as with the explicit
  rules. Filed
    https://github.com/scottnonnenberg/eslint-compare-config/issues/9
