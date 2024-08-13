const myArr = [4, 8, 13, 96, 2, 71];
//console.log(myArr)
const myArr2 = myArr;
myArr2[2] = 5;
//console.log(myArr)
//arrays are non-primitive types, meaning that an array object is created on heap and
//variable referring to that object is stored on the stack. Multiple variables can point to the same array
//object. Modifying the object through any variable will change the original object, since only one object
//exists in memory that all the variables point to.

//array class has methods and not all of them change the original array, some of the methods
//yield new arrays after performing the operation.
//example: slice() and splice()

//slice() doesn't modify the original array
const newArr = [5, 7, 9, 11, 13, 15];
const newArr2 = newArr.slice(2, 5)
console.log(`newArr after slice(): ${newArr}`)
console.log(`newArr2 after slice(): ${newArr2}`)

//splice() modifies the original array
const newArr3 = newArr.splice(2, 5);
console.log(`newArr after splice(): ${newArr}`)
console.log(`newArr3 after splice(): ${newArr3}`)
