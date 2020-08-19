let prompt = require('prompt-sync')();
let hours = prompt('Eneter your hours: ');
let wage = prompt('Eneter your wage: ');

hours = parseFloat(hours);
wage = parseFloat(wage);
let netPay = (hours*wage)-.15*(hours*wage);
console.log('your net pay after tax is:',netPay);

