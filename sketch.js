var cellularAutomata = [];
var GOL;

function setup() {

    createCanvas(600, 500);
    setFrameRate(60);
    cellularAutomata = new CellularAutomata();
    GOL = new GameOfLife();
    GOL.init();
}

function draw() {
    background(255);
    GOL.generate();
    GOL.display();
}

function mouseDragged() {

}

function keyPressed() {
  



}
