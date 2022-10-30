export default class Circle {

    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.diameter = radius * 2;
        this.color = color;
        this.circlesContainer = document.getElementById("circles-container")
    }

    drawTheCircle() {
        const c = document.createElement("div");
        c.style.width = this.diameter + "px";
        c.style.height = this.diameter + "px";

        c.className = "circle";

        c.style.position = "absolute";
        c.style.backgroundColor = this.color;
        c.style.borderRadius = "50%";

        c.style.left = this.x + "px";
        c.style.top = this.y + "px";

        this.circleDiv = c;

        this.circlesContainer.appendChild(c);
    }
}