import {
  FXInit,
  getWeightedOption,
  FXRandomOption,
  FXRandomIntBetween,
} from "../public/helpers";

FXInit(fxrand);
console.log(fxhash);
console.log(fxrand());

//----------------------
// defining features
//----------------------
let herbType;
let bitFieldType;

window.$fxhashFeatures = {
  Fern_Number: herbType,
  Bitfield_Type: bitFieldType,
};

//array to store fern objects
let fernObjects = [];

//bitfield variables
let y = 0;
let step = 0;

let randDecider;

window.setup = () => {
  seedHash = int(fxrand() * 100000000);
  randomSeed(seedHash);
  noiseSeed(seedHash);
  const size = min(windowWidth, windowHeight);
  createCanvas(size, size);
  //background(150);
  noStroke();
  frameRate(30);

  randDecider = FXRandomIntBetween(1, 6);

  //initialise barnsley fern objects within fernObjects array
  for (let i = 0; i < 5e3; i++) {
    //for (let i = 0; i < 10; i++) {
    fernObjects[i] = new BarnsleyFernObject();
  }

  pixelG = createGraphics(200, 200);
};

window.windowResized = () => {
  if (navigator.userAgent.indexOf("HeadlessChrome") == -1) {
    const size = min(windowWidth, windowHeight);
    resizeCanvas(size, size);
  }
};

window.onkeypress = () => {
  if (keyCode === 49) {
    const size = 1024 * 1;
    const cnv = createCanvas(size, size);
    save(cnv, "modulo_sensi.png");
    windowResized();
  }
};

window.draw = () => {
  background(150);
  for (let i = 0; i < fernObjects.length; i++) {
    //run the "show" method for the objects in the fernObjs array
    fernObjects[i].show();
  }

  pixelMotif();
  push();
  pixelG.noStroke();
  translate(0, 0);
  image(pixelG, 100, 100);
  pop();
};

