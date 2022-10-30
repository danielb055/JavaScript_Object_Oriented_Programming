import Circle from './model/circle.js'
import Table from "./model/table.js"


//! To create an instance/object of a class:
// const c1 = new Circle(50, "green", { x: 100, y: 300 });

// console.log(c1);

// c1.drawTheCircle()

// const c2 = new Circle(30, "yellow", {
//     x: 200, y: 200
// })

// c2.reportCircle()
// c2.drawTheCircle()




// for (let i = 0; i < 10; i++) {
//     const c = new Circle(i * 5, "gray", { x: 30 * i, y: 30 * i });

//     c.reportCircle()
//     c.drawTheCircle()

//     // if (i % 2) {
//     c.giveLife()
//     c.timedMovement(200)
//     // }
// }


const newTable = new Table()


newTable.startRace()