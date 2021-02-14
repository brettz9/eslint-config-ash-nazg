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
        'webpack.config.js',
        '**/.vuepress/config.js',
        '*.webpack.config.js'
      ],
      extends: [
        './sauron-node-script.js'
      ],
      rules: {
        'no-console': 'off',
        'node/no-process-env': 'off'
      }
    },
    {
      files: [
        '**/scripts/rollup-plugin/**/*',
        'rollup.config.js',
        '*.rollup.config.js'
      ],
      extends: [
        './sauron-node.js'
      ],
      rules: {
        'no-console': 'off',
        'import/no-anonymous-default-export': 'off',
        'node/no-process-env': 'off'
      }
    },
    {
      files: '*.md',
      rules: {
        'node/no-missing-require': ['error', {allowModules: [
          // eslint-disable-next-line import/no-dynamic-require -- Meant to be flexible
          require(join(process.cwd(), 'package.json')).name
        ]}]
      }
    }
  ]
};
