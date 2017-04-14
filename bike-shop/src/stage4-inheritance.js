class Frame {
	Constructor(){
		this.style = "default";	
	}
}

class Tire {
	Constructor(){
		this.type = "default";
		this.tires.diameter = 20;

	}
}

class Brakes{
	Constructor(){
		this.front = false;
		this.back = true;
	}
}

class Bike extends Frame{
	
	Constructor(){
		this.frame = new Frame()
		this.tires = [new Tires, new Tires]
		this.brakes = new Brakes;
	}
  }	


/*class MountainBike extends Bike{
	RacingBike(){

		}
}*/

class MountainBike extends Bike{

	MountainBike(){ 
		super.stop();
			this.frame.style = "mountain";
			this.tires[0] = "dirt"
			this.tires[1] = "dirt"
			this.shock = 20
	}

}
let mountainbike = new MountainBike

module.exports = {
  Bike: Bike,
  MountainBike: MountainBike,
  //RacingBike: RacingBike,
  //BMXBike: BMXBike
  // you'll need to export new classes here
}
