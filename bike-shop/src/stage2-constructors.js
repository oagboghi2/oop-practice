function Bike(name, price) {
  // your code here

  this.name = name;
  this.price = price;
  this.rings = [3,7];
  this.tires = [];
  this.tires[0] = new Tire();
  this.tires[1] = new Tire();
  this.frame = new Frame();
  this.brakes = {front : true, back : true};
  //this.brakes.front = true;
  //this.brakes.back = false;
  
  name ? this.name = name : this.name = 'Speedster';
  price ? this.price = price : this.price = 250.00;
}



function Frame(color, size, style) {
  // your code here
  if(color !==  undefined){
    this.color = color;
  }else{
    this.color = 'black';
  }
  size ? this.size = size : this.size = 55;
  style ? this.style = style : this.style = 'street';
}


 function Tire(diameter, type){
  if(diameter !== undefined){
    this.diameter = diameter;
  }else{
    this.diameter = 22;
  }
  type ? this.type = type : this.type = 'street';
	}

module.exports = {
  Bike: Bike,
  Frame: Frame,
  Tire: Tire
}
