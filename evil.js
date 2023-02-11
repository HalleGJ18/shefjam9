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
      case 32: //spacebar
        spaceBar = true;
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
      case 32: //spacebar
        spaceBar = false;
        break;
    }
  }
<<<<<<< HEAD
  

  //utility variables
  var canvasWidth = 1280;
  var canvasHeight = 720;

  var playerWidth = 100;
  
  var keyW = false;
  var keyA = false;
  var keyS = false;
  var keyD = false;
  var spaceBar = false;
=======
>>>>>>> b26e0dfb01104f1726d22f91efcf8e0391743e82

  // tables 
  function genTables(c){
    let level1 = [[30,30,tableSideLen,tableSideLen],
                  [130,30,tableSideLen,tableSideLen],
                  [300,490,tableSideLen,tableSideLen],
                  [870,450,tableSideLen,tableSideLen],
                  [300,190,tableSideLen,tableSideLen],
                  [1122,275,tableSideLen,tableSideLen],
                  [700,350,tableSideLen,tableSideLen],
                  [30,360,tableSideLen,tableSideLen],
                  [700,30,tableSideLen,tableSideLen]]

    // level selection
    tables = level1;

    for (let i = 0; i < tables.length; i++) {
      tableImgs[i] = new Image();
      tableImgs[i].src = "./assets/table.png"
      c.drawImage(tableImgs[i],tables[i][0],tables[i][1],tables[i][2], tables[i][3])
    }
  }

  function checkTableCollisions(playerX, playerY, playerSide){
    let hit = false;
    for (let t in tables) {
      hit = overLap(tables[t][0], tables[t][1], playerX, playerY, tableSideLen, playerSide);
      if (hit){break;}
      
    }
    return hit;
  }


  // cakes
  


  // cart
  var cartImgSide = 300;
  var cartPosX = 640-(cartImgSide/2);
  var cartPosY = 720-(cartImgSide/2);
  
  function drawCart(c){
    let cartImg = new Image();
    cartImg.src = "./assets/cart.png";
    c.drawImage(cartImg,cartPosX,cartPosY,cartImgSide,cartImgSide);
  }

  //cakes
  //TODO: POPULATE THIS WITH ACTUAL CAKE POSITIONS
  var cakes = {0:[10,10]};


  // player character movement
  let playerSprite = new Image();
  playerSprite.src = "./assets/rexW.png";

  var lastImg = "./assets/rexW.png";

  var globalTime = 0;
  var textTimeOuts = [];

  var cakeSize = tableSideLen/2;

  function movingSprite(c) {
    
    var imgWidth = playerWidth;
    var imgHeight = playerWidth;

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

  function interactAction(spaceBar, cakes, playerX, playerY, playerWidth, cartX, cartY, cartImgWidth) {
    if (spaceBar){
      let nearestCake = GetNearestCake(cakes,playerX,playerY,playerWidth);
      let deposit = CheckCartDistance(cartX,cartY,cartImgWidth,playerX,playerY,playerWidth);
      console.log("Interaction!");
      //pick up nearest cake if nearestCake !== null
      //deposit cakes at cart if deposit == true
      spaceBar = false;
    }
  }


  // animation loop
  function animationLoop(){
    var canvas = document.getElementById("evilCanvas");
    var c = canvas.getContext("2d");
    
    // shadow
    c.shadowColor = "rgb(50, 50, 50)";
    c.shadowOffsetX = 10;
    c.shadowOffsetY = 10;
    c.shadowBlur = 10;

    // reset frame
    c.clearRect(0, 0, canvasWidth, canvasHeight);
    
    // draw
    drawCart(c);
    genTables(c);
    renderCake(c)
    movingSprite(c)
    //overlap last 2 w is sprite, cake
    if(overLap(offsetX, offsetY, 690, 340, tableSideLen, cakeSize)){
      textTimeOuts.push(globalTime + 100)
      console.log('added');
    }
    //method signature/params may need to be edited once cake pickup is done
    //so cakes can stop being rendered, and score can be updated on deposit
    interactAction(spaceBar,cakes,offsetX,offsetY,playerWidth,cartPosX,cartPosY,cartImgSide);

    for (let i = 0; i < textTimeOuts.length; i++) {
      if (textTimeOuts[i] > globalTime){
        renderText(c, 'lmao')
      }
    }
    
    globalTime += 1;
    window.requestAnimationFrame(animationLoop)
  }

  window.onload = () => {
    window.requestAnimationFrame(animationLoop);
  }
  