//Modify the code of up and down to
//make the calls chainable, like this:

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
    alert( this.step );
  }
};

ladder.up().up().up().down().showStep()
