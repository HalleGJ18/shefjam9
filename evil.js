// import "./player.js";

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

  let playerSprite = new Image();
  playerSprite.src = "./assets/rexW.png";

  var lastImg = "./assets/rexW.png";

  function movingSprite() {

    let playerSprite = new Image();
    
    var canvas = document.getElementById("evilCanvas");
    var c = canvas.getContext("2d");
    
    var imgWidth = 128;
    var imgHeight = 128;

    c.clearRect(0, 0, canvasWidth, canvasHeight);

    playerSprite.src = lastImg;

    if (keyD == true) {
      playerSprite.src = "./assets/rexD.png";
      lastImg = "./assets/rexD.png";
        if (offsetX + stepSize + imgWidth <= canvasWidth) {
            offsetX += stepSize;
        }
        else {
            offsetX = canvasWidth - imgWidth
        }
      }
    if (keyS == true) {
      playerSprite.src = "./assets/rexS.png";
      lastImg = "./assets/rexS.png";
        if (offsetY + stepSize + imgHeight <= canvasHeight) {
            offsetY += stepSize;
        }
        else {
            offsetY = canvasHeight - imgHeight
        }
    }
    if (keyA == true) {
      playerSprite.src = "./assets/rexA.png";
      lastImg = "./assets/rexA.png";
        if (offsetX - stepSize >= 0) {
            offsetX -= stepSize;
        }
        else {
            offsetX = 0
        }
    }
    if (keyW == true) {
      playerSprite.src = "./assets/rexW.png";
      lastImg = "./assets/rexW.png";
        if (offsetY - stepSize >= 0) {
            offsetY -= stepSize;
        }
        else {
            offsetY = 0
        }
    
    }

    if (keyW == keyA == keyS == keyD == false) {
      console.log(lastImg);
      playerSprite.src = lastImg;
    }

    c.drawImage(playerSprite, offsetX, offsetY, imgWidth, imgHeight);
  }

  function animationLoop(){
    var canvas = document.getElementById("evilCanvas");
    var c = canvas.getContext("2d");

    movingSprite()

    window.requestAnimationFrame(animationLoop)
  }

  window.onload = () => {


    window.requestAnimationFrame(animationLoop)
  }
  