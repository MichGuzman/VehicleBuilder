// Import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle {
    // TODO: Declare properties of the Truck class
    vin;
    color;
    make;
    model;
    year;
    weight;
    topSpeed;
    towingCapacity;
    wheels;
    // TODO: Create a constructor that accepts the properties of the Truck class
    constructor(vin, color, make, model, year, weight, topSpeed, wheels = [], towingCapacity) {
        // TODO: The constructor should call the constructor of the parent class, Vehicle
        super();
        // TODO: The constructor should initialize the properties of the Truck class
        // Initialize the properties of the Truck class
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.towingCapacity = towingCapacity;
        // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
        if (wheels.length !== 4) {
            this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
        }
        else {
            this.wheels = wheels;
        }
    }
    // TODO: Implement the tow method from the AbleToTow interface
    tow(vehicle) {
        // TODO: Get the make and model of the vehicle if it exists
        const vehicleMakeModel = vehicle ? `${vehicle.make} ${vehicle.model}` : 'Unknown vehicle';
        // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
        if (vehicle.weight <= this.towingCapacity) {
            // TODO: If it is, log that the vehicle is being towed
            console.log(`${vehicleMakeModel} is being towed.`);
        }
        else {
            // TODO: If it is not, log that the vehicle is too heavy to be towed
            console.log(`${vehicleMakeModel} is too heavy to be towed.`);
        }
    }
    // TODO: Override the printDetails method from the Vehicle class
    printDetails() {
        // TODO: The method should call the printDetails method of the parent class
        super.printDetails();
        // TODO: The method should log the details of the Truck
        // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
        console.log(`VIN: ${this.vin}`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Weight: ${this.weight} kg`);
        console.log(`Top Speed: ${this.topSpeed} km/h`);
        console.log(`Color: ${this.color}`);
        console.log(`Towing Capacity: ${this.towingCapacity} kg`);
        console.log(`Wheels: ${this.wheels.length} wheels`);
    }
}
// Export the Truck class as the default export
export default Truck;
