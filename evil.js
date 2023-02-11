(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
  })();
  
  //event listeners
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

    renderCake(c);
    movingSprite(c);
    
    //method signature/params may need to be edited once cake pickup is done
    //so cakes can stop being rendered, and score can be updated on deposit
    interactAction(spaceBar,cakes,offsetX,offsetY,playerWidth,cartPosX,cartPosY,cartImgSide);

    //overlap last 2 w is sprite, cake
    if(overLap(offsetX, offsetY, 690, 340, tableSideLen, cakeSize)){
      textTimeOuts.push(globalTime + 100)
      // console.log('added');
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
  