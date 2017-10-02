function Ball(x, y, diameter, speed) {
    this.pos = createVector(x, y);
    this.diameter = diameter;
    this.velocity = createVector(speed, 0);
    //this.velocity.rotate(random(-20, -160));
    this.velocity.rotate(random(360));

    this.draw = function () {
        ellipse(this.pos.x, this.pos.y, this.diameter, this.diameter);
    }

    this.move = function () {
        if (collideLineCircle(0, 0, 0, h, this.pos.x, this.pos.y, this.diameter)) {
            console.log("Ball hit left wall");
            this.velocity.rotate(this.velocity.heading() * (-1) * 2 - 180);
        }
        if (collideLineCircle(0, 0, w, 0, this.pos.x, this.pos.y, this.diameter)) {
            console.log("Ball hit top wall");
            this.velocity.rotate(this.velocity.heading() * (-1) * 2);
        }
        if (collideLineCircle(w, 0, w, h, this.pos.x, this.pos.y, this.diameter)) {
            console.log("Ball hit right wall");
            this.velocity.rotate(this.velocity.heading() * (-1) * 2 - 180);
        }
        this.pos.add(this.velocity);
    }
}