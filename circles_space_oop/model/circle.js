class Circle {
    constructor(diameter = 10, color = "red", center = { x: 0, y: 0 }) {
        this.diameter = diameter;
        this.color = color;
        this.center = center;
    }


    reportCircle() {
        console.table({ diameter: this.diameter, color: this.color, location: this.center });
    }

    drawTheCircle() {
        const root = document.getElementById("root")
        const circle = document.createElement("div")
        circle.classList.add("circle")

        circle.style.width = this.diameter + "px"
        circle.style.height = this.diameter + "px"

        circle.style.left = this.center.x + "px"
        circle.style.top = this.center.y + "px"

        circle.style.backgroundColor = this.color

        this.circle = circle;

        root.appendChild(circle)
    }

    giveLife() {
        document.body.addEventListener('keypress', (e) => {
            console.log(e.key);
            const rect = this.circle.getClientRects().item(0)

            switch (e.key) {
                case "a": {
                    if (!this.isTouchingLeft()) {
                        this.circle.style.left = rect.left - 10 + "px"
                    }
                    break;
                }
                case "d": {
                    if (!this.isTouchingRight()) {
                        this.circle.style.left = rect.left + 10 + "px"
                    }
                    break;
                }
                case "w": {
                    if (!this.isTouchingTop()) {
                        this.circle.style.top = rect.top - 10 + "px"
                    }
                    break;
                }
                case "s": {
                    if (!this.isTouchingBottom()) {
                        this.circle.style.top = rect.top + 10 + "px"
                    }
                    break;
                }
            }
        })
    }

    randomizeMovementStep() {
        return Math.floor(Math.random() * 60) + 1;
    }

    timedMovement(intervalMs) {
        this.id = setInterval(() => {
            const rect = this.circle.getClientRects().item(0)

            if (!this.isTouchingBottom()) {
                this.circle.style.top = rect.top + this.randomizeMovementStep() + "px"
            } else {
                clearInterval(this.id)
            }
        }, intervalMs)
    }


    didTouchedBoundaries() {
        const rect = this.circle.getClientRects().item(0)
        const root = document.getElementById('root')
        const rootRect = root.getBoundingClientRect()
    }

    isTouchingRight() {
        const rect = this.circle.getClientRects().item(0)
        const root = document.getElementById('root')
        const rootRect = root.getBoundingClientRect()
        if (rect.right >= rootRect.right) {
            return true
        }
        return false;
    }

    isTouchingBottom() {
        const rect = this.circle.getClientRects().item(0)
        const root = document.getElementById('root')
        const rootRect = root.getBoundingClientRect()
        if (rect.bottom >= rootRect.bottom) {
            return true
        }

        return false;
    }

    isTouchingTop() {
        const rect = this.circle.getClientRects().item(0)
        const root = document.getElementById('root')
        const rootRect = root.getBoundingClientRect()
        if (rect.top <= rootRect.top) {
            return true
        }

        return false;
    }

    isTouchingLeft() {
        const rect = this.circle.getClientRects().item(0)
        const root = document.getElementById('root')
        const rootRect = root.getBoundingClientRect()
        if (rect.left <= rootRect.left) {
            return true
        }

        return false
    }
}



export default Circle;

//! Name/ Type: The name of the class becomes a type name for any instance/object created from this class.
//! Properties: Descrips the what an instance of this class should look like, or have like: color, speed, opacity, weight, capacity, diameter...
//! Actions/methods => The actions are the functions that an instance of this class can do on its own data.