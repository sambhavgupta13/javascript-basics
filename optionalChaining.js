let user = {}
// console.log(user.address.street)//error
console.log(user?.address?.street)//undefined

user = {
    address : {

    }
}

console.log(user?.address)//{}
console.log(user?.address?.street)//undefined
user = {
    address : {
street : "Paschim Vihar"
    }
}

console.log(user?.address)//{street:"Paschim Vihar"}
console.log(user?.address?.street)//Paschim Viha
delete user?.address?.street
console.log(user?.address?.street)

/*
obj?.prop – returns obj.prop if obj exists, otherwise undefined.
obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
obj.method?.() – calls obj.method() if obj.method exists, otherwise returns undefined.
*/