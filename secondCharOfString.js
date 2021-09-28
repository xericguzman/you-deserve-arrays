const prompt = require('prompt-sync')({sigint: true});

console.log('Enter an array');
const array = JSON.parse(prompt(">"));
console.log("");

const thirdElement = array[2];
const secondChar = thirdElement[1];

const type = isNaN(thirdElement);

if (type === false) {
    console.log("Error Not a String")
} else {
    console.log("The third item from is: ", + secondChar)
}