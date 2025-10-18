import {builtinModules} from 'node:module';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    name: 'ash-nazg/bare',
    rules: {
      'no-restricted-imports': ['error', {
        paths: [...builtinModules, ...builtinModules.map((builtinModule) => {
          return `node:${builtinModule}`;
        })]
      }]
    }
  }
];
