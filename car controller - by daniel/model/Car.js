class Car {
    constructor(carImg = "https://e7.pngegg.com/pngimages/978/928/png-clipart-red-sedan-car-door-car-seat-top-view-motor-vehicle-red-car-top-view-orange-car-seat-thumbnail.png", speed = 10, location = { x: 0, y: 0 }) {
        this.carImg = carImg;
        this.location = location;
        this.speed = speed;

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


    randomizeSpeed(maxSpeed = 50) {
        return Math.floor(Math.random() * maxSpeed) + 1
    }

    moveCar(interval = 1000) {
        setInterval(() => {
            this.carElement.style.top = this.carElement.getClientRects().item(0).top + this.randomizeSpeed(20) + "px"
        }, interval)
    }
}


export default Car;