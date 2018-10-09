window.onload = function () {

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    
    // Blue rectangle
    // context.fillStyle = "blue";
    // context.fillRect(10,40,30,70);
    
    // Yellow rectangle
    // context.fillStyle = "yellow";
    // context.fillRect(50,30,60,30);

    // Draw line steps
    //context.beginPath(); // reset the context state
    //context.lineCap = "round"; //also butt and square
    //context.strokeStyle = "red";
    //context.lineJoin = "bevel"; //also miter and round
    //context.lineWidth = 10;
    //context.shadowColor = "black";
    //context.shadowOffsetX = 10;
    //context.shadowOffsetY = 10;
    //context.shadowBlur = 5;
    //context.moveTo(30, 30);
    //context.lineTo(80, 80);
    //context.lineTo(130, 30);
    //context.stroke();

    //var radian = Math.PI / 180;

    //context.beginPath();
    //context.strokeStyle = "blue";
    //context.lineWidth = 10;
    //context.arc(50, 50, 30, 0 * radian, 180 * radian, false);
    //context.stroke();


    //context.beginPath();
    //context.strokeStyle = "red";
    //context.lineWidth = 10;
    //context.moveTo(100,100);
    //context.quadraticCurveTo(50,110,100,150);
    //context.stroke();

    //context.beginPath();
    //context.strokeStyle = "red";
    //context.lineWidth = 10;
    //context.moveTo(430, 130);
    
    //context.bezierCurveTo(470,10,670,10,670,180);
    //context.quadraticCurveTo(670, 380, 430, 520);
    //context.quadraticCurveTo(190, 380, 190, 180);
    //context.bezierCurveTo(190, 10, 400, 10, 430, 130);
    //context.stroke();

    // right
    //drawBezierCurve(430, 130, 470, 10, 670, 10, 670, 180);
    //drawQuadraticCurve(670, 180, 670, 380, 430, 520);

    // left
    //drawBezierCurve(430, 130, 400, 10, 190, 10, 190, 180);
    //drawQuadraticCurve(190, 180, 190, 380, 430, 520);

    // function drawQuadraticCurve(startX, startY, controlX, controlY, endX, endY, curveColor, curveWidth) {
    // var radian = Math.PI / 180;

    // // Draw the quadratic curve
    // context.beginPath();
    // context.strokeStyle = curveColor || "red";
    // context.lineWidth = curveWidth || 2;
    // context.moveTo(startX,startY);
    // context.quadraticCurveTo(controlX,controlY,endX,endY);
    // context.stroke();

    // // Draw the control point as a circle
    // context.beginPath();
    // context.strokeStyle = "black";
    // context.lineWidth = 10;
    // context.arc(controlX, controlY, 5, 0 * radian, 360 * radian, false);
    // context.stroke();

    // // Draw the lines between control point and path
    // context.beginPath();
    // context.lineWidth = 1;
    // context.moveTo(startX, startY);
    // context.lineTo(controlX, controlY);
    // context.lineTo(endX, endY);
    // context.stroke();
    // }
    
    // function drawBezierCurve(startX, startY, controlX1, controlY1, controlX2, controlY2, endX, endY, curveColor, curveWidth) {
    // var radian = Math.PI / 180;

    // // Draw the bezier curve
    // context.beginPath();
    // context.strokeStyle = curveColor || "red";
    // context.lineWidth = curveWidth || 2;
    // context.moveTo(startX, startY);
    // context.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY);
    // context.stroke();

    // // Draw the control one point as a circle
    // context.beginPath();
    // context.strokeStyle = "black";
    // context.lineWidth = 10;
    // context.arc(controlX1, controlY1, 5, 0 * radian, 360 * radian, false);
    // context.stroke();

    // // Draw the control two point as a circle
    // context.beginPath();
    // context.strokeStyle = "black";
    // context.lineWidth = 10;
    // context.arc(controlX2, controlY2, 5, 0 * radian, 360 * radian, false);
    // context.stroke();

    // // Draw the lines between control points and path
    // context.beginPath();
    // context.lineWidth = 1;
    // context.moveTo(startX, startY);
    // context.lineTo(controlX1, controlY1);
    // context.lineTo(controlX2, controlY2);
    // context.lineTo(endX, endY);
    // context.stroke();
    // }

    //context.strokeStyle = "red";
    //context.lineWidth = 11;
    //context.lineJoin = "round";
    //context.fillStyle = "blue";
    //context.rect(50, 200, 200, 200);
    //context.stroke();
    //context.fill();

    //context.fillStyle = "green";
    //context.fillRect(300, 200, 200, 200);

    //context.lineWidth = 3;
    //context.strokeStyle = "blue";
    //context.lineJoin = "square";
    //context.strokeRect(550, 200, 200, 200);

    //context.clearRect(100, 100, 200, 200);
    //context.clearRect(0, 0, 900, 600); //clear entire canvas

    // chessboard

    // var lightCellColor = "#ddb180";
    // var darkCellColor = "#7c330c";

    // //Frame
    // context.strokeStyle = "black";
    // context.strokeRect(250, 100, 400, 400);

    // for(var x = 1; x <= 8; x++){
    //     for(var y = 1;y <= 8; y++){

    //         if((x+y) % 2 == 0){
    //             context.fillStyle = darkCellColor;
    //         } else {
    //             context.fillStyle = lightCellColor;
    //         }

    //         context.fillRect(200 + x * 50, 50 + y * 50, 50, 50);

    //     }
    // }

    //var radian = Math.PI / 180;

    //context.beginPath();
    //context.strokeStyle = "red";
    //context.lineWidth = 15;
    //context.fillStyle = "orange";
    //context.arc(450 , 300, 150, 135 * radian, 360 * radian, false);
    //context.stroke();
    //context.fill();

    // draw polygon

    // var sides = 7;
    // var radius = 100;
    // var centerX = 400;
    // var centerY = 300;
    // var startAngle = 200;
    // var angle = (2* Math.PI) / sides;

    // context.beginPath();
    // context.strokeStyle = "red";
    // context.lineWidth = 5;
    // context.lineJoin = "round";

    // var beginX = centerX + radius * Math.cos(startAngle);
    // var beginY = centerY - radius * Math.sin(startAngle);

    // context.moveTo(beginX, beginY);

    // for(var i = 1; i <= sides; i++){
    //     var currentAngle = startAngle + i * angle;
    //     var currentPointX = centerX + radius * Math.cos(currentAngle);
    //     var currentPointY = centerY - radius * Math.sin(currentAngle);

    //     context.lineTo(currentPointX, currentPointY);
    // }

    // context.closePath();
    // context.stroke();

    //context.font = "45px Verdana"

    //var ftext = "Tekst na canvasie";

    //context.fillText(ftext, 80, 100, 200);

    //var stext = "Inny tekst na canvasie";

    //context.strokeText(stext, 80, 200, 100);

    //var text = "Tekst na canvasie!!!";

    //context.font = "normal bolder xx-large courier";

    //context.fillText(text, 100, 100);

    //context.font = "italic 700 48px fantasy";

    //context.strokeText(text, 100, 200);

    // draw3DText("Tekst w stylu 3D", 100, 300, "normal 600 54px monospace", "violet", 5);

    // function draw3DText(text, x, y, style, color, size){

    //     context.font = style;
    //     context.fillStyle = "black";

    //     for(var i = 0; i < size; i++){
    //         context.fillText(text, x - i, y - i);
    //     }

    //     context.fillStyle = color;
    //     context.fillText(text, x, y)
    // }

    // reference line

    // context.strokeStyle = "red";
    // context.moveTo(300, 20);
    // context.lineTo(300, 430);
    // context.stroke();

    // context.font = "italic 400 18px monospace";

    // context.textAlign = "center"; // diff values: start, left, end, right
    // context.fillText("center", 300, 80);

    // context.strokeStyle = "red";
    // context.moveTo(20, 300);
    // context.lineTo(580, 300);
    // context.stroke();

    // context.textBaseline = "alphabetic"; // diff values: top, hanging, middle, ideographic, bottom
    // context.fillText("alphabetic", 120, 300)

    var text = "Tekst z cieniem";

    context.font = "normal 700 24px times";
    context.shadowColor = "red";
    context.shadowOffsetX = 5;
    context.shadowOffsetY = 5;
    context.shadowBlur = 4;
    context.fillText(text, 100, 100); //can be also strokeText()

}

