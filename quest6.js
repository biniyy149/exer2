let prompt = require('prompt-sync')();
let age = prompt('Eneter your age: ');
age = parseInt(age);
let maxRate = (220-age);
let lowRate = .65*maxRate;
let highRate = .85*maxRate;
console.log(lowRate,'is lower rate',highRate,'is higher rate');

