function zero(fn) {
  if (typeof fn === 'function') {
    return fn(0)
  }
  return 0
}
function one(fn) {
  if (typeof fn === 'function') {
    return fn(1)
  }
  return 1
}
function two(fn) {
  if (typeof fn === 'function') {
    return fn(2)
  }
  return 2
}
function three(fn) {
  if (typeof fn === 'function') {
    return fn(3)
  }
  return 3
}
function four(fn) {
  if (typeof fn === 'function') {
    return fn(4)
  }
  return 4
}
function five(fn) {
  if (typeof fn === 'function') {
    return fn(5)
  }
  return 5
}
function six(fn) {
  if (typeof fn === 'function') {
    return fn(6)
  }
  return 6
}
function seven(fn) {
  if (typeof fn === 'function') {
    return fn(7)
  }
  return 7
}
function eight(fn) {
  if (typeof fn === 'function') {
    return fn(8)
  }
  return 8
}
function nine(fn) {
  if (typeof fn === 'function') {
    return fn(9)
  }
  return 9
}

function plus(x) {
  return function (y) {
    return x + y
  }
}
function minus(x) {
  return function (y) {
    return y - x
  }
}

function times(x) {
  return function (y) {
    return x * y
  }
}

function dividedBy(x) {
  return function (y) {
    return Math.floor(y / x)
  }
}

// CLEVER ANSWER
['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
.forEach(function (name, n) {
  this[name] = function (f) { return f ? f(n) : n }
});

function plus(n)      { return function (a) { return a + n } }
function minus(n)     { return function (a) { return a - n } }
function times(n)     { return function (a) { return a * n } }
function dividedBy(n) { return function (a) { return a / n } }

console.log(seven(times(five())), 35)
console.log(four(plus(nine())), 13)
console.log(eight(minus(three())), 5)
console.log(six(dividedBy(two())), 3)

console.log(two(dividedBy(three())), 0)
