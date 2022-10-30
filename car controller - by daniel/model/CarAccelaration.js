class Car2 {
    constructor(carImg = "", accelaration = 5, topSpeed = 50, location = { x: 0, y: 0 }) {
        this.carImg = carImg;
        this.accelaration = accelaration;
        this.topSpeed = topSpeed;
        this.location = location;
        this.currentSpeed = 0;

        this.init();
    }

    init() {
        const rootElement = document.getElementById("root");

        this.carElement = document.createElement("img")
        this.carElement.src = this.carImg
        this.carElement.classList.add("car")
        this.carElement.style.left = this.location.x + "px"
        this.carElement.style.top = this.location.y + "px"

        rootElement.appendChild(this.carElement)
    }

    moveCar(interval = 1000) {
        setInterval(() => {
            if (this.currentSpeed < this.topSpeed) {
                this.currentSpeed += this.accelaration;
            }
            this.carElement.style.top = this.carElement.getClientRects().item(0).top + this.currentSpeed + "px"
        }, interval)
    }

}


export default Car2;