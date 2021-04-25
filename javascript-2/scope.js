let a = 1
const b = 2

// We declare a function inside the global scope
// Therefore the global scope is the parent of the function scope
// When evaluating variables, it looks for it declared in the current 
// scope, and if it doesn't find it, then it looks for it in the parent
// scope, all the way up until the global scope. 
function func(a) {
  if (true) {
    let b = 20
    console.log(`Within if block: a:${a}, b:${b}`) // a: 10, b: 20
  }
  console.log(`Within function block: a:${a}, b:${b}`) // a: 10, b: 2
}

func(10)
console.log(`In global scope: a:${a}, b:${b}`) // a: 1, b: 2

// With var, the variable is scoped to the surrounding function
var a = 1
var b = 2

function func(a) {
  if (true) {
    var b = 20
    console.log(`Within if block: a:${a}, b:${b}`) // a: 10, b: 20
  }
  console.log(`Within function block: a:${a}, b:${b}`) // a: 10, b: 20
}

func(10)
console.log(`In global scope: a:${a}, b:${b}`) // a: 1, b: 2