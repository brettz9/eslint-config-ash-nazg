import sauronNodeScript from './sauron-node-script.js';
import rc from './rc.js';
import mocha from './mocha.js';

export default [...sauronNodeScript, ...rc, ...mocha];
