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

// player movement vaiables
var offsetX = 500;
var offsetY = 300;
const stepSize = 7;

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

// time variables
var globalTime = 0;
var textTimeOuts = [];

// text
const scoreText = [
    "that's good!",
    "that's fine!",
    "that's ok!",
    "that's not great!",
    "that's terrible!"
  ]

const comboText = [
    "SO Villainous!",
    "Naughty!",
    "How could you?",
    "EVIL!",
    "You cad!"
]

var comboMeter = 0;
