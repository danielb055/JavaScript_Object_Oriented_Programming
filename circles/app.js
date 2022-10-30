import Circle from "./model/Circle.js";
const rangeElement = document.getElementById("count");
const circlesContainer = document.getElementById("circles-container")

function randomNumber() {
    return Math.floor(Math.random() * 500) + 10
}

function randomRGB() {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    return `rgb(${r},${g},${b})`
}

function drawCircles(count) {
    circlesContainer.innerHTML = "";

    for (let i = 0; i < count; i++) {
        const c = new Circle(randomNumber(), randomNumber(), 15, randomRGB())
        c.drawTheCircle()
    }
}


rangeElement.addEventListener("change", () => {
    drawCircles(rangeElement.value);
})