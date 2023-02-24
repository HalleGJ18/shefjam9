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

//player size
var playerWidth = 100;

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

// cart variables
var cartImgSide = 300;
var cartPosX = 640-(cartImgSide/2);
var cartPosY = 720-(cartImgSide/2);

// player movement vaiables
var offsetX = cartPosX+100;
var offsetY = cartPosY+10;
const stepSize = 7;

// time variables
var globalTime = 0;
var textTimeOuts = [];

// text
const scoreText = [
    "that's inadequate!", // 10
    "that's beastly!", // 20
    "that's dreadful!", // 30
    "that's terrible!" // 40 and thats as many as 4 tens and thats terrible
  ]

const comboText = [
    "SO Villainous!",
    "Naughty!",
    "How could you?",
    "EVIL!",
    "You scoundrel!",
    "Unspeakable!",
    "Filthy!",
    "Horrifying!",
    "Awful!"
]

var comboMeter = 0;


// regular man
var regularManX = 0;
var regularManY = 0;
const regularManSideLen = 100;
