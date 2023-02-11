//pass in dict of cakes : {<cake num>:[cake x, cake y], ...}
//and player img coordinates and player width

//returns a key for the cake dict if a cake is in grabbing distance
//otherwise, returns null - no valid cake to pick up
function GetNearestCake(cakes,playerCornerX,playerCornerY,playerWidth){
  let playerX = playerCornerX + playerWidth/2
  let playerY = playerCornerY + playerWidth/2
  let minDist = 5000;
  let nearestCake = null;
  //iterate through each cake in dict
  for (var key in cakes) {
    //get cake coords
    var x = cakes[key][0];
    var y = cakes[key][1];
    //get distance from player to cake
    var dist = Math.sqrt((playerX-x)**2 + (playerY - y)**2);
    //store cake key and distance if it is new shortest distance
    console.log(dist);
    if (dist<minDist){
      minDist = dist;
      nearestCake = key;
    }
  } 
  //if a cake has been found
  if(nearestCake !== null){
    //if cake is within grab range
    if (minDist <= (playerWidth*1.25)){
      return nearestCake;
    }
    //if too far, return null
    else{
      return null;
    }
  }
  //no cake found, return null
  else{
    return null;
  }
}

//input cart position and image size, and player position and player size
//outputs true/false if the cart is in depositing distance
function CheckCartDistance(cartCornerX,cartCornerY,cartImgWidth,playerCornerX,playerCornerY,playerWidth){
  let cartX = cartCornerX + cartImgWidth/2;
  let cartY = cartCornerY + cartImgWidth/2;
  let playerX = playerCornerX + playerWidth/2
  let playerY = playerCornerY + playerWidth/2
  let dist = Math.sqrt((playerX - cartX)**2 + (playerY - cartY)**2);
  //if edge of cart and player are touching
  if (dist<(cartImgWidth/2 + playerWidth/2)){
    return true;
  }
  else{
    return false;
  }
}

function PickUpCake(){
  return null;
}