//OPERATORS IN JAVA SCRIPT

var x = 1
var y = 2

// artithmetic operators
console.log("value of x + y is", x + y)
console.log("value of x - y is", x - y)
console.log("value of x * y is", x * y)
console.log("value of x / y is", x / y)

// assignment operators
var z = x
// z += 2 // c = c + 2 i.e 1 + 2
// z -= 2
// z *= 2
// z /= 2
console.log(z)

// comparision operators
console.log(x == y)
console.log(x >= y)
console.log(x <= y)
console.log(x > y)
console.log(x < y)

// logical operators

//AND &&
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(true && false)

//OR ||
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(true || false)

// NOT !
console.log(! true)
console.log(!false)

// Functions in JavaScript
function avg(a, b) {
    return (a + b) / 2
}
c1 = avg(4, 6)
c2 = avg(9, 10)
console.log(c1, c2)
// DRY = DON'T REPEAT YOURSELF
