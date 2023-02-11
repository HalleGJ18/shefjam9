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
  // let gradient = c.createLinearGradient(x, y, x + 50, y + 100);
  // gradient.addColorStop(0, "rgb(255, 0, 0)");
  // gradient.addColorStop(1, "rgb(255, 255, 0)");
  // c.fillStyle = gradient;
  let r = Math.floor(Math.random()*text.length)
  c.fillText(text[r], x, y);
}

function renderPickUpText(c) {
  textTimeOuts.forEach(pair => {
    if(pair[0] > globalTime){
      console.log(pair);
      renderText(c, cakes[pair[1]][0], cakes[pair[1]][1])
    }
  });

}