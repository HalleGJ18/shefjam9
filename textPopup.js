function renderText(c, text, x, y) {
  c.font = "bold 24px sans-serif";
  // let gradient = c.createLinearGradient(x, y, x + 50, y + 100);
  // gradient.addColorStop(0, "rgb(255, 0, 0)");
  // gradient.addColorStop(1, "rgb(255, 255, 0)");
  // c.fillStyle = gradient;
  // let r = Math.floor(Math.random()*text.length)
  c.fillText(text, x, y);
}

function renderPickUpText(c) {
  textTimeOuts.forEach(time => {
    console.log(time, globalTime);
    if(time[0] > globalTime){
      console.log('render');
      renderText(c, time[1], offsetX, offsetY);
    }
  });

}