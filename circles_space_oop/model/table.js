import Circle from "./circle.js";

class Table {
    constructor() {
    }

    startRace() {
        this.c1 = new Circle(50, "red", { x: 200, y: 10 });
        this.c2 = new Circle(50, "lightgreen", { x: 400, y: 10 });

        this.c1.drawTheCircle()
        this.c2.drawTheCircle()

        this.c1.timedMovement(600)
        this.c2.timedMovement(600)
    }

}


export default Table;