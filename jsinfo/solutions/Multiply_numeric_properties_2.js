//Create a function multiplyNumeric(obj)
//that multiplies all numeric properties of obj by 2.

// before the call
let before_menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

//multiplyNumeric(menu);

// after the call
let after_menu = {
  width: 400,
  height: 600,
  title: "My menu"
};



function multiplyNumeric(menu){
  for(x in menu){
  if(typeof menu[x] === number){
    return x * 2;
  }else{
    return "not a number";
    }
  }
}

//Create a function
function multiplyNumeric(obj) {
  //run a for/in loop
      for (let key in obj) {
        //Use if/else with typeof to identify integers
        if (typeof obj[key] == 'number') {
          obj[key] *= 2;
        }
      }
    }
multiplyNumeric(after_menu)
multiplyNumeric(before_menu)
