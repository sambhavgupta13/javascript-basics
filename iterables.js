let range = {
    from: 1,
    to: 5,
  
    [Symbol.iterator]() {
      this.current = this.from;
      return this;
    },
  
    next() {
      if (this.current <= this.to) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
  
let array = Array.from(range)
console.log(array)

let arraylike = {
    0:0,
    1:1,
    length:2


}

let array2 = Array.from(arraylike)
console.log(array2)