// A variable is a container that holds a value
// It has accessibility, name, and a value

// The accessibility is set with one keyword
// const, let, var

// Syntax is as follows:
// {keyword} {variableName} = {value}
// {keyword} {variableName} is the declaraction of the variable
// = {value} is the assignment or initialization of the variable value
const fooBar = "foobar"

// When declaraing a variable with "let" without initialzing a value
// the space in memory gets allocated but its value is undefined
let a
a // -> undefined

// assign it a value:
// don't use the keyword here because we should only declare a 
// variable once in the same scope
a = "a value"

// Declare a variable that can't be reassigned/rebinded:
const num = 5
num = 6 // TypeError

// When declaring const variables, you must initialize it at the same time
const num2 // SyntaxError

// Declare a variable that can be reassigned:
var name = "Joe"
let isTrue = true 

// Conventions:
// camelCase (this is the convention in JS)
const camelCase = "value"
// PascalCase (used for JS classes and constructors)
const PascalCase = "value"
// snake_case
const snake_case = "value"
// SCREAMING_SNAKE_CASE (used for constants in JS)
const SCREAMING_SNAKE_CASE = "value"

// Rules for variable names:
// * cannot contain spaces
// * must start with a letter, _ or $
// * may contain digits if it's not the starting character
// * are case-sensitive
// * cannot be a reserved keyword in JS