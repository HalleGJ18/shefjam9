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
    }
  }
  

  //utility variables
  var canvasWidth = 1280;
  var canvasHeight = 720;
  
  var keyW = false;
  var keyA = false;
  var keyS = false;
  var keyD = false;

  // tables 

  var tables = [];
  var tableImgs = []
  var tableSideLen = 100;

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

  function drawCart(c){
    var cartPos = [640-150, 720-150];
    var cartImgSide = 300;
    let cartImg = new Image();
    cartImg.src = "./assets/cart.png";
    c.drawImage(cartImg,cartPos[0],cartPos[1],cartImgSide,cartImgSide);
  }


  // player character

  var offsetX = 500;
  var offsetY = 300;

  var stepSize = 7;

  let playerSprite = new Image();
  playerSprite.src = "./assets/rexW.png";

  var lastImg = "./assets/rexW.png";

  var globalTime = 0;
  var textTimeOuts = [];

  var cakeSize = tableSideLen/2;

  function movingSprite(c) {
    
    var imgWidth = 100;
    var imgHeight = 100;

    if (keyD == true) {
      playerSprite.src = "./assets/rexD.png";
      lastImg = "./assets/rexD.png";
        if ((offsetX + stepSize + imgWidth <= canvasWidth) && (!(checkTableCollisions(offsetX+stepSize, offsetY, imgWidth)))) {
            offsetX += stepSize;
        }
        // else {
        //     offsetX = canvasWidth - imgWidth
        // }
      }
    if (keyS == true) {
      playerSprite.src = "./assets/rexS.png";
      lastImg = "./assets/rexS.png";
        if ((offsetY + stepSize + imgHeight <= canvasHeight) && (!(checkTableCollisions(offsetX, offsetY+stepSize, imgHeight)))) {
            offsetY += stepSize;
        }
        // else {
        //     offsetY = canvasHeight - imgHeight
        // }
    }
    if (keyA == true) {
      playerSprite.src = "./assets/rexA.png";
      lastImg = "./assets/rexA.png";
        if ((offsetX - stepSize >= 0) && (!(checkTableCollisions(offsetX-stepSize, offsetY, imgWidth)))) {
            offsetX -= stepSize;
        }
        // else {
        //     offsetX = 0
        // }
    }
    if (keyW == true) {
      playerSprite.src = "./assets/rexW.png";
      lastImg = "./assets/rexW.png";
        if ((offsetY - stepSize >= 0) && (!(checkTableCollisions(offsetX, offsetY-stepSize, imgHeight)))) {
            offsetY -= stepSize;
        }
        // else {
        //     offsetY = 0
        // }
    }
    c.drawImage(playerSprite, offsetX, offsetY, imgWidth, imgHeight);
  }


  // animation loop
  function animationLoop(){
    var canvas = document.getElementById("evilCanvas");
    var c = canvas.getContext("2d");
    c.shadowColor = "rgb(50, 50, 50)";
    c.shadowOffsetX = 10;
    c.shadowOffsetY = 10;
    c.shadowBlur = 10;
    c.clearRect(0, 0, canvasWidth, canvasHeight);
    
    drawCart(c);
    genTables(c);
    renderCake(c)
    movingSprite(c)
    //overlap last 2 w is sprite, cake
    if(overLap(offsetX, offsetY, 690, 340, tableSideLen, cakeSize)){
      textTimeOuts.push(globalTime + 100)
      console.log('added');
    }

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
  