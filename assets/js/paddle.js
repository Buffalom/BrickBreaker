function Paddle(x, y, width, velocity) {
    this.pos = createVector(x, y);
    this.width = width;
    this.height = 10;
    this.velocity = velocity;

    this.draw = function() {
        rect(this.pos.x, this.pos.y, this.width, this.height);
    }

    this.move = function(direction) {
        switch (direction) {
            case 0:
                if (this.pos.x >= 0) {
                    this.pos.x -= this.velocity;
                }
                break;
            case 1:
                if (this.pos.x + this.width <= w) {
                    this.pos.x += this.velocity;
                }
                break;
        }
    };
}