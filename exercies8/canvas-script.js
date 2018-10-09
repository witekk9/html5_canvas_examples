window.onload = function () {

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    var ball = new Ball(30, 'purple');
    ball.x = 100;
    ball.y = 250;
    ball.context = context;
    ball.draw();


    window.requestAnimationFrame(animationLoop);

    // Velocity
    ball.vx = 1;
    ball.vy = -1;

    // Acceleration
    var ax = 0.05;
    var ay = 0.005;

    function animationLoop() {

        // Clear Canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Update
        //ball.vx = ball.vx + ax;
        //ball.x = ball.x + ball.vx;
        //ball.y = ball.y + ball.vy;
        // Y
        ball.vy = ball.vy + ay;
        ball.y = ball.y + ball.vy;


        // Draw
        ball.draw();

        //Animate
        window.requestAnimationFrame(animationLoop);
    }


    window.requestAnimationFrame = (function(){
        return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function(callback){
                    window.setTimeout(callback, 1000 / 60);
                };
    })();

};

