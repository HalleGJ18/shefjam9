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

    let level2 = [[130,590], 
                  [70,300],
                  [1000,590],
                  [500,30]
                ];
    
    let level3 = [[30,200],
                  [30,475],
                  [330,30],
                  [650,30],
                  [650,130],
                  [650,230],
                  [1000,30],
                  [1000,130],
                  [1000,230],
                  [1000,330],
                  [1000,430],
                  [650,490],
                  [750,490],
                  [750,590],
                  [300,590],
                  [330,130],
                  [430,130]
                ];
    let level4 = [[190,30],
                  [190,130],
                  [190,230],
                  [190,330],
                  [190,430],
                  [420,290],
                  [420,390],
                  [420,490],
                  [420,590],
                  [770,290],
                  [770,390],
                  [770,490],
                  [770,590],
                  [1000,30],
                  [1000,130],
                  [1000,230],
                  [1000,330],
                  [1000,430],
                ];
    // level selection
    tables = level4;
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