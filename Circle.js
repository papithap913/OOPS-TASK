class Circle {
    constructor(radius, color = "red") {
        this.radius = radius;
        this.color = color;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }

    toString() {
        return `Circle [radius=${this.radius}, color=${this.color}]`;
    }
}

// Example usage:
const circle = new Circle(5, "blue");
console.log(circle.toString());
console.log("Area:", circle.getArea());
console.log("Circumference:", circle.getCircumference());
