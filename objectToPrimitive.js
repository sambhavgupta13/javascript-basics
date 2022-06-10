let obj = {
    name : "56",//Sambhav//56
    age : 22,
    toString(){
        return this.name

    }
}
let obj2 = obj+200
console.log(typeof(obj2))//string
console.log(obj2)//Sambhav200//56200

obj2 = +obj
console.log(typeof(obj2))//Number
console.log(obj2)//NaN//56


