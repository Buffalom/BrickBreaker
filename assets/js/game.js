function Game(numberOfBricks, speed) {
    this.paddle;
    this.ball;
    this.numberOfBricks = numberOfBricks;
    this.bricks = [];
    this.score = 0;

    this.start = function() {
        this.paddle = new Paddle(w / 2 - 25, h - 50, h / 10, speed);
        this.ball = new Ball(w / 2 - 10, h * 0.7 - 10, h / 50, speed * 0.6);

        for (var x = 0; x < this.numberOfBricks; x++) {
            this.bricks[x] = new Brick(random(w - 20), random(h * 0.5), 20);
        }
    }

    this.run = function() {
        this.paddle.draw();
        this.ball.draw();
        this.ball.move();
            
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

        if (this.bricks.length > 0) {
            for (var x = 0; x < this.bricks.length; x++) {
                var brickGotHit = false;
                if (collideLineCircle(this.bricks[x].pos.x, this.bricks[x].pos.y, this.bricks[x].pos.x + this.bricks[x].width, this.bricks[x].pos.y, this.ball.pos.x, this.ball.pos.y, this.ball.diameter)) {
                    console.log("Ball hit brick " + x + " from top");
                    this.ball.velocity.rotate(this.ball.velocity.heading() * (-1) * 2);
                    brickGotHit = true;
                } else if (collideLineCircle(this.bricks[x].pos.x, this.bricks[x].pos.y, this.bricks[x].pos.x, this.bricks[x].pos.y + this.bricks[x].width, this.ball.pos.x, this.ball.pos.y, this.ball.diameter)) {
                    console.log("Ball hit brick " + x + " from left");
                    this.ball.velocity.rotate(this.ball.velocity.heading() * (-1) * 2 - 180);
                    brickGotHit = true;
                } else if (collideLineCircle(this.bricks[x].pos.x + this.bricks[x].width, this.bricks[x].pos.y, this.bricks[x].pos.x + this.bricks[x].width, this.bricks[x].pos.y + this.bricks[x].width, this.ball.pos.x, this.ball.pos.y, this.ball.diameter)) {
                    console.log("Ball hit brick " + x + " from right");
                    this.ball.velocity.rotate(this.ball.velocity.heading() * (-1) * 2 - 180);
                    brickGotHit = true;
                } else if (collideLineCircle(this.bricks[x].pos.x, this.bricks[x].pos.y + this.bricks[x].width, this.bricks[x].pos.x + this.bricks[x].width, this.bricks[x].pos.y + this.bricks[x].width, this.ball.pos.x, this.ball.pos.y, this.ball.diameter)) {
                    console.log("Ball hit brick " + x + " from bottom");
                    this.ball.velocity.rotate(this.ball.velocity.heading() * (-1) * 2);
                    brickGotHit = true;
                }
                if (brickGotHit) {
                    this.bricks.splice(x, 1);
                    this.score++;
                    console.log("Score: " + this.score);
                    x--;
                } else {
                    this.bricks[x].draw();
                }
            }

            if (this.ball.pos.y + this.ball.diameter / 2 >= h) {
                console.log("Game over");
                push();
                translate(w / 2, h / 2);
                fill(255);
                noStroke();
                textAlign(CENTER);
                textSize(32);
                text("Game over", 0, -50);
                textSize(48);
                text("Score: " + this.score, 0, 0);
                textSize(24);
                text("Press Space to Restart", 0, 40);
                pop();
                
                if (keyIsDown(32)) {
                    console.log("Restart");
                    window.location = "";
                }
            }
        } else {
            console.log("Win");
            push();
            translate(w / 2, h / 2);
            fill(255);
            noStroke();
            textAlign(CENTER);
            textSize(32);
            text("You Win!", 0, -50);
            textSize(48);
            text("Score: " + this.score, 0, 0);
            textSize(24);
            text("Press Space to Restart", 0, 40);
            pop();
            
            if (keyIsDown(32)) {
                console.log("Restart");
                window.location = "";
            }
        }

        if (keyIsDown(LEFT_ARROW)) {
            this.paddle.move(0);
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.paddle.move(1);
        }

        if (this.ball.pos.y + this.ball.diameter / 2 >= h) {
            this.ball.velocity = 0;
        }
    }
}