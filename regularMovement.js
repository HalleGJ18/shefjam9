function getStepAmount(playerX,playerY,regularX,regularY){
  let length = Math.sqrt((playerX-regularX)**2 + (playerY - regularY)**2);
  let scale = 2/length;
  let stepX = (playerX-regularX) * scale;
  let stepY = (playerY-regularY) * scale;
  return [stepX,stepY]
}