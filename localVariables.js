// A variable that is declared inside a function is only visible inside that function

function message(){
    let a = "hi there"
    console.log(a)
}

message()// hi there
console.log(a) // error -> a is not defined