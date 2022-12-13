import * as nb from './number.js'
import product from './product.js'
// import {sum, round} from './number.js';  utilizando desustruturação

const x = nb.sum(3, 4);
console.log(x)

console.log(nb.exp(3, 4))
console.log(nb.round(3.2345, 2))

const obj = new product("Computador", 800.0, 10);

console.log(obj)