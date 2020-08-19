let prompt = require('prompt-sync')();
let start = prompt('Eneter the begining odometer: ');
start = parseFloat(start);
let end = prompt('Enter the ending odometer: ');
end = parseFloat(end);
let gasoline = prompt('Enter the number of gasoline: ');
gasoline = parseFloat(gasoline);
let milage = (end - start)/gasoline;
console.log(milage);