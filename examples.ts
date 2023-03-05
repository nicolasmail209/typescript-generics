//https://www.youtube.com/watch?v=nViEqpgwxHE

//Type numArray can only contain an array with numbers inside it.
type numArray = Array<number>;

//Type arr can only contain an array with strings inside it.
type arr = Array<string>;



//First example
const last = (arr: Array<number>) => {
    return arr[arr.length - 1];
}

const l = last([1, 2, 3]);

//The next line doesnt work because arr is expecting an array of numbers.
//const l2 = last(['a', 'b', 'c']);
//We could put Array<any> in line 8, but we would lose typescript help tips.
/////////////////////////////////////////////////////////////////////////////////////////////////////////



const lastG = <T>(arr: T[])/*: T can be infered by typescript*/ => {
    return arr[arr.length -1 ];
}

const lG = lastG([1, 2, 3]);

const l2G = lastG(['a', 'b', 'c']);
//Its not necessary to do it like in line 27
const l2GG = lastG<string>(['a', 'b', 'c']);
//Now we can use the same function for two different types of arrays.
////////////////////////////////////////////////////////////////////////////////////////



const makeArr = <T>(x: T)/*: T[]*/ => {//If we use (x: any) it would work, but we lose typescript help tips.
    return [x];
}

const v = makeArr(5);
const v2 = makeArr("a");

//In the next line you can omit :[X, Y]
const makeArr2 = <X, Y>(x: X, y: Y): [X, Y] => {
    return [x, y]
}

const vv = makeArr2(5, 6);
const vv2 = makeArr2("a", "b");
const vv3 = makeArr2("a", 5);
const vv4 = makeArr2<string | null, number>("a", 5);

//If we dont put that by default Y is of type number, line 59 would give us a number.
const makeArr3 = <X, Y = number >(x: X, y: Y): [X, Y] => {
    return [x, y]
}

const vv5 = makeArr3<string | null>("a", 5);
////////////////////////////////////////////////////////////////////////////////////////////////////



//Now we want to constraint what the user can pass 
//But before this review the spread operator
