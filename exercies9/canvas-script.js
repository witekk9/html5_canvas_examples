window.onload = function () {

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    var g = 0.098; // gravity

    // Ball 1
    var ball1 = new Ball(30, 'purple');
    ball1.x = 100;
    ball1.y = 80;
    ball1.context = context;

    // Ball 2
    var ball2 = new Ball(30, 'purple');
    ball2.x = 300;
    ball2.y = 80;
    ball2.context = context;

    window.requestAnimationFrame(animationLoop);

    // Velocity
    ball1.vy = 0;
    ball2.vy = -2;

    function animationLoop() {

        // Clear Canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Update
        // Ball1
        ball1.vy = ball1.vy + g;
        ball1.y = ball1.y + ball1.vy;
        // Ball2
        ball2.vy = ball2.vy + g;
        ball2.y = ball2.y + ball2.vy;

        // Draw
        ball1.draw();
        ball2.draw();

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

