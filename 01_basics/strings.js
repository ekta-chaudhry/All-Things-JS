let gameName = new String("Ektaec")

console.log(`The value of gameName is ${gameName}`)
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())

let another = gameName
another = "Another"
console.log(`Another: ${another} and gameName: ${gameName}`)
another[0] = 'b'
console.log(`Another: ${another} and gameName: ${gameName}`)

