// Remainder %
console.log(5%2)//1
console.log(8%3)//2

// Exponentiation **
console.log(2**2)//4
console.log(4**(1/2))//2 square root of 4 = 2

// prefix and postfix increment
// If the result of increment/decrement is not used, there is no difference in which form to use
let counter = 1;
console.log(++counter)//2
console.log(counter++)//2
// If we’d like to increase a value and immediately use the result of the operator, we need the prefix form
let a = 1
console.log(++a)//2
console.log(a)//2

// If we’d like to increment a value but use its previous value, we need the postfix form
let b =1
console.log(b++)//1
console.log(b)//2

/*
Space characters,
are trimmed off string start and end when a string is converted to a number.
Here the whole string consists of space characters, such as \t, \n and a “regular” space between them.
So, similarly to an empty string, it becomes 0. 
*/

