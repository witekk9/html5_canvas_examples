window.onload = function () {

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");


    //var img = new Image();
    //var pokemonTile = new Image();
    //img.src = "regularshow.png";
    //pokemonTile.src = 'pokemons.png';

    //img.onload = function () {
        //context.drawImage(img, 250, 50);

        //context.drawImage(img, 250, 50, 100, 100);

        //context.drawImage(img, 40, 100, 150, 250, 250, 50, 250, 400);
    //};

    // pokemonTile.onload = function () {

    //     context.drawImage(pokemonTile, 0, 0, 200, 200, 0, 0, 200, 200);

    //     context.drawImage(pokemonTile, 400, 180, 200, 200, 200, 0, 200, 200);

    //     context.drawImage(pokemonTile, 1000, 0, 200, 200, 400, 0, 200, 200);

    // };

    //  var amsterdamImage = new Image();
    //  amsterdamImage.src = "amsterdam.jpg";

    //  amsterdamImage.onload = function () {
    //      context.drawImage(amsterdamImage, 180, 35);

    //      var imageData = context.getImageData(180, 35, 570, 380);

    //      for(var i = 0; i < imageData.data.length; i+=4){

    //         var average = (imageData.data[i] + imageData.data[i+1] + imageData.data[i+2]) / 3;

    //         //imageData.data[i] = 0;
    //         //imageData.data[i+1] = 0;
    //         //imageData.data[i+2] = 0;
    //         //imageData.data[i] = 255 - imageData.data[i]; // negative filter
    //         //imageData.data[i+1] = 255 - imageData.data[i+1];
    //         //imageData.data[i+2] = 255 - imageData.data[i+2];
    //         imageData.data[i] = average;
    //         imageData.data[i+1] = average;
    //         imageData.data[i+2] = average;
    //         //imageData.data[i+3] = 50;

    //      }

    //      context.putImageData(imageData, 180, 35);

    //      // Save Canvas image as data url (default png)
    //      var dataURL = canvas.toDataURL();

    //      document.getElementById('canvasImg').src = dataURL;

    // };

    // context.fillStyle = "red";
    // context.fillRect(240, 100, 120, 120);
    // context.save();

    // context.fillStyle = "green";
    // context.fillRect(390, 100, 120, 120);
    // context.save();

    // context.fillStyle = "blue";
    // context.fillRect(540, 100, 120, 120);
    // context.save();

    // context.restore();
    // context.fillRect(240, 300, 120, 120);

    // context.restore();
    // context.fillRect(390, 300, 120, 120);

    // context.restore();
    // context.fillRect(540, 300, 120, 120);

    // var patternImage = new Image();
    // patternImage.src = "apple.png";

    // patternImage.onload = function () {
    //     var pattern = context.createPattern(patternImage, 'repeat'); //also repeat-x, repeat-y, no-repeat
    //     context.fillStyle = pattern;
    //     context.fillRect(0, 0, 900, 450);
    // };

    // var gradient = context.createLinearGradient(240, 40, 660, 680);
    // gradient.addColorStop(0, "red");
    // gradient.addColorStop(0.25, "blue");
    // gradient.addColorStop(0.5, "green");
    // gradient.addColorStop(0.75, "orange");
    // gradient.addColorStop(1, "white");

    var radialGradient = context.createRadialGradient(570, 380, 300, 570, 300, 20);
    radialGradient.addColorStop(0, "red");
    radialGradient.addColorStop(0.25, "blue");
    radialGradient.addColorStop(0.5, "green");
    radialGradient.addColorStop(0.75, "orange");
    radialGradient.addColorStop(1, "white");

    context.strokeStyle = "blue";
    context.lineWidth = 4;
    context.fillStyle = radialGradient;
    context.rect(240, 40, 420, 420);
    context.stroke();
    context.fill();

}

