function Accumulator(startingValue){
    this.value = startingValue;

    this.read=function(){
      //accumulator.a is prompted by the read function
      this.value = +prompt(a?, 0),
      //accumulator.a value is added to starting value.
      return this.value + startingValue;
    };
}

let accumulator = new Accumulator(1); // initial value 1
accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value
alert(accumulator.value); // shows the sum of these values
