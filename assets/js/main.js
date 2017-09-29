let w = window.innerWidth;
let h = window.innerHeight;
let game;

function setup() {
  createCanvas(w, h);
  angleMode(DEGREES);

  game = new Game(10);
  game.start();
}

function draw() {
  background(0);
  stroke(255);
  fill(255);

  game.run();
}