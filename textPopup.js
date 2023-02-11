const text = [

function renderCake(c){
  let cakeSprite = new Image();
  cakeSprite.src = "./assets/cake1.png"

  c.drawImage(cakeSprite, 640, 360, 128, 128);

function renderText() {
  window.requestAnimationFrame(renderText);
  var canvas = document.getElementById("evilCanvas");
  var c = canvas.getContext("2d");

  c.fillText("Hello world", 100, 100);
}