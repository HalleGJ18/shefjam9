function renderCake(c){
  let cakeSprite = new Image();
  cakeSprite.src = "./assets/cake1.png"

  c.drawImage(cakeSprite, 700, 350, 50, 50);
}

function genCakes(){
  var temp = [];
  var quads = [[0,0],[0,cakeSize],[cakeSize,0],[cakeSize,cakeSize]];
  let i = 0;
  while (i < num_of_cakes) {
    var tableNum = Math.floor(Math.random() * tables.length);
    var quadNum = Math.floor(Math.random() * 4);
    var coords = [tables[tableNum][0]+quads[quadNum][0], tables[tableNum][1]+quads[quadNum][1]]
    if (!(temp.includes(coords))) {
      temp.push(coords);
    }
    i++;

    for (let j=0; j<temp.length; j++) {
      cakes[j] = temp[j]
    }
  }
}

function drawCakes(c){
  for (var key in cakes) {
    cakeImgs[key] = new Image();
    cakeImgs[key].src = "./assets/cake1.png";
    var currentCake = cakes[key];
    c.drawImage(cakeImgs[key], currentCake[0], currentCake[1], cakeSize, cakeSize);
  }
}

genCakes(tables);

