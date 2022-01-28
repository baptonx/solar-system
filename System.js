//masse en kg
let Msun = 1.9891e30;
let Mmercury = 0.3302e24;
let Mvenus = 4.8685e24;
let Mearth = 5.9736e24;
let Mmars = 0.6418e24;
let Mjupiter = 1.8986e27;
let Msaturne = 568.46e24;
let Muranus = 8.6810e25;
let Mneptune = 102.43e24;

//distance du soleil en m 
let Dmercury = 57e9;
let Dvenus = 108e9;
let Dearth = 150e9;
let Dmars = 228e9;
let Djupiter = 781.5e9;
let Dsaturne = 1431e9;
let Duranus = 2877e9;
let Dneptune = 4519.5e9;

//rayon en m
let Rsun = 696342e3;
let Rmercury = 2439.7e3;
let Rvenus = 6051.8e3;
let Rearth = 6378.14e3;
let Rmars = 3402.45e3;
let Rjupiter = 71500e3;
let Rsaturne = 60268e3;
let Ruranus = 25559e3;
let Rneptune = 24764e3;

// echelle
ed = 20 * 400 / (4519e9);
ers = 85 / (3e5);
erp = 50 / (3e5) / 150;
coefT = 3.14 * 1e7;

class System {
    G = 6.67e-11;
    sun = new Star("Sun", Rsun, Msun, sunColor);
    planets = [
        new Planet("Mercury", Dmercury, Rmercury, Mmercury, mercuryColor),
        new Planet("Venus", Dvenus, Rvenus, Mvenus, venusColor),
        new Planet("Earth", Dearth, Rearth, Mearth, earthColor),
        new Planet("Mars", Dmars, Rmars, Mmars, marsColor),
        new Planet("Jupiter", Djupiter, Rjupiter, Mjupiter, jupiterColor),
        new Planet("Saturne", Dsaturne, Rsaturne, Msaturne, saturnColor),
        new Planet("Uranus", Duranus, Ruranus, Muranus, uranusColor),
        new Planet("Neptune", Dneptune, Rneptune, Mneptune, neptuneColor)

    ]
    time = 0;

    constructor() {}


    orbit() {
        this.speed = sqrt((Gc * mc * mSunc / r3c) * pow(10, 16)); //la vitesse de rotation de l'astre
    }

    runtime() {

    }

    showSystem() {
        fill(255, 200);

        for (planet in planets) {
            dist = planet.getDistance();
            rad = planet.getRadius();
            translate(dist, 0);
            ellipse(0, 0, rad * 2, rad * 2);
        }

    }
}