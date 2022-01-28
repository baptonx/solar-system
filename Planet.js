class Coordinate {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class Planet {


    constructor(name, distanceToStar, radius, mass, color) {
        this.name = name;
        this.mass = mass;
        this.radius = radius;
        this.distance = distanceToStar;
        this.color = color;
        this.x = this.distance;
        this.y = 0;
        this.time = 0;
        this.coordinates = Array();
    }

    computeTrajectory() {
        // this.x = this.distance * Math.cos(Math.sqrt(G * Msun / pow(this.distance, 3)) * this.time);
        // print("X = " + this.x * distanceScale);
        // this.y = this.distance * Math.sin(Math.sqrt(G * Msun / pow(this.distance, 3)) * this.time);
        // print("Y = " + this.y * distanceScale);
        // this.time += timewarp * 86400;
        // print("Time = " + this.time / 86400);
        // this.coordinates.push(new Coordinate(width / 2 + this.x * distanceScale, height / 2 + this.y * distanceScale));
        // strokeWeight(1);
        // stroke(this.color);
        // beginShape(LINES);
        // for (var i = 0; i < this.coordinates.length; i++) {
        //     vertex(this.coordinates[i].x, this.coordinates[i].y);
        // }
        // endShape();
        strokeWeight(50);
        stroke(this.color);
        ellipse(width / 2, height / 2, this.distance * distanceScale, this.distance * this.distanceScale);
    }

    update() {
        document.onkeydown = function(event) {
            if (event.keyCode == 84) {
                timewarp += 5;
            }
            if (event.keyCode == 82) {
                timewarp = 1;
            }
        };
        this.x = -1 * this.distance * Math.cos(Math.sqrt(G * Msun / pow(this.distance, 3)) * this.time);
        //print("X = " + this.x * distanceScale);
        this.y = this.distance * Math.sin(Math.sqrt(G * Msun / pow(this.distance, 3)) * this.time);
        //print("Y = " + this.y * distanceScale);
        this.time += timewarp * 86400;
        print("Time = " + this.time / 86400 * timewarp);
    }

    display() {
        //print(this.name + " size : " + this.radius * radiusScale * 2);
        strokeWeight(this.radius * radiusScale * 0.1);
        stroke(52);
        fill(this.color);
        //ellipse(width / 2 + this.x * radiusScale, height / 2 + this.y * radiusScale, this.radius * distanceScale * 2, this.radius * distanceScale * 2);
        ellipse(width / 2 + this.x * distanceScale, height / 2 + this.y * distanceScale, this.radius * radiusScale * 2, this.radius * radiusScale * 2);

    }

}