let prompt = require('prompt-sync')();
let distKilo = prompt('Eneter distance in Kilometer: ');
distKilo = parseFloat(distKilo);
let distMile = distKilo/1.60934;
console.log(distMile, "miles");