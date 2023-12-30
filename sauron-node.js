import node from './node.js';
import sauron from './sauron.js';

export default [...node, ...sauron, {
  rules: {
    'n/prefer-promises/dns': ['error'],
    'n/prefer-promises/fs': ['error']
  }
}];
