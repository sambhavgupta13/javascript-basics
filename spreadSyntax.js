let arr = [1,2,3]
let arr2 = [0,...arr]
console.log(arr2)//[0,1,2,3]

let obj = {a:1,b:2}
let obj2 = {...obj}
console.log(obj2)//{a:1,b:2}

console.log(Math.max(arr))//NaN
console.log(Math.max(...arr))//3

let list = [1,2,3,4,5]
let [a,b,...rest] = list
console.log(a)//1
console.log(rest)//[3,4,5]