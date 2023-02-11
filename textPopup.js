const text = [
]
function renderText(c, text) {
  c.font = "bold 24px sans-serif";
  var gradient = c.createLinearGradient(600, 350, 650, 450);
  gradient.addColorStop(0, "rgb(255, 0, 0)");
  gradient.addColorStop(1, "rgb(255, 255, 0)");
  c.fillStyle = gradient;
  c.fillText(text, 700, 340);
}