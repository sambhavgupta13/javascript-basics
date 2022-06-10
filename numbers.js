let num = 255

console.log(num.toString(16))//ff
console.log(num.toString(2) )//11111111


console.log(Math.floor(3.1))//3 Rounds down
console.log(Math.ceil(3.1))//4 Rounds up
console.log(Math.round(3.1))//3
console.log(Math.round(3.5))//4
console.log(Math.round(3.6))//4
let n = 12.34
console.log(n.toFixed(1))//12.3
console.log(n.toFixed(5))//12.34000

console.log(isNaN("str"))//true
console.log(isNaN(NaN))//true

// NaN is unique , it is not equal to anything including itself
console.log(NaN==NaN)//false
console.log(NaN===NaN)//false