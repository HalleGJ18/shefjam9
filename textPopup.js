const text = [


]

function renderText() {
  window.requestAnimationFrame(renderText);
  var canvas = document.getElementById("evilCanvas");
  var c = canvas.getContext("2d");

  c.fillText("Hello world", 100, 100);
}