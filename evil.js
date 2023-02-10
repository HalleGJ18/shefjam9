(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
  })();
  
  //event listener
  window.addEventListener("keydown", onKeyDown, false);
  window.addEventListener("keyup", onKeyUp, false);
  
  function onKeyDown(event) {
    var keyCode = event.keyCode;
    switch (keyCode) {
      case 68: //d
        keyD = true;
        break;
      case 83: //s
        keyS = true;
        break;
      case 65: //a
        keyA = true;
        break;
      case 87: //w
        keyW = true;
        break;
    }
  }
  
  function onKeyUp(event) {
    var keyCode = event.keyCode;
  
    switch (keyCode) {
      case 68: //d
        keyD = false;
        break;
      case 83: //s
        keyS = false;
        break;
      case 65: //a
        keyA = false;
        break;
      case 87: //w
        keyW = false;
        break;
    }
  }
  
  //neccessary variables
  var tickX = 50;
  var tickY = 50;
  
  var keyW = false;
  var keyA = false;
  var keyS = false;
  var keyD = false;

  // add temp cake
  function cakeTest() {
    window.requestAnimationFrame(cakeTest);

    let newImage = new Image();
    newImage.src = "./assets/cake1small.png"
    
    var canvas = document.getElementById("evilCanvas");
    var c = canvas.getContext("2d");
    
    c.drawImage(newImage, 0, 0, 128, 128);

  }
  
  //main animation function
  function drawStuff() {
    window.requestAnimationFrame(drawStuff);
    var canvas = document.getElementById("evilCanvas");
    var c = canvas.getContext("2d");
  
    c.clearRect(0, 0, 1280, 720);
    c.fillStyle = "blue";
    c.fillRect(tickX, tickY, 100, 100);
  
    if (keyD == true) {
      tickX += 10;
    }
    if (keyS == true) {
      tickY += 10;
    }
    if (keyA == true) {
      tickX -= 10;
    }
    if (keyW == true) {
      tickY -= 10;
    }
  }

//   window.requestAnimationFrame(drawStuff);

  window.onload = () => {
    drawStuff()
    cakeTest()

    
  }
  