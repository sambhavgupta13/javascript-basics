// let user = {
//     name : "John",
//     age : 30,
//     sayHi(){
//         console.log("Hii "+this.name)
//     }

// }
// user.sayHi()

let user = {name : "John"}
let admin = {name : "Admin"}

function sayHi(){
    console.log(this.name)
}

user.f = sayHi
admin.f = sayHi
// console.log(user)
user.f()//John
admin.f()//Admin
admin['f']()//Admin

// rules that set this do not look at object definition. Only the moment of call matters.
// Here the value of this inside makeUser() is undefined, because it is called as a function, not as a method with “dot” syntax.

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this
    },
    down() {
      this.step--;
      return this
    },
    showStep: function() { // shows the current step
      console.log( this.step );
      return this
    }
  };

  ladder.up().up().down().showStep().down().showStep();