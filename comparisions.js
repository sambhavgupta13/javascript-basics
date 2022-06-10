// When comparing values of different types, JavaScript converts the values to numbers.
console.log('2'>1)// true
console.log('01'==1)//true

// A strict equality operator === checks the equality without type conversion. In other words, if a and b are of different types, then a === b immediately returns false without an attempt to convert them.


console.log( null > 0 );  // (1) false
console.log( null == 0 ); // (2) false
console.log( null >= 0 ); // (3) true
console.log(null == undefined) // true

/* Mathematically, that’s strange. The last result states that "null is greater than or equal to zero", so in one of the comparisons above it must be true, but they are both false.

The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.

*/


