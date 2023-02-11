const text = [

function renderCake(c){
  let cakeSprite = new Image();
  cakeSprite.src = "./assets/cake1.png"

  c.drawImage(cakeSprite, 640, 360, 128, 128);

function renderText(c, text) {
  c.font = "bold 36px sans-serif";
  c.shadowColor = "rgb(190, 190, 190)";
  c.shadowOffsetX = 10;
  c.shadowOffsetY = 10;
  c.shadowBlur = 10;
  var gradient = c.createLinearGradient(600, 350, 650, 450);
  gradient.addColorStop(0, "rgb(255, 0, 0)");
  gradient.addColorStop(1, "rgb(255, 255, 0)");
  c.fillStyle = gradient;
  //c.fillStyle = "rgb(255, 0, 0)";
  c.fillText(text, 650, 350);
  //c.font = "48px serif"
  //c.strokeText(text, 650, 350);
}

function renderCake(c){
  let cakeSprite = new Image();
  cakeSprite.src = "./assets/cake1.png"

  c.drawImage(cakeSprite, 640, 360, 128, 128);

}