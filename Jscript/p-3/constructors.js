// function Person(name, age){
//     this.name=name
//     this.age=age
// }


// function Car(make, model){
//     this.make = make;
//     this.model = model;
// }
// let myCar = new Car('Toyota', 'Corolla');

// console.log(myCar);


class Vehicle{
    constructor(make,model1){
        this.make = make
        this.model1 = model1
    }
    start(){
        return `${this.make} is a new brand`
    }
}
// Creating an instance of Vehicle
const newCar = new Vehicle('Toyota', 'Camry');

// Using the start method
console.log(newCar.start()); 
