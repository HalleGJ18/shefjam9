function renderText(c, text, x, y) {
  c.font = "bold 30px sans-serif";
  let gradient = c.createLinearGradient(x, y, x + 50, y + 100);
  gradient.addColorStop(0, "rgb(255, 0, 0)");
  gradient.addColorStop(1, "rgb(255, 255, 0)");
  c.fillStyle = gradient;
  c.fillText(text, x, y);
}

function renderPickUpText(c) {
  textTimeOuts.forEach(time => {
    if(time[0] > globalTime){
      renderText(c, time[1], time[2], time[3]);
    }
  });

}