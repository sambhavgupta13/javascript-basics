let age = 18

let access = (age>=18) ? true : false

console.log(access)//true

age = 17
access = (age>=18) ? true : false

console.log(access)// false
// Multiple '?'
age = 101   
let message = age<3 ? "hii baby" : age<18 ? "hi teenager" : age <100 ? "hii adult" : "dead man"

console.log(message)