// Primitive Data Types
// Number
// String
// Boolean
// null
// undefined

// Numbers
// Examples
5
-5
-15.329170482123 // a float (decimals) is also the same number data type
Infinity
-Infinity

// Not a Number is actually a number data type
// Often a return value where a number argument was expected
// but we didn't get one
NaN 

// Arithmetic operators
2 + 2 // -> 4
2 - 2 // -> 0
2 * 2 // -> 4
2 / 2 // -> 1

// Raise to the power
4 ** 4 // 256

// modulo divides the left operand by the right operand and returns the remainder
9 % 3 // -> 0
10 % 4 // -> 2
8 % 5 // -> 3
2 % 3 // -> 2 (3 goes into 2 zero times and the remainder is 2)

// The Math object/library is built into JS

// This will return a random number between 0 and 1
// It is not inclusive of 1 (0 - 0.9999999999999)
Math.random() 

// This will return a random number between 0 and 100
// It is not inclusive of 100 (0 - 99.9999999999999)
Math.random() * 100 

// Rounding:
Math.floor(5.821) // -> 5
Math.ceil(5.821) // -> 6
Math.round(4.5) // -> 5

// Generate a random integer between 0 and 99
Math.floor(Math.random() * 100)
Math.ceil(Math.random() * 100) - 1

// Terminology that I use:
// () -> parenthesis
// [] -> brackets
// {} -> braces