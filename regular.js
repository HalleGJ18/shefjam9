//pass in player position and regularman position
//gets X and Y step for regularman, and primary direction of movement
//Where:
/*
0 : North
1 : East
2 : South
3 : West
*/
//in format [xStep, yStep, direction]
function getStepAmount(playerX,playerY,regularX,regularY){
    let length = Math.sqrt((playerX-regularX)**2 + (playerY - regularY)**2);
    let scale = 2/length;
    let stepX = (playerX-regularX) * scale;
    let stepY = (playerY-regularY) * scale;
    let dir = 0;
    if (Math.abs(stepX) > Math.abs(stepY)){
      if (stepX<0){
        dir = 3;
      }
      else{
        dir = 1;
      }
    }
    else{
      if (stepY<0){
        dir = 0;
      }
      else{
        dir = 2;
      }
    }
    return [stepX,stepY,dir];
  }


let regularSprite = new Image();
regularSprite.src = "./assets/regularMan0.png";

function regularDirection(dir) {
    // 0 North
    if (dir == 0){
        regularSprite.src = "./assets/regularMan0.png";
    }
    // 1 East
    else if (dir == 1) {
        regularSprite.src = "./assets/regularMan1.png";
    }
    // 2 South
    else if (dir == 2) {
        regularSprite.src = "./assets/regularMan2.png";
    }
    // 3 West
    else if (dir == 3) {
        regularSprite.src = "./assets/regularMan3.png";
    }
    
}

function drawRegular(c) {
    var moveDeets = getStepAmount(offsetX, offsetY, regularManX, regularManY);
    regularManX += moveDeets[0];
    regularManY += moveDeets[1];
    regularDirection(moveDeets[2]);
    c.drawImage(regularSprite, regularManX, regularManY, regularManSideLen, regularManSideLen);
};