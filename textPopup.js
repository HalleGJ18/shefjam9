const text = [
  "that's good!",
  "that's fine!",
  "that's ok!",
  "that's not great!",
  "that's terrible!",
  "so villinous!",
  "naughty!",
  "how could you!",
  "evil!",
  "think of the shareholders qwq!"
]

function renderText(c, x, y) {
  c.font = "bold 24px sans-serif";
  var gradient = c.createLinearGradient(x, y, x + 50, y + 100);
  gradient.addColorStop(0, "rgb(255, 0, 0)");
  gradient.addColorStop(1, "rgb(255, 255, 0)");
  c.fillStyle = gradient;
  let r = Math.floor(Math.random()*text.length)
  c.fillText(text[r], x, y);
}

function renderCake(c){
  let cakeSprite = new Image();
  cakeSprite.src = "./assets/cake1.png"

  c.drawImage(cakeSprite, 700, 350, 50, 50);

}