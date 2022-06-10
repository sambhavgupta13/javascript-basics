// 1. Splice - Delete , Insert , Replace
let arr = [1,2,3,4]

arr.splice(0,2)//delete
console.log(arr)//[3,4]

arr.splice(0,0,1,2)//insert
console.log(arr)//[1,2,3,4]

arr.splice(1,1,-1)
console.log(arr)//[1,-1,3,4]

//2. Slice -> does not change the original array

console.log(arr.slice(1,3))//[-1,3]

console.log(arr)//[1,-1,3,4]

//3. concat -> doesnt change the original array
let arr2 = [1,2,3,4]

let obj = {0:"some",1:"thing",[Symbol.isConcatSpreadable]:true,length:2}
arr2.concat(obj)
console.log(arr2.concat(obj))
console.log(arr2)
console.log( arr2.concat(6,7))


//4. forEach -> allows to run a function for every element

let array = [1,2,3,4,5]
array.forEach(console.log)// shows item index array - > 1 0 [1,2,3,4,5] for every item

//5. find**
let b = [{id:1,name:"sam"},{id:2,name:"miller"},{id:3,name:"adam"}]
let result = b.find(item=>item.name=="miller")
console.log(result)//{id:2,name:miller}

//6. filter

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
  // returns array of the first two users
  let someUsers = users.filter(item => item.id < 3);
  console.log(someUsers)//[ { id: 1, name: 'John' }, { id: 2, name: 'Pete' } ]
  
