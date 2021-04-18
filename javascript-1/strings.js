// Strings
"This is a double quote string"
'I\'m a single quote string'
`This is a backtick string`
"This will go on a \n new line"
// "This will go on a 
//  new line"

// Concatenate strings
"one" + "two" // -> "onetwo"
"4" + 5 // -> "45"
5 + "4" // -> "54"

// Above, JS will not throw any errors 
// At runtime, it type coerces 5 to "5" before concatenating
"4" + String(5) // -> "45"

// Only with backticks can you use string interpolation
// If the expression in the ${} is not a string, it 
// will convert to a string at runtime and be interpolated
// as a string in place of the ${} placeholder
`There are ${6 + 6} eggs` // -> "There are 12 eggs"

// Only with backticks can you create multiline strings
`
  This is 
  a multiline
  string
`

// Get the length of a string
"abc".length

// Each character in a string has an index which starts at 0
"abc"[0] // -> "a"
"abc"[2] // -> "c"
"abc"[1 + 1] // -> "c"
"abc"[-1] // -> undefined

// We cannot mutate strings
let s = "bobbi"
s[4] = "y" // This does not work, and JS will not throw an error either
s // -> "bobbi"

// Parse a string into a number
parseInt("123") // -> 123
parseInt("123abc") // -> 123
parseInt("123abc321") // -> 123, it stops at the first character that's not a digit
parseInt("abc") // -> NaN
parseInt("123.5") // -> 123
parseFloat("123.5") // -> 123.5

// Convert any data type into a number
Number(true) // -> 1
Number(false) // -> 0
Number("123") // -> 123

// Remove beginning and trailing spaces
"     hello world      ".trim() // -> "hello world"