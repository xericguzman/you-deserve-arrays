const prompt = require('prompt-sync')({sigint: true});

const array = JSON.parse(prompt('Enter an array: '));

if (array[0] === Number(input[0])) {
    console.log(true); 
} else {
    console.log(false);
}