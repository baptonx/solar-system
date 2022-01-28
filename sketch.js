let sunimg;
let sunColor;
let MercuryColor;
let venusColor;
let earthColor;
let marsColor;

let system;
let timewarp = 1;


// function preload() {
//     sunimg = loadImage("C:\\Users\\Baptiste\\Documents\\Programmation\\Reforme\\ANGULAR\\SolarSystem\\img\\sun.png");
// }

function setup() {
    sunColor = color('#ffe255');
    mercuryColor = color('#bebba6');
    venusColor = color('#b18e57');
    earthColor = color('#2959a0');
    marsColor = color('#bc5b40');
    jupiterColor = color('#988b7f');
    saturnColor = color('#bba67f');
    uranusColor = color('#4c8894');
    neptuneColor = color('#4365ff');
    solarsystem = new System();
    // timewarp = prompt("Time warp : ");
    createCanvas(distanceScale * 10009.5e9, distanceScale * 10009.5e9);
    frameRate(30);
}



function draw() {

    background(12);
    solarsystem.sun.display();
    for (let i = 0; i < solarsystem.planets.length; i++) {
        solarsystem.planets[i].update();
        solarsystem.planets[i].computeTrajectory();
        solarsystem.planets[i].display();
    }

}