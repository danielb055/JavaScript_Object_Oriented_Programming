class Truck {
    constructor(truckImg = "https://opengameart.org/sites/default/files/tank1_4.png", truckSpeed = 5, truckLocation = { x: 0, y: 0 }) {
        this.truckImg = truckImg;
        this.truckLocation = truckLocation;
        this.truckSpeed = truckSpeed

        this.init();
    }

    init() {
        const placementElement = document.getElementById("placement");
        this.truckElement = document.createElement("img");
        this.truckElement.src = this.truckImg
        this.truckElement.classList.add("truck")
        this.truckElement.style.left = this.truckLocation.x + "px"
        this.truckElement.style.top = this.truckLocation.y + "px"

        placementElement.appendChild(this.truckElement)
    }


    radnoSpeed(maxSpeed = 70) {
        return Math.floor(Math.random() * maxSpeed) + 1
    }

    moveTruck(interval = 1020) {
        setInterval(() => {
            this.truckElement.style.top = this.truckElement.getClientRects().item(0).top + this.radnoSpeed(30) + "px"
        }, interval);
    }
}

export default Truck;