window.onload = function () {

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    // // Red rectangle
    // context.fillStyle = "red";
    // context.fillRect(50, 50, 100, 40);
    // context.fill();

    // // Scale
    // context.scale(2, 2);

    // // Blue rectangle
    // context.fillStyle = "blue";
    // context.fillRect(50, 50, 100, 40);
    // context.fill();

    // // Scale
    // context.scale(2, 2);

    // // Green rectangle
    // context.fillStyle = "green";
    // context.fillRect(50, 50, 100, 40);
    // context.fill();

    // var radian = Math.PI / 180;

    // // Rotate
    // context.rotate(-10 * radian);

    // // Rectangle
    // context.fillStyle = "red";
    // context.fillRect(250, 250, 400, 160);
    // context.fill();

    // // Original Rectangle
    // context.fillStyle = "red";
    // context.fillRect(50, 50, 160, 160);
    // context.fill();

    // // Translate Canvas
    // context.translate(300, 200);

    // // Translated Rectangle
    // context.fillStyle = "red";
    // context.fillRect(50, 50, 160, 160);
    // context.fill();

    // Red Rectangle
    context.fillStyle = "red";
    context.fillRect(150, 150, 200, 100);
    context.fill();

    // Scale Transform
    context.transform(1.5, 0, 0, 1.5, 0, 0);

    // Blue Rectangle
    context.fillStyle = "blue";
    context.fillRect(150, 150, 200, 100);
    context.fill();

    // Scale Transform
    context.transform(1.5, 0, 0, 1.5, 0, 0);

    // Green Rectangle
    context.fillStyle = "green";
    context.fillRect(150, 150, 200, 100);
    context.fill();

    // setTransform - start from the beginning of the context

    // Scale Transform
    context.resetTransform();

    // Purple Rectangle
    context.fillStyle = "purple";
    context.fillRect(150, 150, 200, 100);
    context.fill();

};

