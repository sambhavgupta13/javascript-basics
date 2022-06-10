class Animal{
    constructor(name){
        this.speed = 0,
        this.name = name
    }
    run(speed){
        this.speed = speed
        console.log(this.name + " runs with speed "+this.speed)
    }

    stop(){
        this.speed = 0
        console.log(this.name + " stands still ")
    }

}

let animal = new Animal("Miller")

animal.run(10)
animal.stop()
console.log(animal.name)


class Rabbit extends Animal{
    hide(){
        console.log(this.name +" hides")
    }
}

let rabbit = new Rabbit("coco")

rabbit.run(4)
rabbit.stop()
rabbit.hide()