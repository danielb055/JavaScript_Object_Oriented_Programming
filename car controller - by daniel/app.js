import Car from './model/Car.js';
import Car2 from './model/CarAccelaration.js';
import Truck from './model/Truck.js';


// const car1 = new Car("https://www.seekpng.com/png/small/481-4811908_race-car-sprite-png-car-top-down-png.png", 10, { x: 400, y: 0 })
// const car2 = new Car(undefined, 10, { x: 300, y: 0 })
// const car3 = new Car(undefined, 10, { x: 100, y: 300 })
// const car4 = new Car(undefined, 10, { x: 200, y: 0 })
// const car5 = new Car(undefined, 100, { x: 300, y: 300 })


// const cars = [
//     car1, car2, car3, car4, car5
// ]

// for (const item of cars) {
//     item.moveCar(100)
// }



const car1 = new Car2(
    "https://www.seekpng.com/png/small/481-4811908_race-car-sprite-png-car-top-down-png.png",
    1,
    20
    , { x: 240, y: 0 }
)

const car2 = new Car2(
    "https://www.seekpng.com/png/small/481-4811908_race-car-sprite-png-car-top-down-png.png",
    1.5,
    20
    , { x: 340, y: 0 }
)

car1.moveCar(100)
car2.moveCar(100)


const truck1 = new Truck("https://opengameart.org/sites/default/files/tank1_4.png",
    3,
    { x: 600, y: 0 })

const truck2 = new Truck("https://opengameart.org/sites/default/files/tank1_4.png",
    2,
    { x: 400, y: 0 })

truck1.moveTruck(400, 100)
truck2.moveTruck(400, 100)