//array.filter() method
const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(`original myArr: ${myArr}`); //prints: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

let newArr = myArr.filter((num) => {
    return num >= 5
})

console.log(`filtered newArr: ${newArr}`); //prints: 5, 6, 7, 8, 9, 10

////////////////////////////////////////////////////////////////////////////////////
//array.filter() method returns to the new array, shallow copy of the objects that pass the condition.
//so, we can use new array to modify the objects in the original array.
//example:
const objArray = [   //an array of objects, each object has two properties: title and genre.
    {title: 'One', genre: 'Fiction'},
    {title: 'Two', genre: 'Non-Fiction'},
    {title: 'Three', genre: 'History'},
    {title: 'Four', genre: 'Fiction'}
]

//creating a new array and assigning to it, the objects in objArray that pass the given condition in filter()
//newObjArray gets shallow copies of objects in original array, so it can modify the objects in original array
const newObjArray = objArray.filter((obj) => {
    return obj.genre === 'Fiction'
})

//modifying property of an object in newObjArray
newObjArray[0].title = 'Modified'

//the object in original array gets modified
console.log('original array after modification: ', objArray)
console.log('filtered array after modification: ', newObjArray)


