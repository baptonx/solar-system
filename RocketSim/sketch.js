let falcon9;
let FalconHeavy;
let earth;

function preload() {
    // imgF9 = loadImage('F9.png');
}

function setup() {
    falcon9 = new Rocket(348, 54100, 33800); // falcon 9 1.1 FT with 9 Merlin 1D+ engines
    earth = new Earth();
    createCanvas(width, height);
    frameRate(30);
}


function draw() {
    background(80, 122, 222);
    earth.display();
    translate(OriginalX, OriginalY);
    rotate(PI);
    falcon9.display();
    falcon9.launch();
}