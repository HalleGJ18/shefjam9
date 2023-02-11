// x and y are boxs and w is width of the square
function overLap(x1,y1,x2,y2,w1,w2) {
  // If the x and y coordinates of opposite corners don't fall with in the bounds of both squares
  // Then they aren't touching
  // Knowing that the objects will be square helps keep the code simple
  return !((x1 > x2 + w2 || x2 > x1 + w1) || (y1 > y2 + w2 || y2 > y1 + w1));
}

