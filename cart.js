// cart

function drawCart(c){
var cartPos = [640-150, 720-150];
var cartImgSide = 300;
let cartImg = new Image();
cartImg.src = "./assets/cart.png";
c.drawImage(cartImg,cartPos[0],cartPos[1],cartImgSide,cartImgSide);
}