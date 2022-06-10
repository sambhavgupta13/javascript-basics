// String(value) - to convert the value to string
let num = 10
console.log(typeof(num))//number
let num1 = String(num)
console.log(typeof(num1))//string

// Numeric conversion happens in mathematical functions and expressions automatically. We can use the Number(value) function to explicitly convert a value to a number:
// or +(value) it also does the same thing .
num1 = Number(num1)
console.log(typeof(num1))//number

// null becomes 0 while undefined becomes NaN

console.log(typeof(null))
console.log(typeof(undefined))