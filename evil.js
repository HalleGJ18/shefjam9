// Called initially and whenever the window resizes to update the canvas
// size and width/height variables.
function sizeCanvas() {
  const canvas = document.getElementById("evil");
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}

// clear canvas and redraw all elements in current position
const ctx = document.getElementById("evil").getContext("2d");
  ctx.clearRect(0, 0, width, height);
//   for (let boid of boids) {
//     drawBoid(ctx, boid);
//   }

window.onload = () => {
    // Make sure the canvas always fills the whole window
    window.addEventListener("resize", sizeCanvas, false);
    sizeCanvas();
  
    // init game
  
    // Schedule the main animation loop

  };
  