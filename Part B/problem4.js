function createCounter(){
 // create the private count
let count = 0;
  // increase the count
function increment(){ count++;}
  // decrease the count
function decrement(){count--;}
 
  
  // get the current value of the private count
    return {
    increment,
    decrement,

    get value() {
      return count;  
    }
  };
}




const counter = createCounter()
counter.increment()
  counter.increment()
counter.decrement()
console.log(counter.value)  // 1
console.log(counter.count)  // undefined — not directly accessible