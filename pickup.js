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
    var x = cakes[key][0] + cakeSize/2;
    var y = cakes[key][1] + cakeSize/2;
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
    if (minDist <= (playerWidth*1.2)){
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
    addTextTimer(cakes[cakeNumber]);
    let splat = new Audio("./assets/splat.mp3");
    splat.play();
    delete cakes[cakeNumber];
    carriedCakes += 1;
  }
  return cakes;
}

//deposit cakes given lex is next to the cart
function DepositCakes(carriedCakes){
  //update score
  score += carriedCakes;
  //empty bag storage
  carriedCakes = 0;
  let drop = new Audio("./assets/drop.mp3");
  drop.play();
  return carriedCakes;
}

function interactAction(spaceBar, cakes, playerX, playerY, playerWidth, cartX, cartY, cartImgWidth) {
  if (spaceBar){
    let nearestCake = GetNearestCake(cakes,playerX,playerY,playerWidth);
    //pick up nearest cake if nearestCake !== null
    if (nearestCake !== null){
      cakes = PickUpCake(cakes, nearestCake);
      document.getElementById('carryingn').innerHTML = carriedCakes;
    }

    let deposit = CheckCartDistance(cartX,cartY,cartImgWidth,playerX,playerY,playerWidth);
    //deposit cakes at cart if deposit == true
    if (deposit && (carriedCakes>0)){
      carriedCakes = DepositCakes(carriedCakes);
      if(score === 10) {
        genTables()
        genCakes(tables);
        resetCharacters()
      }else if (score === 20){
        genTables()
        genCakes(tables);
        resetCharacters()
      }else if (score === 30){
        genTables()
        genCakes(tables);
        resetCharacters()
      }else if (score === 40){
        window.location.replace("win.html");
      }

      document.getElementById('scoren').innerHTML = score;
      document.getElementById('carryingn').innerHTML = " 0 " ;
    }
    spaceBar = false;
  }
}