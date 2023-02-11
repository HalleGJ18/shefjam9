// import playerSprite from "./player.js";

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
  var canvasWidth = 1280;
  var canvasHeight = 720;
  
  var keyW = false;
  var keyA = false;
  var keyS = false;
  var keyD = false;

  // player character

  var offsetX = 10;
  var offsetY = 10;

  var stepSize = 10;

  var playerRotation = 0

  // function movingSprite() {
  //   // window.requestAnimationFrame(movingSprite);

  //   let playerSprite = new Image();
  //   playerSprite.src = "./assets/rex.png"
    
  //   var canvas = document.getElementById("evilCanvas");
  //   var c = canvas.getContext("2d");
    
  //   var imgWidth = 128;
  //   var imgHeight = 128;

  //   c.clearRect(0, 0, canvasWidth, canvasHeight);

  //   if (keyD == true) {
  //       if (offsetX + stepSize + imgWidth <= canvasWidth) {
  //           offsetX += stepSize;
  //       }
  //       else {
  //           offsetX = canvasWidth - imgWidth
  //       }
  //     }
  //   if (keyS == true) {
  //       if (offsetY + stepSize + imgHeight <= canvasHeight) {
  //           offsetY += stepSize;
  //       }
  //       else {
  //           offsetY = canvasHeight - imgHeight
  //       }
  //   }
  //   if (keyA == true) {
  //       if (offsetX - stepSize >= 0) {
  //           offsetX -= stepSize;
  //       }
  //       else {
  //           offsetX = 0
  //       }
  //   }
  //   if (keyW == true) {
  //       if (offsetY - stepSize >= 0) {
  //           offsetY -= stepSize;
  //       }
  //       else {
  //           offsetY = 0
  //       }
    
  //   }
  //   c.drawImage(playerSprite, offsetX, offsetY, imgWidth, imgHeight);
  // }

  var playerSprite = new PlayerSprite(); 

  function animationLoop(){
    var canvas = document.getElementById("evilCanvas");
    var c = canvas.getContext("2d");

    c.clearRect(0, 0, canvasWidth, canvasHeight);

    playerSprite.moveSprite(c)

    // movingSprite()

    window.requestAnimationFrame(animationLoop)
  }

  window.onload = () => {


    window.requestAnimationFrame(animationLoop)
  }
  