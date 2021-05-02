// In the chrome console, "this" in the global scope is the window object (global object in the browser)
this // -> window object
window.console === console // -> true

const can = {
  name: "Can Object",
  touchThis() {
    return this
  }
}

can.touchThis() // returns can object

// "this" will refer to something else if the method is separated
// from its object. This is called the implicit binding of "this". 
// The rule of thumb is that "this" will refer to the object to the
// left of the bot.
const cant = {
  name: "Can't Object",
}

cant.touchThis = can.touchThis
cant.touchThis() // returns cant object

// We don't know what "this" is until we call it and "this" binds to the context.
// Similarilty, when we define a function, we don't know what "param" is 
// until we invoke it and pass it an argument
function someFunc(param) {
  console.log("param:", param)
  console.log("this:", this)
}

cant.someFunc = someFunc
cant.someFunc("hello")
// param: hello
// this: cant object

someFunc(100)
// param: 100
// this: global window object

const counter = {
  step: 1,
  count: 0,
  set(n) {
    this.count = n 
  },
  inc() {
    return this.count += this.step
  },
  dec() {
    return this.count -= this.step
  },
  now() {
    return this.count
  },
  setStep(n) {
    this.step = n
  },
  reset() {
    this.count = 0
  },
}

// Stopping exercise
const car = {
  doors: 4,
  speed: 300,
  park: function() {
    console.log("Parking...")
  },
  stop() {
    if (this.speed > 120) {
      console.log("Screeeeeeetch")
    } else if (this.speed > 80) {
      console.log("RRrch")
    } else if (this.speed > 0) {
      console.log("sh")
    } else {
      console.log("I don't know how fast I'm going!!")
    }
  },
  stopStretch() {
    if (typeof this.speed === "number") {
      console.log(`Scr${"e".repeat(this.speed)}tch!!!`)
    } else {
      console.log("I don't know how fast I'm going!!")
    }
  }
}