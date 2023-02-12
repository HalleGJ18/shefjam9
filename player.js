// player character movement
let playerSprite = new Image();
playerSprite.src = "./assets/rexW.png";

var lastImg = "./assets/rexW.png";

function movingSprite(c) {

  if (keyD == true) {
    playerSprite.src = "./assets/rexD.png";
    lastImg = "./assets/rexD.png";
      if ((offsetX + stepSize + playerWidth <= canvasWidth) && (!(checkTableCollisions(offsetX+stepSize, offsetY, playerWidth)))) {
          offsetX += stepSize;
      }
    }
  if (keyS == true) {
    playerSprite.src = "./assets/rexS.png";
    lastImg = "./assets/rexS.png";
      if ((offsetY + stepSize + playerWidth <= canvasHeight) && (!(checkTableCollisions(offsetX, offsetY+stepSize, playerWidth)))) {
          offsetY += stepSize;
      }
  }
  if (keyA == true) {
    playerSprite.src = "./assets/rexA.png";
    lastImg = "./assets/rexA.png";
      if ((offsetX - stepSize >= 0) && (!(checkTableCollisions(offsetX-stepSize, offsetY, playerWidth)))) {
          offsetX -= stepSize;
      }
  }
  if (keyW == true) {
    playerSprite.src = "./assets/rexW.png";
    lastImg = "./assets/rexW.png";
      if ((offsetY - stepSize >= 0) && (!(checkTableCollisions(offsetX, offsetY-stepSize, playerWidth)))) {
          offsetY -= stepSize;
      }
  }
  c.drawImage(playerSprite, offsetX, offsetY, playerWidth, playerWidth);
}

function resetCharacters(){
  offsetX = cartPosX+100;
  offsetY = cartPosY+10;
  regularManX = 0;
  regularManY = 0;
}