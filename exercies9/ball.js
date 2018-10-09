function Ball(radius, color) {
    // Base
    var ball = this;

    // Specifications
    ball.r = radius || 10;
    ball.c = color || 'red';
    ball.x = 0;
    ball.y = 0;
    ball.m = 0;
    ball.vx = 0;
    ball.vy = 0;
    ball.context = null;
}

Ball.prototype.draw = function () {
    // Base
    var ball = this;

    // Check Context
    if(!ball.context){return}

    // Draw Ball
    ball.context.beginPath();
    ball.context.fillStyle = ball.c;
    ball.context.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI);
    ball.context.fill();

};