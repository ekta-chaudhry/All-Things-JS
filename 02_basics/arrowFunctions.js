/*in node.js, programs are divided in modules, so in a particular module,
the 'this' keyword in the outermost scope refers to the module.exports object which is by default empty.*/

console.log(this) //prints an empty object.
module.exports.name = "Ekta" //sets the name property of exports object
console.log(this) //prints {name: "Ekta"}

//when a regular function is called, this refers to global object in non strict mode, and undefined in strict mode.
//binding to 'this' is resolved based on how the function is called and not where it is created.
//hence, the 'this' can refer to different objects in regular functions and the binding is dynamic.
globalThis.name = "Alice"
function print() {
    console.log(this.name); //prints Alice as we set name of global object to Alice.
}
print()

//using strict mode, 'this' is undefined in global regular functions.
function printTwo() {
    "use strict";
    console.log(this);
}
printTwo()

//in arrow functions, 'this' is resolved by lexical scope.
const printThree = () => {
    console.log(this) //this here refers to the module.exports object, as it is being referred to as
    //this in the lexical scope of the function, and the function inherits 'this' from its lexical scope.
}
printThree()

function outer() {
    console.log(this.name);  //this will be called in global scope, so will print Alice
    const myObj = {
        inner: () => { //this will inherit 'this' keyword from its lexical scope, which in this case is the
            //outer function, whose 'this' gets resolved dynamically.
            console.log(this.name);
        }
    }
    myObj.inner()
}

outer() //by calling the function in global scope, 'this' inside will refer to global object.
//outer.call(this); //we can explicitly change the object that the outer() function gets binded to.

const myObj = {
    word: 'Alice',
    b: function() { //this function is bound to the myObj object as it will be called like myObj.b() at runtime.
        //'this' inside this function will refer to myObj
        const a = () => { //this function will inherit 'this' from the outer function.
            console.log(this);
        }
        a();
    }
};

myObj.b()

/*Moreover, arrow functions can't be used as contructor functions because they don't have their own 'this' 
binding.*/