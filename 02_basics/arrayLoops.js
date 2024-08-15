const arr = [10, 2, 71, 39, 54]
//1. for-of loop
for (const element of arr) {
    console.log(element) //prints each element in arr,
    //this loop is different from index-based looping.
}

//for-of loop is not capable of looping on objects. To loop on each property of an object, we can use
//the for-in loop.

//2. for-in loop
const myObj = {
    key1: 'val1',
    key2: 'val2',
    key3: 'val3',
}

for (const key in myObj) {
    console.log(`${key} :- ${myObj[key]}`)
}

//3. forEach() loop

const coding = ['js', 'cpp', 'python', 'go', 'java'];

coding.forEach(function (elem) {
    console.log(elem)
})