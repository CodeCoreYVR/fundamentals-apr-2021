// while loop

// Loops are used to run a piece of code many times

// Initialize value e.g. let i = 1
while (condition / expression) {
  // code block that will run while the condition is true
  // after each iteration we should change the initializer
  // e.g. i++

  // after each iteration, the while loop will check the condition
  // again to see if it should run again
}

// for loop
for ( initialization ; condition ; afterthought/iterator ) {
  // code block will run as long as the condition is truthy
}

// Log the numbers from 1 to 100 to console:
let i = 1
while (i <= 100) {
  console.log(i)
  i++
}

// The above while loop behaves like the following for loop:
for (let i = 1; i <= 100; i++) {
  console.log(i)
}

// Log all even numbers from 0 to 100 to the console:
let i = 0
while (i <= 100) {
  if (i % 2 === 0) {
    console.log(i)
  }
  i++
}

// The break statement breaks out of the entire loop and continues
// on with the program. Below, only 0, 1, 2, and 3 are logged even 
// though the condition goes up to 10
for (let i = 0; i <= 10; i++) {
  console.log(i)
  if (i === 3) {
    break
  }
}

// The continue statement will terminate the current iteration,
// ignoring any code after the continue statement and moves on to 
// the next iteration.
// Print the numbers that are between 0 and 100 that are divisible by 3:
for (let i = 0; i <= 100; i++) {
  if (i % 3 !== 0) {
    continue
  }
  console.log(i)
}

// A do...while loop will run once before checking the condition to 
// see if it should run again. It will keep running until the
// condition evaluates to false/falsy
do {
  console.log("This will run")
} while (false)