class Star {
    name;
    mass;
    radius;
    distance = 0; // star is in the center of the frame

    constructor(name, radius, mass, color) {
        this.name = name;
        this.mass = mass;
        this.radius = radius;
        this.color = color;
    }

    display() {
        //print(this.name + " size : " + this.radius * radiusScale * 5e-2); // consolelog for debugging
        strokeWeight(this.radius * radiusScale * 5e-2 * 0.1);
        fill(this.color);
        // ellipse(width / 2, height / 2, this.radius * radiusScale * 5e-2, this.radius * radiusScale * 5e-2);
        ellipse(width / 2, height / 2, this.radius * radiusScale / 10, this.radius * radiusScale / 10);
    }
}