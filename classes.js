class User{
    constructor(name){
        this.name = name
    }
    sayHi(){
        console.log("Hi "+ this.name)
    }
}

let user1 = new User("John")

user1.sayHi()// Hi John
console.log(typeof User)