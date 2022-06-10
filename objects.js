let user = {}
user.name = "John"
console.log(user)
user.surname = "Smith"
console.log(user)
user.name = "Pete"
console.log(user)
delete user.name
console.log(user)

function isEmpty(obj){
    for(let key in obj){
        return false
    }
    return true
}

let obj = {
    name : "Sambhav"
}

console.log(isEmpty(obj))

function sumOfSalaries(salaries){
    let sum = 0;
    for (let key in salaries){
        sum+=salaries[key]

    }
    return sum
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  console.log(sumOfSalaries(salaries))

//   let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };



//   for(let key in menu){
//       if(typeof(menu[key])== 'number'){
//           menu[key] *=2
//       }
//   }

//   console.log(menu)
const menu = { name : "jonh" }
let menu2 = 2
menu = menu2
// console.log(menu)
  console.log(typeof(2))