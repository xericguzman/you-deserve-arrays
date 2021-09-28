const prompt = require('prompt-sync')({sigint: true});

const array = JSON.parse(prompt('Enter an array: '));

let fourthOrLast


if (array < 4){
thirdOrLast = array [array.length -1];
}   else  {
thirdOrLast = array[3];
    }

console.log('The third (or last) item is: ', thirdOrLastItem);