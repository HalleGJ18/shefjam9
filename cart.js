// cart
var cartPosX = 640-(cartImgSide/2);
var cartPosY = 720-(cartImgSide/2);
var cartImgSide = 300;

function drawCart(c){
  let cartImg = new Image();
  cartImg.src = "./assets/cart.png";
  c.drawImage(cartImg,cartPosX,cartPosY,cartImgSide,cartImgSide);
}