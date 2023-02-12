// canvas variables
const canvasWidth = 1280;
const canvasHeight = 720;

// key press variables
var keyW = false;
var keyA = false;
var keyS = false;
var keyD = false;
var spaceBar = false;

// table variables
var tables = [];
var tableImgs = []
const tableSideLen = 100;

// cart variables
var cartImgSide = 300;
var cartPosX = 640-(cartImgSide/2);
var cartPosY = 720-(cartImgSide/2);

//player size
var playerWidth = 100;

// player movement vaiables
var offsetX = cartPosX + (cartImgSide/2 - playerWidth/2);
var offsetY = cartPosY ;
const stepSize = 7;



//gameplay variables
var bagSize = 4;
var carriedCakes = 0;
var score = 0;
var streakTimer = 0;
var streak = 0;

// cake variables
const cakeSize = tableSideLen/2;;
var cakes = {};
var num_of_cakes = 10;
var cakeImgs = {};
const cakeOptions = ["./assets/cake1.png", "./assets/cake2.png", "./assets/cake3.png", "./assets/alen.png"];

// time variables
var globalTime = 0;
var textTimeOuts = [];

// text
const text = [
    "that's good!",
    "that's fine!",
    "that's ok!",
    "that's not great!",
    "that's terrible!",
    "so villainous!",
    "naughty!",
    "how could you!",
    "evil!",
    "think of the shareholders qwq!"
  ]
