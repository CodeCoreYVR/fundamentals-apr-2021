// A higher order function is a function that either:
// - Takes a function as an argument
// - Returns a function

const runThree = (func) => {
  func()
  func()
  func()
}

const sayHi = () => {
  console.log("Hi!")
}

runThree(sayHi)
// > "Hi!"
// > "Hi!"
// > "Hi!"

// Call exercise:
const doubleIt = function(x) {
  return 2 * x
}

const call = (num, func) => {
  // return the result of calling the function on the number
  // "calling the function on the number":
  // func(num)
  // ^ the result is the return value
  // return the result from that call
  return func(num)
}

// If a function is passed as an argument to another higher order function,
// it's known as a callback. In this case, "doubleIt" is a callback
call(5, doubleIt) // -> 10
call(5, function(x) {
  return 2 * x
}) // -> 10

// We can also pass in a function directly like this:
call(10, (x) => { return 3 * x })
// With arrow functions, if you only have one line of an expression
// in the function body, you can write it without {} and that expression
// will be returned. In this case, 3 * x is returned even though you
// don't see the return statement. You can also optioanlly omit the ()
// if there's only one parameter. Doesn't work is there's 0 or 2+ parameters.
// e.g (x) => {} becomes x => {}
call(10, x => 3 * x) 

call(10.8703492, Math.floor) // -> 10

const callStretch = (num, func, times) => {
  let output = num 
  for (let i = 1; i <= times; i++) {
    output = func(output)
  }
  return output
}

callStretch(5, doubleIt, 3) // -> 40

// Built in array map() method
// When we call map, map will run the callback on every element
// in the array, and the return value for that callback will be 
// mapped to a new array as an element
// The parameter "x" represents the current element we're iterating over
[1, 2, 3].map( x => x ** 2 ) // -> [1, 4, 9]

function map(arr, cb) {
  const output = []
  for (let i = 0; i < arr.length; i++) {
    // For each iteration, arr[i] is the current element
    // Pass in arr[i] to the invocation of the callback, cb(arr[i])
    // The return value of that invocation is the new value mapped to
    // output array, so we push it
    output.push(cb(arr[i]))
  }
  return output
}

map([1, 2, 3], x => x ** 2 ) // -> [1, 4, 9]

// Stretch: Array of functions
const functions = [
  x => x * 2,
  x => x - 1,
  x => x ** 2
]

function mapStretch(arr, arrayOfFunctions) {
  const output = []

  for (let i = 0; i < arr.length; i++) {
    // For each iteration, arr[i] is the current element
    // Iterate over the arrayOfFunctions and call each function
    // on the current element
    let element = arr[i]
    for (let func of arrayOfFunctions) {
      element = func(element)
    }
    output.push(element)
  }

  return output
}

mapStretch([1, 2, 3], functions) // -> [1, 9, 25]

// Array of squares
map([1, 2, 3, 4, 5, 6, 7, 8, 9], x => x ** 2)

// Array of string lengths
map(
  ['hello', 'data', 'eat cheese', 'walking'], 
  x => x.split(" ").join("").length,
)

// Array.forEach()
// It performs a piece of code stored in a callback on each element
// of an array that it was called on and returns undefined
// Very similar to the for..of loop, the following does the same thing
[1, 2, 3].forEach(element => console.log(element))

for (let element of [1, 2, 3]) {
  console.log(element)
}

// Rewrite map using forEach
function map(arr, cb) {
  const output = []
  // for (let i = 0; i < arr.length; i++) {
  //   output.push(cb(arr[i]))
  // }

  arr.forEach(element => {
    output.push(cb(element))
  })

  return output
}

map([1, 2, 3], x => x ** 2 ) // -> [1, 4, 9]