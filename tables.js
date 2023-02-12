// tables 
function genTables(){
    let level1 = [[30,150],
                  [130,150],
                  [300,490],
                  [800,450],
                  [300,250],
                  [1122,275],
                  [700,350],
                  [30,360],
                  [700,30]
                ];

    let level2 = [[130,30], 
                  [130,130],
                  [130,230],
                  [500,30]
                ];
    
    // level selection
    tables = level2;
  }

  function drawTables(c) {
    for (let i = 0; i < tables.length; i++) {
      tableImgs[i] = new Image();
      tableImgs[i].src = "./assets/table.png"
      c.drawImage(tableImgs[i], tables[i][0], tables[i][1], tableSideLen, tableSideLen)
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

  genTables()
  // console.log(tables)