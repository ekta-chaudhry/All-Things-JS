let score = "33"
console.log(typeof score)
console.log(typeof(score))

let newScore = Number(score)
console.log(typeof newScore)
console.log(newScore)

// "33" => 33 (type: number)
// "33abc" => NaN (type: number)
//null => 0 (type: object)
//undefined => NaN (type: number)     //null is a value, whereas undefined is a type. Type of null is object.

let vari = null
console.log(typeof vari)
console.log(vari)