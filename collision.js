//collision between table and player
//pass in colliding object Top Left and Bottom Right coordinates [topLeftX, topLeftY]
//and player top left coordinates
// function CheckCollides(boxTopX,boxTopY,boxBottomX,boxBottomY,playerX,playerY,playerwidth) {
//     //box of player collision = 75% out from centre of sprite (for some leniency and dealing with empty space)
//     let collisionDist = 0.375 * playerwidth;
//     centreX = playerX + (playerwidth/2);
//     centreY = playerY + (playerY/2);
  
//     //check left side collision
//     //or right side collision
//     //combine with
//     //top side collision
//     //bottom side collision
//     if(
//         (
//             (
//                 (
//                     boxTopX>(centreX+collisionDist) 
//                 ) 
//                 && 
//                 (
//                     boxBottomX<(centreX-collisionDist)
//                 )
//             )
//         ) 
//       ||
//         (
//             (
//                 (
//                     boxTopY>(centreY+collisionDist)
//                 ) 
//                 &&
//                 (
//                     boxBottomY<(centreY-collisionDist)
//                 )
//             )
//         )
//     ){
//       return true;
//     }
//     else{
//       return false;
//     }
//   }
  
  //check collision with all tables
  //pass in list of table coords (top left, bottom right), and player position and width
  function CheckTableCollisions(tableCoords, playerX, playerY, playerWidth) {
    //return true if collision occurs
    collides = false;
    //iterate through each table collision box
    for ([boxTopX,boxTopY,boxBottomX,boxBottomY] in tableCoords){
      //check collision with player and obstacle
      if (CheckCollides(boxTopX,boxTopY,boxBottomX,boxBottomY,playerX,playerY,playerWidth)){
        collides = true;
      }
    } 
    return collides;
  }

  // x and y are boxs and w is width of the square
  function overLap(x1,x2,y1,y2,w1,w2) {

    // If the x and y coordinates of opposite corners don't fall with in the bounds of both squares
    // Then they aren't touching
    // Knowing that the objects will be square helps keep the code simple
    return !((x1 > x2 + w2 || x2 > x1 + w1) || (y1 > y2 + w2 || y2 > y1 + w1));
  
  }