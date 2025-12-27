import overridesScript from './overrides-script.js';
import scriptNode from './script-node.js';

export default /** @type {import('eslint').Linter.Config[]} */ ([
  ...scriptNode,
  ...overridesScript
]);
