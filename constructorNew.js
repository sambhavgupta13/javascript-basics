function User(name){
    this.name = name
    this.isAdmin = true
}

let user = new User("Sambhav")
// console.log(user)

let user2 = new function(){
    this.name = "Sambhav"
    this.age = 22
    
    
}

console.log(user2)

let user3 = new function(){
    this.name = "Sambhav"
    return {name : "Miller"}// returns object instead of this 
}
console.log(user3)//{name : "Miller"}
let user4 = new function(){
    this.name = "Sambhav"
    return //--->returns this
}
console.log(user4)//{name : "Sambhav"}


let user5 = new function(){
    this.name = "Miller"
    this.bark = function(){
        console.log("Wooof " + this.name + " here")
    }
}

console.log(user5)
user5.bark()


function Calculator(){
    this.read = function(){
        let value1 = +prompt('value 1',0)
        this.a = value1
        let value2 = +prompt('value 2',0)
        this.b = value2
    }
    this.sum =function(){
        return this.a + this.b
    }
    this.mul = function(){
        return this.a*this.b
    }


}

function Accumulator(startingvalue){
    this.value = startingvalue
    this.read = function(){
        let a = +prompt('value',0)
        this.value +=a
        
    }
}
