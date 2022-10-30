//! Create a blueprint/class of a car, and create a list of car instances/objects from that blueprint/class and print the list to the console:
//! 1. Create a class for a Car.
//! 2. create an array of car instances/objects from the Car class.
//! 3. console.log the cars array.


console.clear();


//! 1. Create a class for a Car.
//? what is a class in programming languages: a class is a blueprint of a thing "Object" that we can create a copy of from that blueprint/class.
class Car {

    constructor(make, model, horsepower) {
        this.make = make || ""
        this.model = model || ""
        this.horsepower = horsepower || 0

        //* Missing the this keyword to access the properties of an instance of this class to be able to print the values:
        // console.log(make, model, horsepower)
        // console.log(this.make, this.model, this.horsepower)
    }

    accelerate(speed) {
        this.currentSpeed = speed * 1.12
    }

}

//! 2. create an array of car instances/objects from the Car class.
const carsList = []

const car1 = new Car("Nissan", "Skyline", 345)
const car2 = new Car("Mazda", "Skyline", 800)
const car3 = new Car("Mercedce", "Skyline", 567)

carsList.push(car1, car2, car3)

car3.accelerate(9)
//! 3. console.log the cars array.
// console.log(carsList);



class Task {
    static id = 0;

    constructor(taskDescription) {
        this.id = Task.id;
        this.taskDescription = taskDescription || ""
        this.isCompleted = false;

        Task.id++;
    }
}

const task1 = new Task("Task number 1")
const task2 = new Task("Task number 2")


task2.isCompleted = true;

// console.log(task1)
// console.log(task2)


class PartsList {
    constructor(litres, horsepower, speed) {
        this.litres = litres || 0
        this.horsepower = horsepower || 0
        this.speed = speed || 0

    }
}

const parts = []

const parts1 = new PartsList(12, 540, 200)
const parts2 = new PartsList(24, 820, 156)
const parts3 = new PartsList(14, undefined, 56)

parts.push(parts1, parts2, parts3)

console.log(parts)
