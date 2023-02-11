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
    var coords = [[tables[tableNum][0]+quads[quadNum][0], tables[tableNum][1]+quads[quadNum][1]]]
    if (!(temp.includes(coords))) {
      temp.push(coords);
      // append(temp, coords);
      // temp += coords;
    }
    i++;
    
    for (let j=0; j<temp.length;j++) {
      cakes[j] = temp[j]
    }
  }
}

function drawCakes(c){
  for (let i = 0; i < cakes.length; i++) {
    cakeImgs[i] = new Image();
    cakeImgs[i].src = "./assets/cake1.png"
    c.drawImage(cakeImgs[i], cakes[i][0], cakes[i][1], cakeSize, cakeSize)
  }
  // console.log("cakes")
}

genCakes(tables);
console.log(cakes)

