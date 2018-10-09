window.onload = function () {

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    var isBackgroundLoaded = false;
    var isHeroLoader = false;
    
    // Background
    var background = new Image();
    background.src = 'back.png';
    background.onload = function () {
        isBackgroundLoaded = true;
        context.drawImage(background, 0, 0, canvas.width, canvas.height);
    };

    // Character
    var hero = new Image();
    hero.src = 'sprite.png';
    hero.onload = function () {
        isHeroLoader = true;
        context.drawImage(hero, 0, 0, 256, 256, 100, 280, 100, 100);
    };

    window.requestAnimationFrame(animationLoop);

    // Cell Specifications
    var cellWidth = 256;
    var cellHeight = 256;
    var currentCell = 0;

    // Time specification
    var animationStart = new Date();

    // Move specification
    var moveAmount = 15;
    var moveX = 100;

    function animationLoop() {
        var animationNow = new Date();
        if(animationNow - animationStart >= 100){

            animationStart = animationNow;

            // Clear
            context.clearRect(0, 0, canvas.width, canvas.height);

            // Update
            currentCell++;
            currentCell %= 6;
            if(moveX >= canvas.width){
                moveX = -1 * cellWidth;
            } else {
                moveX += moveAmount;
            }
            
            // Draw
            if(isBackgroundLoaded){
                context.drawImage(background, 0, 0, canvas.width, canvas.height);
            }

            if(isHeroLoader){
                context.drawImage(hero, currentCell * cellWidth, 0, cellWidth, cellHeight, moveX, 280, 100, 100);
            }
        }

        // Animate
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

