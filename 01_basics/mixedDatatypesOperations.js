let value = 3;
let negValue = -value
console.log(negValue)

let str1 = "Hello"
let str2 = "World"
let str3 = str1 + str2 //adding two string values - yields another string
console.log(str3)

console.log("3"+ 48 + 1)  //=> 3481; when numeric values and string values are used with + operator,
// numeric value gets converted to a string.
console.log(3 + 48 + "1") //=> 511; the expression is evaluated from left to right, so 3 + 48 = 51
//but 51 + "1" yields 511 due to conversion of 51 to a string value.
console.log("3" * 9)  //=> 27; conversion happens from strin to numeric value only when the operator is not +
console.log("3abc" * 9) //=>NaN; the string value doesn't respresent a valid numeric value, so the operation
//yields a NaN.