function BarnsleyFernObject() {
  //variable declaration

  this.bFernNextX = 0;
  this.bFernNextY = 0;
  this.currentX = 0;
  this.currentY = 0;
  this.prevX = 0;
  this.prevY = 0;
  this.newB2Var = 0.04;

  // method for drawing the points to comprise the fern shape
  this.drawPoint = function () {
    //brass
    stroke(random(210, 220), random(170, 180), random(10, 30));
    strokeWeight(2.5);
    this.prevX = map(this.currentX, -2.182, 2.6558, 50, width / 3.25);
    this.prevY = map(this.currentY, 0, 9.9983, height / 1.5, 50);
    point(this.prevX, this.prevY);
  };
  //method for containing the coefficients and probabilities to achieve custom fern shape including the B2 variable which will animate the fern
  //fern VI
  this.calcBF = function () {
    //track framecounts for animation
    this.sec = frameCount;

    if ((this.sec / 1) & (this.sec / 2)) {
      this.newB2Var += this.newB2Var * (deltaTime % 1);
    }
    if (this.newB2Var > 0.2) {
      this.newB2Var = 0.04;
    }

    /* this.selectedFern = getWeightedOption([
      [this.fernOne(), 20],
      [this.fernTwo(), 15],
      [this.fernThree(), 20],
      [this.fernFour(), 15],
      [this.fernFive(), 15],
      [this.fernSix(), 15],
    ]); */
  };

  this.fernOne = function () {
    this.r = random(1);
    //01
    if (this.r < 0.01) {
      this.bFernNextX = 0 * this.bFernNextY + 1;
      this.bFernNextX = 0 * this.bFernNextY + -0.55;
    }
    //02
    else if (this.r < 0.86) {
      this.bFernNextX =
        0.85 * this.bFernNextX + -this.newB2Var * this.bFernNextY + -1;
      this.bFernNextY = 0.09 * this.bFernNextX + 0.85 * this.bFernNextY + -0.2;
    }
    //03
    else if (this.r < 0.93) {
      this.bFernNextX = -0.5 * this.bFernNextX + 0.15 * this.bFernNextY;
      this.bFernNextY = 0.3 * this.bFernNextX + -0.1 * this.bFernNextY + -0.2;
    } else {
      //04
      this.bFernNextX = -0.5 * this.bFernNextX + 0.3 * this.bFernNextY + -1;
      this.bFernNextY = 0.5 * this.bFernNextX + 0.55 * this.bFernNextY + -0.25;
    }

    this.currentX = this.bFernNextX % 2;
    this.currentY = this.bFernNextY % 8;
  };

  this.fernTwo = function () {
    this.r = random(1);
    //01
    if (this.r < 0.01) {
      this.bFernNextX = 0 * this.bFernNextY + 1;
      this.bFernNextY = 0 * this.bFernNextY + -0.55;
    }
    //02
    else if (this.r < 0.86) {
      this.bFernNextX =
        -0.75 * this.bFernNextX + this.newB2Var * this.bFernNextY + -0.5;
      this.bFernNextY = 0.2 * this.bFernNextX + 0.75 * this.bFernNextY + -0.15;
    }
    //03
    else if (this.r < 0.93) {
      this.bFernNextX = -0.55 * this.bFernNextX + 0.25 * this.bFernNextY;
      this.bFernNextY = 0.5 * this.bFernNextX + -0.1 * this.bFernNextY + 0.5;
    } else {
      //04
      this.bFernNextX = 1.5 * this.bFernNextX + 0.7 * this.bFernNextY + -1;
      this.bFernNextY = -0.5 * this.bFernNextX + 0.55 * this.bFernNextY + -0.25;
    }

    this.currentX = this.bFernNextX % 2;
    this.currentY = this.bFernNextY % 8;
  };

  this.fernThree = function () {
    this.r = random(1);
    //01
    if (this.r < 0.01) {
      this.bFernNextX = 0 * this.bFernNextY + 1;
      this.bFernNextY = 0 * this.bFernNextY + -0.14;
    }
    //02
    else if (this.r < 0.86) {
      this.bFernNextX =
        0.85 * this.bFernNextX + -this.newB2Var * this.bFernNextY + -1;
      this.bFernNextY = -0.2 * this.bFernNextX + 0.85 * this.bFernNextY + -0.5;
    }
    //03
    else if (this.r < 0.93) {
      this.bFernNextX = -0.75 * this.bFernNextX + -0.55 * this.bFernNextY;
      this.bFernNextY = 0.5 * this.bFernNextX + -0.05 * this.bFernNextY + 0.2;
    } else {
      //04
      this.bFernNextX = -0.15 * this.bFernNextX + 0.05 * this.bFernNextY + 2.5;
      this.bFernNextY = 0.75 * this.bFernNextX + -0.5 * this.bFernNextY + -0.25;
    }

    this.currentX = this.bFernNextX;
    this.currentY = this.bFernNextY;
  };

  this.fernFour = function () {
    this.r = random(1);
    if (this.r < 0.02) {
      this.bFernNextX = 0;
      this.bFernNextY = 0.05 * this.bFernNextY;
    }
    //02
    else if (this.r < 0.84) {
      this.bFernNextX =
        -0.85 * this.bFernNextX + this.newB2Var * this.bFernNextY;
      this.bFernNextY = -0.15 * this.bFernNextX + 0.9 * this.bFernNextY + 0.5;
    }
    //03
    else if (this.r < 0.93) {
      this.bFernNextX = -0.5 * this.bFernNextX + 0.5 * this.bFernNextY + -1.5;
      this.bFernNextY = 0.15 * this.bFernNextX + 0.15 * this.bFernNextY + 2.5;
    } else {
      //04
      this.bFernNextX = 0.25 * this.bFernNextX + -0.1 * this.bFernNextY + -0.5;
      this.bFernNextY = -1.5 * this.bFernNextX + -0.55 * this.bFernNextY + 0.25;
    }

    this.currentX = this.bFernNextX;
    this.currentY = this.bFernNextY;
  };

  this.fernFive = function () {
    this.r = random(1);
    if (this.r < 0.01) {
      this.bFernNextX = 0;
      this.bFernNextY = -0.1 * this.bFernNextY + -0.55;
    }
    //02
    else if (this.r < 0.85) {
      this.bFernNextX =
        0.845 * this.bFernNextX + this.newB2Var * this.bFernNextY;
      this.bFernNextY = -0.035 * this.bFernNextX + 0.82 * this.bFernNextY + 1.6;
    }
    //03
    else if (this.r < 0.93) {
      this.bFernNextX = 0.2 * this.bFernNextX + -0.31 * this.bFernNextY;
      this.bFernNextY =
        0.255 * this.bFernNextX + 0.245 * this.bFernNextY + 0.29;
    } else {
      //04
      this.bFernNextX = -0.15 * this.bFernNextX + 0.24 * this.bFernNextY;
      this.bFernNextY = 0.25 * this.bFernNextX + 0.2 * this.bFernNextY + 0.68;
    }

    this.currentX = this.bFernNextX % 2;
    this.currentY = this.bFernNextY % 2;
  };

  this.fernSix = function () {
    this.r = random(1);
    if (this.r < 0.02) {
      this.bFernNextX = 0 * this.bFernNextY + 0.5;
      this.bFernNextY = 0 * this.bFernNextY + -0.14;
    }
    //02
    else if (this.r < 0.84) {
      this.bFernNextX =
        0.95 * this.bFernNextX + this.newB2Var * this.bFernNextY;
      this.bFernNextY = -0.25 * this.bFernNextX + 0.75 * this.bFernNextY + -0.1;
    }
    //03
    else if (this.r < 0.9) {
      this.bFernNextX = -0.5 * this.bFernNextX + -0.35 * this.bFernNextY + 1;
      this.bFernNextY = 0.3 * this.bFernNextX + -0.1 * this.bFernNextY + 0.2;
    } else {
      //04
      this.bFernNextX = 0.5 * this.bFernNextX + 0.3 * this.bFernNextY + -1;
      this.bFernNextY = 0.3 * this.bFernNextX + 0.25 * this.bFernNextY + 0.25;
    }

    this.currentX = this.bFernNextX;
    this.currentY = this.bFernNextY;
  };

  //display the fern
  this.show = function () {
    for (let i = 0; i < 1; i++) {
      this.drawPoint();
      this.calcBF();
      if (randDecider === 1) {
        this.fernOne();
      }
      if (randDecider === 2) {
        this.fernTwo();
      }
      if (randDecider === 3) {
        this.fernThree();
      }
      if (randDecider === 4) {
        this.fernFour();
      }
      if (randDecider === 5) {
        this.fernFive();
      }
      if (randDecider === 6) {
        this.fernSix();
      }
      rotate(PI / 4); //4 8 16
    }
    //now that console only logs one val use if stmnts to draw fern that corresponds w randdecider val
    //noLoop();
    //console.log(randDecider);
    //this.funct();
    //console.log("debug");
    /* 
      FXRandomOption([
        this.fernOne(),
        this.fernTwo(),
        this.fernThree(),
        this.fernFour(),
        this.fernFive(),
        this.fernSix(),
      ]);
       */
    //console.log(this.selectedFern);
  };
}

/* 
const s = new p5((sketch) => {
  let x = 100;
  let y = 100;

  sketch.setup = () => {
    let moduCanv = createCanvas(300, 500);
  };

  sketch.draw = () => {
    sketch.background(0);
    sketch.fill(255);
    sketch.rect(x, y, 50, 50);
  };
});

let myp5 = new p5(s, "moduloCanv");
 */
