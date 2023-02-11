class PlayerSprite {
    
  constructor(){
    this.canvasWidth = 1280;
    this.canvasHeight = 720;
    
    this.offsetX = 10;
    this.offsetY = 10;
    this.stepSize = 10;

    this.imgWidth = 128;
    this.imgWidth = 128;

    this.spriteImage = new Image();

  }

  moveSprite(c) {
    // window.requestAnimationFrame(movingSprite);

    this.spriteImage.src = "./assets/rex.png"
    
    // var canvas = document.getElementById("evilCanvas");
    // var c = canvas.getContext("2d");
  

    c.clearRect(0, 0, canvasWidth, canvasHeight);

    if (keyD == true) {
        if (this.offsetX + this.stepSize + this.imgWidth <= this.canvasWidth) {
            this.offsetX += this.stepSize;
        }
        else {
            this.offsetX = this.canvasWidth - this.imgWidth
        }
      }
    if (keyS == true) {
        if (this.offsetY + this.stepSize + this.imgHeight <= this.canvasHeight) {
            this.offsetY += this.stepSize;
        }
        else {
            this.offsetY = this.canvasHeight - this.imgHeight
        }
    }
    if (keyA == true) {
        if (this.offsetX - this.stepSize >= 0) {
            this.offsetX -= this.stepSize;
        }
        else {
            this.offsetX = 0
        }
    }
    if (keyW == true) {
        if (this.offsetY - this.stepSize >= 0) {
            this.offsetY -= this.stepSize;
        }
        else {
            this.offsetY = 0
        }
    
    }
    c.drawImage(this.spriteImage, this.offsetX, this.offsetY, this.imgWidth, this.imgHeight);
  }
}