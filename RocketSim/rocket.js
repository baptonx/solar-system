var moving = false;
class Rocket {

    constructor(isp, wetmass, drymass, img) {
        //graphic param
        this.height = 50;
        this.width = 10;
        this.x = 0; // start at ( OriginalX, OriginalY ) on the canva
        this.y = 0;
        this.img = img;
        // rocket values
        this.fuel = wetmass - drymass; // mass of the fuel
        this.mass = this.fuel + drymass; // mass for filled rocket -> M0
        this.drymass = drymass; // mass for the empty rocket -> Mf
        this.isp = isp; // engine specific impulse
        this.totalDeltaV = this.isp * g * Math.log(wetmass / drymass); // total amount of deltaV (Single Stage)
        this.debit = 298.7 * 9; // mass of fuel burned every second by the 9 Merlin engines
        // rocket movement
        this.velocity = 0; // rocket velocity relative to the ground
        this.moving = false;
        this.thrust = 0;
    }

    launch() {
        document.onkeydown = function(event) {
            if (event.keyCode == 32) {
                moving = true;
            }
        };
        if (moving) {
            this.fire();
            this.move();
        }
    }


    fire() {
        if (this.fuel > 0) {
            this.fuel -= this.debit / fps; // fuel amount decrease every frame
            this.mass = this.fuel + this.drymass; // recomputing the total mass;
            // Calculate thrust value T = p * Ve
            this.thrust = this.debit * this.isp * g;
            console.log(this.thrust);
        } else {
            this.thrust = 0;
        }
    }

    move() {
        if (this.thrust > 0) {
            var Ms = this.mass; // mass before burning fuel
            console.log(Ms);
            this.fire();
            var Me = this.mass; // mass after burning fuel
            console.log(Me);
            this.velocity += this.isp * g * Math.log(Ms / Me) / fps; // deltaV gained in one frame
            this.y += this.velocity;
            console.log("Y = " + this.y);
        } else {
            if (this.y < 0) {
                this.velocity = 0;
            } else {
                this.velocity += (-g) / fps;
                this.y += this.velocity;
                console.log("Y = " + this.y);
            }
        }
    }


    display() {
        fill(230);
        rect(this.x, this.y, this.width, this.height);
        triangle(this.x, this.y + this.height, this.x + this.width + 1, this.y + this.height, this.x + (this.width + 1) / 2, this.y + this.height * 1.2)
    }
}