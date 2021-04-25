// if / else if / else statement

// conditionals control the flow of the program

// The syntax for an if statment:

if (expression / condition) {
  // code block will run if the condition is truthy
}

// You can write it on one line if there's only one line of code in the code block
// without braces. It's still treated as a code block.
if (expression / condition) // single line of code

// With an else clause:
if (expression / condition) {
  // code block will run if the condition is truthy
} else {
  // code will run if the condition is falsy
}

// No more than one code block will run per statement, only the first 
// clause that was truthy will run
if (expression / condition) {
  // code block will run if the condition is truthy
} else if (expression / condition) {
  // code will run if the else if clause is truthy
  // but it will not run if any previous if or else if conditions were truthy  
} else {
  // code will run if all previous conditions were falsy
  // Whenever you have an else clause, a block of code will always
  // run because the else clause acts as a default
}

const year = parseInt(prompt("What year is your car?"))

if (year > 2021) { // 2022 - Infinity
  console.log("Your car is future")
} else if (year > 2019) { // 2020 - 2021
  console.log("Your car is new")
} else if (year > 2010) { // 2011 - 2019
  console.log("Your car is old")
} else { // -Infinity - 2010
  console.log("Your car is very old") 
}