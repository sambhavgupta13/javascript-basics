// user is a global variable which references the object {name:"john"} hence here john is reachable
let user = {
    name : "John"
}

user = null // now john becomes unreachable hence its deleted by the garbage collector automatically .

let user2 = {
    name:"john"
}

let admin = user2

user = null;

// console.log(admin)//{name :"John"}  user becomes null but admin still refers to the object hence its still reachable . If admin also becomes null then object becomes unreachable

// Interlinked objects

function marry(man, woman) {
    woman.husband = man;
    // console.log(woman)
    man.wife = woman;
    // console.log(man)
    // console.log(woman)//man.wife refer to woman and woman.husband refer to man hence if man changes it reflects in woman.husband also
  
    return {
      father: man,
      mother: woman
    }
  }
  
  let family = marry({
    name: "John"
  }, {
    name: "Ann"
  });

//   console.log(family)
  delete family.father;
delete family.mother.husband;
console.log(family)// only mother is left which means father object becomes unreachable and is deleted from the memory by the garbage collector

