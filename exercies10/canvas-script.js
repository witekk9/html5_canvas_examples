window.onload = function () {

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    var g = 0.098; // gravity

    // Ball 1
    var ball1 = new Ball(30, 'purple');
    ball1.x = 100;
    ball1.y = 80;
    ball1.context = context;

    window.requestAnimationFrame(animationLoop);

    // Velocity
    //ball1.vx = 5; // for horizontal projection
    //ball1.vy = 0;
    ball1.vx = 5; // for angular projection
    ball1.vy = -5;
    

    function animationLoop() {

        // Clear Canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Update
        // Ball1
        ball1.vy = ball1.vy + g;
        ball1.x = ball1.x + ball1.vx;
        ball1.y = ball1.y + ball1.vy;

        // Draw
        ball1.draw();

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

