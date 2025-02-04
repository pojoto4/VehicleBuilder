// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// done: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
  // done: Declare properties of the Truck class
  // The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // done: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)
class Truck extends Vehicle implements AbleToTow {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // done: Create a constructor that accepts the properties of the Truck class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    // done: The constructor should call the constructor of the parent class, Vehicle
    super();

    // done: The constructor should initialize the properties of the Truck class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;
    // done: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }
  // done: Implement the tow method from the AbleToTow interface
    // done: Get the make an model of the vehicle if it exists
    // done: Check if the vehicle's weight is less than or equal to the truck's towing capacity
    // done: If it is, log that the vehicle is being towed
    // done: If it is not, log that the vehicle is too heavy to be towed
tow(vehicle: Truck | Motorbike | Car): void {
  const vehicleMake = vehicle.make;
  const vehicleModel = vehicle.model;
  if (vehicle.weight <= this.towingCapacity) {
    console.log(`${vehicleMake} ${vehicleModel} is being towed by the truck.`);
} else {
    console.log(`${vehicleMake} ${vehicleModel} is too heavy to be towed.`);
}
} 

  // done: Override the printDetails method from the Vehicle class
  override printDetails(): void {

    // done: The method should call the printDetails method of the parent class
    super.printDetails();

    // done: The method should log the details of the Truck
    // done: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Towing Capacity: ${this.towingCapacity}`);

    console.log(
      `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
    );
    console.log(
      `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
    );
    console.log(
      `Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`
    );
    console.log(
      `Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`
    );
}
}

// Export the Truck class as the default export
export default Truck;
