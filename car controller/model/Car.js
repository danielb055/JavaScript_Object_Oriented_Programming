export default class Car {
    constructor(name = "", model = "", makeYear = 1990, horsePower = 200, accelerationRatio = 1.2, tankVolume = 80, maxSpeed = 10340) {
        this.name = name;
        this.model = model;
        this.makeYear = makeYear;
        this.horsePower = horsePower;
        this.accelerationRatio = accelerationRatio;
        this.tankVolume = tankVolume;
        this.maxSpeed = maxSpeed;

        this.isStarted = false;
        this.handBreak = true;
        this.currentSpeed = 0;
        this.km = 0;
        this.gasConsumption = .008; // for each 1 km;
    }

    startEngine() {
        if (!this.isStarted) {
            if (this.tankVolume > 0) {
                this.isStarted = true;
                this.lowGasCheck();
            } else {
                alert("Please fill up the tank first");
            }
        } else {
            alert("The car is already running");
        }
    }


    stopEngine() {
        this.isStarted = false;
    }

    accelerate() {
        if (this.isStarted === true) {
            if (this.currentSpeed < this.maxSpeed) {
                if (this.handBreak === false) {
                    this.currentSpeed = this.currentSpeed * this.accelerationRatio || 1;
                    this.km = this.currentSpeed * this.accelerationRatio;
                    //this.tankVolume = this.tankVolume - (this.km * this.gasConsumption);
                    this.lowGasCheck()
                    this.speedAlert()
                } else {
                    alert("The handBreak is on, please release it before trying to accelerate")
                }
            } else {
                alert("The car is already running at max speed");
            }
        } else {
            alert("Please, turn on the engine first")
        }
    }
    deaccelerate() {
        if (this.isStarted === true) {
            if (this.currentSpeed > 0) {
                this.currentSpeed = this.currentSpeed / this.accelerationRatio;
                //this.tankVolume = this.tankVolume - (this.km * this.gasConsumption);
                this.lowGasCheck()
                this.speedAlert()
            } else {
                alert("the car already came to full stop! Can't deaccelerate anymore");
            }
        } else {
            alert("Please, turn on the engine first")

        }
    }

    break() {
        this.currentSpeed = 0;
    }
    handBreakOn() {
        this.handBreak = true;
    }

    handBreakOff() {
        this.handBreak = false;
    }

    readKms() {
        alert(`The current KM for the car is ${this.km} km.`);
    }
    speedAlert() {
        if (this.currentSpeed >= this.maxSpeed) {
            alert("The car is running at full speed, please slow down or the car will break!!!");
        }
    }


    lowGasCheck() {
        if (this.tankVolume < 20) {
            this.isStarted = false;
            alert("The gas about to run out , consider fulling up the tank first");
        }
    }


    fillTank(volume) {
        this.tankVolume = this.tankVolume + volume;
    }
}

