// cart
function drawCart(c){
  let cartImg = new Image();
  cartImg.src = "./assets/cart.png";
  c.drawImage(cartImg,cartPosX,cartPosY,cartImgSide,cartImgSide);
}