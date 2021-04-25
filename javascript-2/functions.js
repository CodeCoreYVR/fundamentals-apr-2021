// Functions
// A container for a piece of code that can be executed anywhere
// in your program. The arguments are the values that are passed to
// the function when called. The parameters are the "variables" that
// hold values of the arguments that were passed to the function call

// Defining a function
// Function declaration syntax:
function functionDeclaration(param1, param2) {
  // function body (your code goes here)
  return // expression
}

// Function expression:
// A function without a name is called an anonmyous function
// We declare a variable and assign it an anonmyous function as its 
// value. We can do this because functions can be passed around as values.
// One benefit of this over declaration is that we can't reassign function
// expressions.
const functionExpression = function(param1, param2) {
  // code
  return // expression
}

// Example:
function printName(firstName, lastName) {
  return `Your name is: ${firstName} ${lastName}`
}

// Get the definition of the function:
printName

// Invoke/call/execute
// "Jane" and "Doe" are the arguments passed to this function call
// firstName and lastName will hold the values of these arguments for that call
// A string is returned from this function and used inside of the
// expression wherever you're calling this function
printName("Jane", "Doe")

// If we don't have a return statement, 
// the function will return undefined when called
function returnUndefined() {
  console.log("This function does something")
  // The function will return undefined because the
  // return statement is omitted
}

// Any code in the function body that comes after the return statement
// will not be run
const afterReturnExample = function() {
  return "I'm returned and I exit the function"
  console.log("I will not print")
  return "This will not be returned"
}

// Arrow function (ES6+)
const arrow = (param1, param2) => {
  // code
  return // expression
}

// Exercises:
function insult(name) {
  return `${name}, you doofus!`
}

const increment = function(x) {
  return x + 1
}

const repeat = (string, num) => {
  return string.repeat(num)
}
// or
const repeat = (string, times) => {
  let output = ""

  for (let i = 0; i < times; i++) {
     output += string
  }
  
  return output   
}