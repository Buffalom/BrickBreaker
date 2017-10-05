let w = window.innerWidth;
let h = window.innerHeight;
let numberOfBricks = 100;
let speed = h / 60;
let game;

function setup() {
  createCanvas(w, h);
  angleMode(DEGREES);

  game = new Game(numberOfBricks, speed);
  game.start();
}

function draw() {
  background(0);
  stroke(255);
  fill(255);

  game.run();
}

function touchMoved() {
  var currentMouseX = mouseX - game.paddle.width / 2;
  if (currentMouseX >= 0 && currentMouseX <= w) {
    game.paddle.pos.x = mouseX - game.paddle.width / 2;
  }
}