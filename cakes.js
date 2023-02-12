function isInArray(bigArr, smallArr){
  let present = false;
  for (let item in bigArr) {
    if ((bigArr[item][0] == smallArr[0] && (bigArr[item][1] == smallArr[1]))) {
      present = true;
      break;
    }
  }
  return present;
}

function renderCake(c){
  let cakeSprite = new Image();
  cakeSprite.src = "./assets/cake1.png"

  c.drawImage(cakeSprite, 700, 350, 50, 50);
}

function genCakes(){
  var temp = [];
  var quads = [[0,0],[0,cakeSize],[cakeSize,0],[cakeSize,cakeSize]];

  while (temp.length < num_of_cakes) {
    let tableNum = Math.floor(Math.random() * tables.length);
    let quadNum = Math.floor(Math.random() * 4);
    let coords = [tables[tableNum][0]+quads[quadNum][0], tables[tableNum][1]+quads[quadNum][1]]
    
    if (!(isInArray(temp, coords))) {
      temp.push(coords);
    }
  }

  for (let j=0; j<temp.length; j++) {
    cakes[j] = temp[j]
  }

  console.log(temp)
  console.log(cakes)
}

function drawCakes(c){
  for (var key in cakes) {
    cakeImgs[key] = new Image();
    cakeImgs[key].src = "./assets/cake1.png";
    let currentCake = cakes[key];
    c.drawImage(cakeImgs[key], currentCake[0], currentCake[1], cakeSize, cakeSize);
  }
}

genCakes(tables);

