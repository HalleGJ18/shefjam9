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