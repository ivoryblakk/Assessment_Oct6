// your module code should satisfy this script

var module = require('./moduleSide');

for (var i = 0; i < 5; i++) {
  module.push(i);
}
// args - 1
// return - undefined
// behavior: the push method will take an argument and push to data

console.log('------- should print [0, 1, 2, 3, 4] --------');
console.log(module.data);

var spliced = module.splice(2);
console.log('------- should print [3, 4] --------');
// arg - 1
//return - undifined
// behavior: it will show the last 2 digits of the array
console.log(spliced);
console.log('------- should print [0, 1, 2, 3] --------');
console.log(module.pop());
//arg - 0
//behavior will remove the last index of the array
console.log('------- should print [] --------');
console.log(module.clear());

for (var i = 0; i < 5; i++) {
  module.push(i);
}
console.log('------- should print [0, 1, 2, 3, 4] --------');
console.log(module.getData());
console.log('------- should print [3] --------');
console.log(module.splice(2, 1)); // -> [3]
