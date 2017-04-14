/*
Create a constructor function Calculator that
creates objects with 3 methods:

read() asks for two values using prompt and
remembers them in object properties.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties.
*/

function Calculator()
//make this.read a function
this.read = function(){
  this.a = +prompt('a', 0);
  // let a = prompt('give me a number')
  this.b = +prompt('b', 0);
};
//function sum access values of this.read
this.sum = function(){
  return this.a + this.b;
};
this.mul = function(){
  return this.a * this.b;
  };
}

//object is created with constructor functions.
let Calcuator = new Calculator()
