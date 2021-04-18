// increment and decrement

let num = 0
console.log(`num is initially: ${num}`)
console.log(`when using preincrement, the value gets increased by one before logging, which changes the value to: ${++num}`)
console.log(`current value of num is ${num}`)
console.log(`when using postincrement, the value gets increased by one, but only after logging. So it displays the current value of ${num++} before adding 1 to num`)
console.log(`current value of num is ${num}`)

// Compound assignment operators:
// += -= *= /= %= **=
num = 10
num += 5 // shorthand for num = num + 5
num // -> 15
num *= 3 
num // -> 45