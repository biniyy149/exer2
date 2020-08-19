let prompt = require('prompt-sync')();
let volumeQuart = prompt('Eneter volume in quarts: ');
volumeQuart = parseFloat(volumeQuart);
let volumeLiter = 0.94635*volumeQuart;
console.log(volumeLiter, "L");
