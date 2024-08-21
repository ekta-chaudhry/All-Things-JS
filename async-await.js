console.log('Outside and above async myFunc()');

const myFunc = async () => {
    console.log('Inside async myFunc()');
    const myPromise = await new Promise((resolve) => {
        setTimeout(() => {
            console.log('Inside setTimeout callback');
            resolve();
        }, 3000);
    });
    console.log(myPromise);
    return 'Hi there';
}

//an async function immediately returns a promise when it is invoked. It does not wait for the await-ed code
//inside it to execute before returning a promise.
const prom = myFunc(); //returns a pending promise.
console.log(prom); //prints Promise {<pending>}
prom.then((value) => { //this executes when prom gets resolved, ahd that happens when the entire await-ed
    //code inside myFunc() gets executed.
    //the value is whatever returned from myFunc after the execution of all the await-ed code.
    console.log(value);
})

//this gets executed before the await-ed code inside myFunc() gets executed.
console.log('Outside and below async myFunc()');

