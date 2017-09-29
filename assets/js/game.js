function Game(numberOfBricks) {
    this.paddle;
    this.ball;
    this.numberOfBricks = numberOfBricks;
    this.bricks = [];

    this.start = function() {
        this.paddle = new Paddle(w / 2 - 25, h - 50, 50, 5);
        this.ball = new Ball(w / 2 - 10, h / 2 - 10, 20, 3);

        for (var x = 0; x < this.numberOfBricks; x++) {
            this.bricks[x] = new Brick(random(w), random(h * 0.8), 20);
        }
    }

    this.run = function() {
        this.paddle.draw();

        this.ball.draw();
        this.ball.move();

        for (var x = 0; x < this.numberOfBricks; x++) {
            this.bricks[x].draw();
        }

        if (keyIsDown(LEFT_ARROW)) {
            this.paddle.move(0);
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.paddle.move(1);
        }
    }
}