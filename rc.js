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
        '.ncurc.js',
        '.3rdparty-eslintrc.js',
        '**/jsdoc-config.js',
        'webpack.config.js',
        '**/.vuepress/config.js',
        '*.webpack.config.js'
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
        'node/no-missing-require': ['error', {allowModules: [
          // eslint-disable-next-line node/global-require, import/no-dynamic-require -- Meant to be flexible
          require(join(
            typeof atom === undefined
              ? process.cwd()
              : atom?.workspace?.getCenter()?.paneContainer?.activePane?.activeItem?.getDirectoryPath() || process.cwd(),
            'package.json'
          )).name
        ]}]
      }
    },
    {
      files: 'build/**',
      rules: {
        'compat/compat': 'off',
        'node/no-unpublished-import': 'off'
      }
    }
  ]
};
