//Creation of a promise object.
//A promise object is created using the keyword new and invoking the contructor function Promise()


//The Promise() constructor function takes a function as argument, that gets invoked immediately
//within the constructor function.
function executor() {}
const myPromise = new Promise(executor);
console.log(myPromise) //promise in pending state.

//typically the executor function takes two arguments: which are callbacks
//1. resolve   2. reject
//inside the executor function, we provide an asynchronous task to happen.
//after the completion(or failure) of that async task, resolve or reject is called as required.

const myPromise2 = new Promise(executor2); //creates a promise, and executor2 is invoked inside constructor.

function executor2(resolve) {
    //this is immediately invoked in promise constructor function.
    console.log('Inside the executor2 function!');

    //callback passed to setTimeout is registered to be executed after 3 seconds, and executor2 completes 
    //execution.
    setTimeout(()=> {
        console.log('I get executed after 2 seconds');
        //when resolve() is invoked, it changes the promise's state to fulfilled and triggers a 
        //mechanism that schedules the callback in .then() to be executed in microtask queue.
        resolve('Promise fulfilled');
        console.log(myPromise2)
        for(let i = 0; i < 10000000000; i++) {

        }
        console.log('After cpu heavy task!')
    }, 3000);
}

//the callback inside .then() is invoked when myPromise2's state is set to resolved.
//the state of myPromise2 is changed in resolve() function.
myPromise2.then((value) => console.log('Then: ', value));

//this will print promise in pending state.
console.log(myPromise2)

//after 3 seconds, the callack passed to setTimeout is pushed into callback queue and is ready to be executed.
//once the call stack is empty, the callback is executed.
//inside the callback, we call the resolve() function that sets the state of promise to resolved.
