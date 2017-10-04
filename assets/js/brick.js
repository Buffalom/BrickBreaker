function Brick(x, y, width) {
    this.pos = createVector(x, y);
    this.width = width;

    this.draw = function() {
        push();
        noFill();
        rect(this.pos.x, this.pos.y, this.width, this.width);
        pop();
    }
}