// JS: Objects

// key/property - value pairs
// keys are strings (quotes are optional)
// values can be any data-type
const myObj = {
  a: 5,
  b: "string",
  nestedArr: [1, 2, 3],
  nestedObj: { c: 8 },   
}

// Using dot notation
myObj.a // -> 5
myObj.nestedArr // -> [1, 2, 3]

const car = {}

// Trying to access a property that doesn't exist gives us undefined
car.doors // -> undefined

// Assign values to properties:
// Doesn't matter if the key already exists or not
// If it already exists, it replaces that value
car.doors = 4
car.colour = "blue"

// Using bracket notation:
car["doors"] // -> 4

// We can evaluate experssions using []
const property = "colour"
car[property] // -> "blue" 
car.property // -> undefined

function countChars(str) {
  const output = {}

  for (let i = 0; i < str.length; i++) {
    if ( output[str[i]] ) {
      output[str[i]]++ 
    } else {
      output[str[i]] = 1
    }
  }

  return output
} 

countChars("test")
// Iterations:
// 1.
//    output -> {}
//    output["t"] = 1
// 2.
//    output -> { t: 1 }
//    output["e"] = 1
// 3.
//    output -> { t: 1, e: 1 }
//    output["s"] = 1
// 4.
//    output -> { t: 1, e: 1, s: 1 }
//    output["t"]++

// {
//   t: 2,
//   e: 1,
//   s: 1,
// }

// Exercises
// Print person:
function printPerson(person) {
  console.log(`${person.name} is ${person.age} years old`)
}

printPerson({
  name: "Joe",
  age: 43,  
}) // > "Joe is 43 years old"

// Object word lengths:
const getWordLengths = function(sentence) {
  const wordLengths = {}
  const words = sentence.split(" ") // -> ["Hello", "world"]

  for (let word of words) {
    wordLengths[word] = word.length
  }

  return wordLengths
}

getWordLengths("Hello world")
// {
//   Hello: 5,
//   world: 5,
// }

// for..in syntax will loop through every key/property in the object
for (let key in car) {
  console.log("key:", key, "value:", car[key])
}

function printPerson2(person) {
  for (let property in person) {
    console.log(`Person's ${property} is ${person[property]}`)
  }
}

// Return an array of an object's keys or values
Object.keys(car)
Object.values(car)

// Delete a key/value pair by using the 'delete' keyword
delete car.doors 

// Verify if the key exists in the object
car.hasOwnProperty('doors') // -> false
car.hasOwnProperty('colour') // -> true

typeof {} // -> "object"
typeof [] // -> "object"
Array.isArray({}) // -> false
Array.isArray([]) // -> true

// object keys have to be unique
const obj = {
  a: 1,
  b: 2,
  a: 3,
}

obj // -> { a: 3, b: 2 }