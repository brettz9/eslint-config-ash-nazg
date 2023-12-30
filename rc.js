import {readFileSync} from 'fs';
import rcScript from './rc-script.js';
import rcModule from './rc-module.js';

export default [{
  ...rcScript,
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
  ]
},
{
  ...rcModule,
  files: [
    '**/scripts/rollup-plugin/**/*',
    'rollup.config.js',
    '*.rollup.config.js'
  ]
},
{
  files: ['**/*.{md,mkdn,mdown,markdown}'],
  processor: 'markdown/markdown'
},
{
  files: ['**/*.md/*.js'],
  rules: {
    'n/no-missing-require': ['error', {allowModules: [
      // eslint-disable-next-line n/global-require, import/no-dynamic-require -- Meant to be flexible
      JSON.parse(readFileSync('package.json')).name
    ]}]
  }
},
{
  files: ['build/**'],
  rules: {
    'compat/compat': 'off',
    'n/no-unpublished-import': 'off'
  }
}];
