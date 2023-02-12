// tables 
function genTables(){
    

    let level1 = [[130,30], 
                  [130,130],
                  [30,350],
                  [130,350],
                  [130,590],
                  [345,30],
                  [345,350],
                  [600,30],
                  [600,130],
                  [600, 230],
                  [850,190],
                  [950,290],
                  [950,390],
                  [1050,490],
                  [1150,490]
                ];

    let level2 = [[30,150],
                [130,150],
                [200,490],
                [300,490],
                [700,450],
                [800,325],
                [800,575],
                [300,250],
                [1050,275],
                [1150,275],
                [30,360],
                [700,30],
                [400,30],
                [540,235],
                [1040,590]
              ];
    
    // level selection
    tables = level1;
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
