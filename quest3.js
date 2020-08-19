let prompt = require('prompt-sync')();
let totalBoxes = prompt('Eneter total boxes: ');
totalBoxes = parseInt(totalBoxes);
let boxesInStack = prompt('enter boxes in stack: ');
boxesInStack = parseInt(boxesInStack);
let numOfStacks = (totalBoxes/boxesInStack) + (totalBoxes%boxesInStack);
console.log(numOfStacks, "stacks")