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
  

  //utility variables
  var canvasWidth = 1280;
  var canvasHeight = 720;

  var playerWidth = 100;
  
  var keyW = false;
  var keyA = false;
  var keyS = false;
  var keyD = false;
  var spaceBar = false;

  // tables 

  var tables = [];
  var tableImgs = []
  var tableSideLen = 128;

  function genTables(c){
    let level1 = [[30,30,tableSideLen,tableSideLen],
                  [158,30,tableSideLen,tableSideLen],
                  [300,490,tableSideLen,tableSideLen],
                  [870,450,tableSideLen,tableSideLen],
                  [287,159,tableSideLen,tableSideLen],
                  [1122,275,tableSideLen,tableSideLen],
                  [700,350,tableSideLen,tableSideLen],
                  [30,360,tableSideLen,tableSideLen],
                  [700,30,tableSideLen,tableSideLen]]

    tables = level1;

    for (let i = 0; i < tables.length; i++) {
      tableImgs[i] = new Image();
      tableImgs[i].src = "./assets/table.png"
      c.drawImage(tableImgs[i],level1[i][0],level1[i][1],level1[i][2], level1[i][3])
    }
  }


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


  // player character

  var offsetX = 10;
  var offsetY = 10;

  var stepSize = 7;

  let playerSprite = new Image();
  playerSprite.src = "./assets/rexW.png";

  var lastImg = "./assets/rexW.png";


  function movingSprite(c) {
    
    var imgWidth = playerWidth;
    var imgHeight = playerWidth;

    // playerSprite.src = lastImg;


    if (keyD == true) {
      playerSprite.src = "./assets/rexD.png";
      lastImg = "./assets/rexD.png";
        if (offsetX + stepSize + imgWidth <= canvasWidth) {
            offsetX += stepSize;
        }
        else {
            offsetX = canvasWidth - imgWidth
        }
      }
    if (keyS == true) {
      playerSprite.src = "./assets/rexS.png";
      lastImg = "./assets/rexS.png";
        if (offsetY + stepSize + imgHeight <= canvasHeight) {
            offsetY += stepSize;
        }
        else {
            offsetY = canvasHeight - imgHeight
        }
    }
    if (keyA == true) {
      playerSprite.src = "./assets/rexA.png";
      lastImg = "./assets/rexA.png";
        if (offsetX - stepSize >= 0) {
            offsetX -= stepSize;
        }
        else {
            offsetX = 0
        }
    }
    if (keyW == true) {
      playerSprite.src = "./assets/rexW.png";
      lastImg = "./assets/rexW.png";
        if (offsetY - stepSize >= 0) {
            offsetY -= stepSize;
        }
        else {
            offsetY = 0
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
    c.clearRect(0, 0, canvasWidth, canvasHeight);
    
    drawCart(c);
    genTables(c);
    renderCake(c);
    movingSprite(c);
    //method signature/params may need to be edited once cake pickup is done
    //so cakes can stop being rendered, and score can be updated on deposit
    interactAction(spaceBar,cakes,offsetX,offsetY,playerWidth,cartPosX,cartPosY,cartImgSide);

    if(overLap(offsetX, 640, offsetY, 360, 100, 100)){
      
      renderText(c, 'lmao')
    }
    
    window.requestAnimationFrame(animationLoop)

  }

  window.onload = () => {
    window.requestAnimationFrame(animationLoop);
  }
  