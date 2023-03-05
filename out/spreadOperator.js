//https://www.youtube.com/watch?v=iLx4ma8ZqvQ
//Add the elements of an existing array into a new array
const arr1 = [1, 2, 3, 4];
const arr2 = [11, ...arr1, 12, 13];
const arr3 = [11, arr1, 12, 13];
console.log(arr2);
console.log(arr3);
//Pass elements of an array as arguments to a function
function addThreeNumbers(x, y, z) {
    console.log(x + y + z);
}
const args = [0, 1, 2]; //If there were a third element, it would be ommited.
addThreeNumbers(...args);
addThreeNumbers(args);
//Copy arrays
const arr4 = [1, 2, 3];
//const arr5 = arr4 would store the reference to arr4
//const arr5 = [arr4] would store the reference to arr4 inside an array
const arr5 = [...arr4];
arr5.push(4);
console.log(arr4);
console.log(arr5);
//Concatenate arrays
let arr6 = [0, 1, 2];
const arr7 = [3, 4, 5];
arr6 = [...arr6, 'something', ...arr7];
console.log(arr6);
//Rest operator: condense multiple elements into an array
//We know that the three dots are Rest and not Spread because they are being passed to a function
function multiply(multiplier, ...theArgs) {
    return theArgs.map(function (element) {
        return multiplier * element;
    });
}
const arr = multiply(2, 1, 2, 3);
console.log(arr);
