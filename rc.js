/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
'use strict';

const {join} = require('path');

// Could make a simpler, more generic version for own repo

module.exports = {
  overrides: [
    {
      files: [
        '**/scripts/**/*',
        '.babelrc.js',
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
      ],
      extends: [
        './rc-script.js'
      ]
    },
    {
      files: [
        '**/scripts/rollup-plugin/**/*',
        'rollup.config.js',
        '*.rollup.config.js'
      ],
      extends: [
        './rc-module.js'
      ]
    },
    {
      files: '**/*.{md,mkdn,mdown,markdown}',
      processor: 'markdown/markdown'
    },
    {
      files: '**/*.md/*.js',
      rules: {
        'n/no-missing-require': ['error', {allowModules: [
          // eslint-disable-next-line n/global-require, import/no-dynamic-require -- Meant to be flexible
          require(join(process.cwd(), 'package.json')).name
        ]}]
      }
    },
    {
      files: 'build/**',
      rules: {
        'compat/compat': 'off',
        'n/no-unpublished-import': 'off'
      }
    }
  ]
};
