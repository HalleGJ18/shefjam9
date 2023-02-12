let regularSprite = new Image();
regularSprite.src = "./assets/regularMan0.png";

function regularDirection(dir) {
    // 0 North
    if (dir == 0){
        regularSprite.src = "./assets/regularMan0.png";
    }
    // 1 East
    else if (dir == 1) {
        regularSprite.src = "./assets/regularMan1.png";
    }
    // 2 South
    else if (dir == 2) {
        regularSprite.src = "./assets/regularMan2.png";
    }
    // 3 West
    else if (dir == 3) {
        regularSprite.src = "./assets/regularMan3.png";
    }
    
}

function drawRegular(c) {
    c.drawImage(regularSprite, regularManX, regularManY, regularManSideLen, regularManSideLen);
};