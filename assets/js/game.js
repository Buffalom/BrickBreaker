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
        
        if (collideLineCircle(this.paddle.pos.x + 1, this.paddle.pos.y, this.paddle.pos.x + this.paddle.width - 1, this.paddle.pos.y, this.ball.pos.x, this.ball.pos.y, this.ball.diameter)) {
            console.log("Ball hit paddle from top");
            this.ball.velocity.rotate(this.ball.velocity.heading() * (-1) * 2);
        }
        /*if (collideLineCircle(this.paddle.pos.x, this.paddle.pos.y + 1, this.paddle.pos.x, this.paddle.pos.y + this.paddle.height - 1, this.ball.pos.x, this.ball.pos.y, this.ball.diameter)) {
            console.log("Ball hit paddle from left");
            this.ball.velocity.rotate(this.ball.velocity.heading() * (-1) * 2 - 180);
        }
        if (collideLineCircle(this.paddle.pos.x + this.paddle.width, this.paddle.pos.y + 1, this.paddle.pos.x + this.paddle.width, this.paddle.pos.y + this.paddle.height - 1, this.ball.pos.x, this.ball.pos.y, this.ball.diameter)) {
            console.log("Ball hit paddle from right");
            this.ball.velocity.rotate(this.ball.velocity.heading() * (-1) * 2 - 180);
        }
        if (collidePointCircle(this.paddle.pos.x, this.paddle.pos.y, this.ball.pos.x, this.ball.pos.y, this.ball.diameter)) {
            console.log("Ball hit paddle from top left");
            this.ball.velocity.rotate(this.ball.velocity.heading() * (-1) * 2 - 45);
        }
        if (collidePointCircle(this.paddle.pos.x + this.paddle.width, this.paddle.pos.y, this.ball.pos.x, this.ball.pos.y, this.ball.diameter)) {
            console.log("Ball hit paddle from top right");
            this.ball.velocity.rotate(this.ball.velocity.heading() * (-1) * 2 + 45);
        }*/

        if (keyIsDown(LEFT_ARROW)) {
            this.paddle.move(0);
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.paddle.move(1);
        }
    }
}