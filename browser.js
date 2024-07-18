/* eslint-disable jsdoc/imports-as-dependencies -- Bug */
import eslintCompat from 'eslint-plugin-compat';
// import esCompat from 'eslint-plugin-escompat'; // Todo: Waiting on https://github.com/keithamus/eslint-plugin-escompat/pull/24
// import noUnsanitized from 'eslint-plugin-no-unsanitized'; // Todo: Disable until https://github.com/mozilla/eslint-plugin-no-unsanitized/pull/239#issuecomment-2132867450

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    name: 'ash-nazg/compat/flat-recommended',
    ...eslintCompat.configs['flat/recommended']
  }
  // esCompat.configs['flat/recommended]
  // noUnsanitized.DOM,
];
