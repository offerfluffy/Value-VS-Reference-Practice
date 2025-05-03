/* 
  Array.prototype = 
  {__proto__: Obj}

  Number.prototype = 
  {__proto__: Obj}
  
  String.prototype =    
  {__proto__: Obj}

  Function.prototype = 
  {__proto__: Obj}

  ===> Object
*/

/* 
  Two kinds of vlaues in JS: 

  Primitives: (Value)
    1) Number
    2) Boolean
    3) String
    4) Null
    5) Undefined
    6) Symbol (introduced in ES6)
    7) BigInt (introduced in ES2020)

  Object: (Reference)
    1) Object
    2) Array
    3) Function
    4) Date
    5) Regex
    ...
*/

const me = "me";
// me ==> "me"
// stores exact value

const car = {};
// car ==> 0x123 (some place in memory)
// stores reference to place in memory

let a = 1;
let b = 1;
console.log(a === b); // true

a = {};
b = {};
console.log(a === b); //false

a = [1];
b = [1];
console.log(a === b); //false
// Because array is object-like structure in JS


let age = 10

function incrementAge(age) {
  // age += 1 for num
  age.age +=1
}

incrementAge(age)
console.log(age) // still 10, cause we are passing the Value to the function

age = { age: 10 }

incrementAge(age)
console.log(age) // 11, cause we are passing the Reference to the function

a = {name: 'a'}
b = a

console.log(a); // a
console.log(b); // a

a.name = "b" // changing a value in same place in memory

console.log(a); // b
console.log(b); // b

a = { name: "c" } // new part in memory

console.log(a); // c
console.log(b); // b