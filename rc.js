/* eslint-disable jsdoc/imports-as-dependencies -- Bug */
import {readFile} from 'fs/promises';
import globals from 'globals';
import rcScript from './rc-script.js';
import rcModule from './rc-module.js';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...rcScript.map((cfg) => {
    return {
      ...cfg,
      files: [
        '**/scripts/**/*',
        '.babelrc.js',
        'babel.config.js',
        '.eslintrc.js',
        '.eslintrc.cjs',
        '.mocharc.js',
        '.mocharc.cjs',
        '.ncurc.js',
        '.ncurc.cjs',
        '.3rdparty-eslintrc.js',
        '**/jsdoc-config.js',
        'webpack.config.js',
        '**/.vuepress/config.js',
        '*.webpack.config.js',
        'web-ext-config.js',
        'web-ext-config.cjs'
      ]
    };
  }),
  ...rcModule.map((cfg) => {
    return {
      ...cfg,
      files: [
        '**/scripts/rollup-plugin/**/*',
        'rollup.config.js',
        '*.rollup.config.js',
        'eslint.config.js'
      ]
    };
  }),
  {
    files: ['**/*.{md,mkdn,mdown,markdown}'],
    processor: 'markdown/markdown'
  },
  {
    files: ['**/*.md/*.js'],
    rules: {
      'n/no-missing-require': ['error', {allowModules: [
        // @ts-expect-error Buffer can be assigned to JSON.parse
        JSON.parse(await readFile('package.json')).name
      ]}]
    }
  },
  {
    files: ['build/**'],
    languageOptions: {
      globals: globals.node
    },
    rules: {
      'compat/compat': 'off'
    }
  }
];
