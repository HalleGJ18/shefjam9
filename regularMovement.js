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