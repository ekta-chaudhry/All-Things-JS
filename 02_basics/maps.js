const objArray = [   //an array of objects, each object has two properties: title and genre.
    {title: 'One', genre: 'Fiction'},
    {title: 'Two', genre: 'Non-Fiction'},
    {title: 'Three', genre: 'History'},
    {title: 'Four', genre: 'Fiction'}
]

//to modify objects in the original array
objArray.forEach((obj) => {
    obj.title = 'Modified'
})
console.log(objArray) //the objArray gets modified

//array.map() method
const objArray2 = [   //an array of objects, each object has two properties: title and genre.
    {title: 'One', genre: 'Fiction'},
    {title: 'Two', genre: 'Non-Fiction'},
    {title: 'Three', genre: 'History'},
    {title: 'Four', genre: 'Fiction'}
]

const newArray = objArray2.map((obj) => {
    return obj.title = 'Modified from .map()'
})

console.log(newArray)
console.log(objArray2)

//to operate on array of primitive types, use .map(), 
//and to operate on array of reference types, use .forEach()

const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((num) => num + 10); // does not modify the original array (of primitives)
//.map() returns new elements(after performing operation) and adds them to new array
console.log(arr) //original array stays same
console.log(newArr)