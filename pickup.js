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

//pick up cake with given index
//then render will no longer draw it, and can't be picked up again
//check bag capacity
function PickUpCake(cakes,cakeNumber){
  //remove cake from dictionary of all cakes
  //if space in evil bag for cake
  if (carriedCakes < bagSize){
    delete cakes[cakeNumber];
    carriedCakes += 1;
  }
  return cakes;
}

//deposit cakes given lex is next to the cart
function DepositCakes(carriedCakes){
  //update score
  console.log(score);
  score += carriedCakes;
  //empty bag storage
  carriedCakes = 0;
  return carriedCakes;
}

function interactAction(spaceBar, cakes, playerX, playerY, playerWidth, cartX, cartY, cartImgWidth) {
  if (spaceBar){
    let nearestCake = GetNearestCake(cakes,playerX,playerY,playerWidth);
    //pick up nearest cake if nearestCake !== null
    if (nearestCake !== null){
      let r = Math.floor(Math.random()*text.length)
      textTimeOuts.push([globalTime + 100, text[r]])
      cakes = PickUpCake(cakes, nearestCake);
      textTimeOuts.push([globalTime + 100, cakes[nearestCake]])
      document.getElementById('carrying').innerHTML = "Carried Cakes: " + carriedCakes;
    }

    let deposit = CheckCartDistance(cartX,cartY,cartImgWidth,playerX,playerY,playerWidth);
    //deposit cakes at cart if deposit == true
    if (deposit && (carriedCakes>0)){
      carriedCakes = DepositCakes(carriedCakes);
      document.getElementById('scoren').innerHTML = score;
      document.getElementById('carryingn').innerHTML = " 0 " ;
    }
    spaceBar = false;
  }
}