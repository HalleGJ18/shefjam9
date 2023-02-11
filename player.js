// player character movement
let playerSprite = new Image();
playerSprite.src = "./assets/rexW.png";

var lastImg = "./assets/rexW.png";

var globalTime = 0;
var textTimeOuts = [];

var cakeSize = tableSideLen/2;

function movingSprite(c) {
  
  var imgWidth = 100;
  var imgHeight = 100;

  if (keyD == true) {
    playerSprite.src = "./assets/rexD.png";
    lastImg = "./assets/rexD.png";
      if ((offsetX + stepSize + imgWidth <= canvasWidth) && (!(checkTableCollisions(offsetX+stepSize, offsetY, imgWidth)))) {
          offsetX += stepSize;
      }
    }
  if (keyS == true) {
    playerSprite.src = "./assets/rexS.png";
    lastImg = "./assets/rexS.png";
      if ((offsetY + stepSize + imgHeight <= canvasHeight) && (!(checkTableCollisions(offsetX, offsetY+stepSize, imgHeight)))) {
          offsetY += stepSize;
      }
  }
  if (keyA == true) {
    playerSprite.src = "./assets/rexA.png";
    lastImg = "./assets/rexA.png";
      if ((offsetX - stepSize >= 0) && (!(checkTableCollisions(offsetX-stepSize, offsetY, imgWidth)))) {
          offsetX -= stepSize;
      }
  }
  if (keyW == true) {
    playerSprite.src = "./assets/rexW.png";
    lastImg = "./assets/rexW.png";
      if ((offsetY - stepSize >= 0) && (!(checkTableCollisions(offsetX, offsetY-stepSize, imgHeight)))) {
          offsetY -= stepSize;
      }
  }
  c.drawImage(playerSprite, offsetX, offsetY, imgWidth, imgHeight);
}