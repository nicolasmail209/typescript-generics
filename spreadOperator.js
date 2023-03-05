//https://www.youtube.com/watch?v=iLx4ma8ZqvQ
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Add the elements of an existing array into a new array
var arr1 = [1, 2, 3, 4];
var arr2 = __spreadArray(__spreadArray([11], arr1, true), [12, 13], false);
var arr3 = [11, arr1, 12, 13];
console.log(arr2);
console.log(arr3);
//Pass elements of an array as arguments to a function
function addThreeNumbers(x, y, z) {
    console.log(x + y + z);
}
var args = [0, 1, 2]; //If there were a third element, it would be ommited.
addThreeNumbers.apply(void 0, args);
addThreeNumbers(args);
//Copy arrays
var arr4 = [1, 2, 3];
//const arr5 = arr4 would store the reference to arr4
//const arr5 = [arr4] would store the reference to arr4 inside an array
var arr5 = __spreadArray([], arr4, true);
arr5.push(4);
console.log(arr4);
console.log(arr5);
//Concatenate arrays
var arr6 = [0, 1, 2];
var arr7 = [3, 4, 5];
arr6 = __spreadArray(__spreadArray(__spreadArray([], arr6, true), ['something'], false), arr7, true);
console.log(arr6);
//Rest operator: condense multiple elements into an array
//We know that the three dots are Rest and not Spread because they are being passed to a function
function multiply(multiplier) {
    var theArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        theArgs[_i - 1] = arguments[_i];
    }
    return theArgs.map(function (element) {
        return multiplier * element;
    });
}
var arr = multiply(2, 1, 2, 3);
console.log(arr);
