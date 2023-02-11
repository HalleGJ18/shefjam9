const text = [


]

function renderText(c, text) {
  c.fillText(text, 100, 100);
}

function renderCake(c){
  let cakeSprite = new Image();
  cakeSprite.src = "./assets/cake1.png"

  c.drawImage(cakeSprite, 640, 360, 128, 128);

}