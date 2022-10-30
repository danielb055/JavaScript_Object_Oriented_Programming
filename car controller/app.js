import Car from './model/Car.js';



//! Link the car image from the HTML to our JavaScript file:
const carImg1 = document.getElementsByClassName("car")[0];
const carImg2 = document.getElementsByClassName("car")[0].cloneNode(true);

const rootElement = document.getElementById("root");
rootElement.appendChild(carImg2);
carImg2.style.top = carImg1.offsetTop + 10 + "px";

const car1 = new Car();
const car2 = new Car();


car1.currentSpeed = +carImg1.style.left.split('px')[0];
car2.currentSpeed = +carImg2.style.left.split('px')[0];



car1.startEngine();
car1.handBreakOff();

car2.startEngine();
car2.handBreakOff();


document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
    }
    if (e.key === "ArrowDown") {
    }
    if (e.key === "a") {
        car2.deaccelerate();
        carImg2.style.left = car2.currentSpeed + 'px'
        console.log(carImg2.style.left);
        console.log(car2.tankVolume)
    }
    if (e.key === "d") {
        car2.accelerate();
        carImg2.style.left = car2.currentSpeed + 'px'
        console.log(carImg2.style.left);
        console.log(car2.tankVolume)
    }

})

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
        carImg1.style.rotate = "-90deg";
        carImg1.style.top = +carImg1.style.top.split('px')[0] - car1.accelerationRatio * 5 + 'px'
        console.log(carImg1.style.top)
    }
    if (e.key === "ArrowDown") {
        carImg1.style.rotate = "90deg";
        carImg1.style.top = +carImg1.style.top.split('px')[0] + car1.accelerationRatio * 5 + 'px'
        console.log(carImg1.style.top)
    }
    if (e.key === "ArrowLeft") {
        car1.deaccelerate();
        carImg1.style.rotate = "-180deg";

        carImg1.style.left = car1.currentSpeed + 'px'
        console.log(carImg1.style.left);
        console.log(car1.tankVolume)
    }
    if (e.key === "ArrowRight") {
        car1.accelerate();
        carImg1.style.rotate = "0deg";

        carImg1.style.left = car1.currentSpeed + 'px'
        console.log(carImg1.style.left);
        console.log(car1.tankVolume)
    }

})



const startEngineBtn = document.createElement("button");
startEngineBtn.innerHTML = "Start Engine";
startEngineBtn.addEventListener('click', () => {
    car1.startEngine()
})

document.body.appendChild(startEngineBtn)


const stopEngineBtn = document.createElement("button");
stopEngineBtn.innerHTML = "Stop Engine";
stopEngineBtn.addEventListener('click', () => {
    car1.stopEngine()
})

document.body.appendChild(stopEngineBtn)


const handBreakOnBtn = document.createElement("button");
handBreakOnBtn.innerHTML = "Hand Break On";
handBreakOnBtn.addEventListener('click', () => {
    car1.handBreakOn()
})

document.body.appendChild(handBreakOnBtn)



const handBreakOffBtn = document.createElement("button");
handBreakOffBtn.innerHTML = "Hand Break Off";
handBreakOffBtn.addEventListener('click', () => {
    car1.handBreakOff()
})

document.body.appendChild(handBreakOffBtn)



const readKmsBtn = document.createElement("button");
readKmsBtn.innerHTML = "Read KMs";
readKmsBtn.addEventListener('click', () => {
    car1.readKms()
})

document.body.appendChild(readKmsBtn)



const accelerateBtn = document.createElement("button");
accelerateBtn.innerHTML = "Accelerate";
accelerateBtn.addEventListener('click', () => {
    car1.accelerate();
    carImg1.style.left = car1.currentSpeed + 'px'
    console.log(carImg1.style.left);
})

document.body.appendChild(accelerateBtn)


const deaccelerateBtn = document.createElement("button");
deaccelerateBtn.innerHTML = "Deaccelerate";
deaccelerateBtn.addEventListener('click', () => {
    car1.deaccelerate();
    carImg1.style.left = car1.currentSpeed + 'px'
    console.log(carImg1.style.left);
})

document.body.appendChild(deaccelerateBtn)


const fillTankBtn = document.createElement("button");
fillTankBtn.innerHTML = "Fill Tank";
fillTankBtn.addEventListener('click', () => {
    let addedVolume = +prompt("Please type how much volume you want to fill");
    car1.fillTank(addedVolume);
})

document.body.appendChild(fillTankBtn)