//License:
//Creative Commons Attribution-NonCommercial 4.0 International
//tz1f6TBqdChGEazWibdgXvzPhMSSiwLpbfHg
//

import { FXInit, getWeightedOption, FXRandomOption } from "../public/helpers";

FXInit(fxrand);

//----------------------
// defining features
//----------------------

// Barnsley Ferns
let fernId;
// Array to store fern objects
let fernObjects = [];
// This variable is divided by pi to determine how many ferns will be visible
let fernAmount;
// Fern colours
let fernCol;

// Bitfield Variables
let bitFieldId;
let bFieldY = 0;
let bFieldStep = 0;
let bFieldCol1;
let bFieldCol2;
let bFieldCol3;
let bitPaletteId;
let bitPalette;
let bFieldG;
let bFieldMaskG;
let maskImg;
let bitFieldImg;
let sunCircleXpos;
let sunCircleYpos;
let sunDiameter;
let binaryStarSystem;
let secondSunG;
let secondSunMaskG;
let secondMaskImg;
let secondBFieldImg;
let secondBFPalette;
let secondBFId;
let bFieldCol1Second;
let bFieldCol2Second;
let bFieldCol3Second;
let bFieldBlur;

// BitField Pallette Constants
let bFPaletteCollection = {
  bitPaletteI: [
    (bFieldCol1 = "White"),
    (bFieldCol2 = "Crimson"),
    (bFieldCol3 = "Gold"),
    (bitPaletteId = "Palette ID: I"),
  ],
  bitPaletteI2: [
    (bFieldCol1 = "White"),
    (bFieldCol2 = "Crimson"),
    (bFieldCol3 = "Gold"),
    (bitPaletteId = "Palette ID: I"),
  ],
  //the Stone palette
  bitPaletteII: [
    (bFieldCol1 = "Tan"),
    (bFieldCol2 = "MediumBlue"),
    (bFieldCol3 = "Linen"),
    (bitPaletteId = "Palette ID: II"),
  ],
  bitPaletteII2: [
    (bFieldCol1 = "Tan"),
    (bFieldCol2 = "MediumBlue"),
    (bFieldCol3 = "Linen"),
    (bitPaletteId = "Palette ID: II"),
  ],
  bitPaletteIII: [
    (bFieldCol1 = "LightCyan"),
    (bFieldCol2 = "DarkSeaGreen"),
    (bFieldCol3 = "Lavender"),
    (bitPaletteId = "Palette ID: III"),
  ],
  bitPaletteIII2: [
    (bFieldCol1 = "LightCyan"),
    (bFieldCol2 = "DarkSeaGreen"),
    (bFieldCol3 = "Lavender"),
    (bitPaletteId = "Palette ID: III"),
  ],
  bitPaletteIV: [
    (bFieldCol1 = "Chartreuse"),
    (bFieldCol2 = "PaleTurquoise"),
    (bFieldCol3 = "AntiqueWhite"),
    (bitPaletteId = "Palette ID: IV"),
  ],
  bitPaletteIV2: [
    (bFieldCol1 = "Chartreuse"),
    (bFieldCol2 = "PaleTurquoise"),
    (bFieldCol3 = "AntiqueWhite"),
    (bitPaletteId = "Palette ID: IV"),
  ],
  bitPaletteV: [
    (bFieldCol1 = "PaleGoldenRod"),
    (bFieldCol2 = "Silver"),
    (bFieldCol3 = "Orange"),
    (bitPaletteId = "Palette ID: V"),
  ],
  bitPaletteV2: [
    (bFieldCol1 = "PaleGoldenRod"),
    (bFieldCol2 = "Silver"),
    (bFieldCol3 = "Orange"),
    (bitPaletteId = "Palette ID: V"),
  ],
  bitPaletteVI: [
    (bFieldCol1 = "Gold"),
    (bFieldCol2 = "LemonChiffon"),
    (bFieldCol3 = "MistyRose"),
    (bitPaletteId = "Palette ID: VI"),
  ],
  bitPaletteVI2: [
    (bFieldCol1 = "Gold"),
    (bFieldCol2 = "LemonChiffon"),
    (bFieldCol3 = "MistyRose"),
    (bitPaletteId = "Palette ID: VI"),
  ],
  bitPaletteVII: [
    (bFieldCol1 = "Thistle"),
    (bFieldCol2 = "PaleVioletRed"),
    (bFieldCol3 = "FloralWhite"),
    (bitPaletteId = "Palette ID: VII"),
  ],
  bitPaletteVII2: [
    (bFieldCol1 = "Thistle"),
    (bFieldCol2 = "PaleVioletRed"),
    (bFieldCol3 = "FloralWhite"),
    (bitPaletteId = "Palette ID: VII"),
  ],
  bitPaletteVIII: [
    (bFieldCol1 = "DarkSalmon"),
    (bFieldCol2 = "SeaShell"),
    (bFieldCol3 = "DarkSlateGrey"),
    (bitPaletteId = "Palette ID: VIII"),
  ],
  bitPaletteVIII2: [
    (bFieldCol1 = "DarkSalmon"),
    (bFieldCol2 = "SeaShell"),
    (bFieldCol3 = "DarkSlateGrey"),
    (bitPaletteId = "Palette ID: VIII"),
  ],
  bitPaletteIX: [
    (bFieldCol1 = "Tomato"),
    (bFieldCol2 = "Yellow"),
    (bFieldCol3 = "Orange"),
    (bitPaletteId = "Palette ID: IX"),
  ],
  bitPaletteIX2: [
    (bFieldCol1 = "Tomato"),
    (bFieldCol2 = "Yellow"),
    (bFieldCol3 = "Orange"),
    (bitPaletteId = "Palette ID: IX"),
  ],
  bitPaletteX: [
    (bFieldCol1 = "MidnightBlue"),
    (bFieldCol2 = "PowderBlue"),
    (bFieldCol3 = "Azure"),
    (bitPaletteId = "Palette ID: X"),
  ],
  bitPaletteX2: [
    (bFieldCol1 = "MidnightBlue"),
    (bFieldCol2 = "PowderBlue"),
    (bFieldCol3 = "Azure"),
    (bitPaletteId = "Palette ID: X"),
  ],
  bitPaletteXI: [
    (bFieldCol1 = "DarkGreen"),
    (bFieldCol2 = "LightGreen"),
    (bFieldCol3 = "GreenYellow"),
    (bitPaletteId = "Palette ID: XI"),
  ],
  bitPaletteXI2: [
    (bFieldCol1 = "DarkGreen"),
    (bFieldCol2 = "LightGreen"),
    (bFieldCol3 = "GreenYellow"),
    (bitPaletteId = "Palette ID: XI"),
  ],
  bitPaletteXII: [
    (bFieldCol1 = "LightPink"),
    (bFieldCol2 = "MistyRose"),
    (bFieldCol3 = "Crimson"),
    (bitPaletteId = "Palette ID: XII"),
  ],
  bitPaletteXII2: [
    (bFieldCol1 = "LightPink"),
    (bFieldCol2 = "MistyRose"),
    (bFieldCol3 = "Crimson"),
    (bitPaletteId = "Palette ID: XII"),
  ],
  bitPaletteXIII: [
    (bFieldCol1 = "PaleGoldenRod"),
    (bFieldCol2 = "LightGoldenRodYellow"),
    (bFieldCol3 = "Teal"),
    (bitPaletteId = "Palette ID: XIII"),
  ],
  bitPaletteXIII2: [
    (bFieldCol1 = "PaleGoldenRod"),
    (bFieldCol2 = "LightGoldenRodYellow"),
    (bFieldCol3 = "Teal"),
    (bitPaletteId = "Palette ID: XIII"),
  ],
  bitPaletteXIV: [
    (bFieldCol1 = "Silver"),
    (bFieldCol2 = "Black"),
    (bFieldCol3 = "WhiteSmoke"),
    (bitPaletteId = "Palette ID: XIV"),
  ],
  bitPaletteXIV2: [
    (bFieldCol1 = "Silver"),
    (bFieldCol2 = "Black"),
    (bFieldCol3 = "WhiteSmoke"),
    (bitPaletteId = "Palette ID: XIV"),
  ],
  bitPaletteXV: [
    (bFieldCol1 = FXRandomOption(["Crimson", "LightCyan"])),
    (bFieldCol2 = FXRandomOption(["DarkSeaGreen", "MistyRose"])),
    (bFieldCol3 = FXRandomOption(["DarkCyan", "HoneyDew"])),
    (bitPaletteId = "Palette ID: XV"),
  ],
  bitPaletteXV2: [
    (bFieldCol1 = FXRandomOption(["Crimson", "LightCyan"])),
    (bFieldCol2 = FXRandomOption(["DarkSeaGreen", "MistyRose"])),
    (bFieldCol3 = FXRandomOption(["DarkCyan", "HoneyDew"])),
    (bitPaletteId = "Palette ID: XV"),
  ],
};
// Paper effect noise bg
let paperFxBgGraphic;
let bgCol;
let bgNoise;
let bgAlpha;
let bgRectXY;
let bgStroke;
let bgBase;

// 10PRINT
let skyscrapers = [];
let skyscraperAmount;
let tenPColTheme;
let tenPSpeed;
let tenPStyle;

let saveCanvas;

window.setup = () => {
  let seedHash = int(fxrand() * 100000000);
  randomSeed(seedHash);
  noiseSeed(seedHash);
  const size = min(windowWidth, windowHeight);
  createCanvas(size, size);
  noStroke();
  frameRate(30);
  background(0);
  saveCanvas = createGraphics(windowWidth, windowHeight);

  // Posibillity of 12 barnsley fern designs, one design weighted with 3% chance of occurence
  fernId = getWeightedOption([
    [1, 9],
    [2, 9],
    [3, 9],
    [4, 9],
    [5, 9],
    [6, 9],
    [7, 9],
    [8, 9],
    [9, 9],
    [10, 9],
    [11, 9],
    [12, 3],
  ]);
  // Fern amount decides the rotation of each fern divided by PI forming circular sun ray
  fernAmount = getWeightedOption([
    [2, 2],
    [4, 20],
    [8, 60],
    [10, 18],
  ]);

  // Initialise 2000 barnsley fern objects within fernObjects array acting as sun rays
  for (let i = 0; i < 2e3; i++) {
    fernObjects[i] = new BarnsleyFernObject();
  }

  // Colours for sun rays
  fernCol = getWeightedOption([
    ["Gold", 5],
    ["MediumSlateBlue", 5],
    ["MidnightBlue", 5],
    ["DarkViolet", 5],
    ["DarkOrange", 5],
    ["Black", 5],
    ["DarkGreen", 5],
    ["GreenYellow", 5],
    ["Red", 5],
    ["HotPink", 5],
    ["PaleVioletRed", 5],
    ["MediumBlue", 5],
    ["Chartreuse", 5],
  ]);

  // Background graphic variables;
  // Base colour
  bgCol = color(
    getWeightedOption([
      ["Tan", 10],
      ["HoneyDew", 10],
      ["Linen", 10],
      ["Lavender", 10],
      ["PaleGreen", 10],
      ["LightGrey", 10],
      ["LightGoldenRodYellow", 10],
      ["LavenderBlush", 10],
      ["LightCyan", 10],
    ])
  );
  switch ((bgCol.levels[0], bgCol.levels[1], bgCol.levels[2])) {
    case (210, 180, 140):
      bgBase = "Tan";
      break;
    case (240, 255, 240):
      bgBase = "HoneyDew";
      break;
    case (250, 240, 230):
      bgBase = "Linen";
      break;
    case (230, 230, 250):
      bgBase = "Lavender";
      break;
    case (152, 251, 152):
      bgBase = "PaleGreen";
      break;
    case (211, 211, 211):
      bgBase = "LightGrey";
      break;
    case (250, 250, 210):
      bgBase = "LightGoldenRodYellow";
      break;
    case (255, 160, 122):
      bgBase = "LightSalmon";
      break;
    case (255, 240, 245):
      bgBase = "LavenderBlush";
      break;
    case (224, 255, 255):
      bgBase = "LightCyan";
      break;
  }
  // Colour of strokes on top of base
  bgNoise = color(
    getWeightedOption([
      ["Navy", 10],
      ["Gold", 10],
      ["Crimson", 10],
      ["DarkCyan", 10],
      ["Indigo", 10],
      ["DarkGreen", 10],
      ["DarkSlateGrey", 10],
      ["Yellow", 10],
      ["Black", 10],
    ])
  );

  // Background transparency varied with setAlpha
  bgAlpha = getWeightedOption([
    [1000, 25],
    [750, 25],
    [500, 25],
  ]);
  // x & y position of rectangles forming noise, the lower reveals more background of sketch and higher value positions bg closer to edge hiding more of background behind noise graphic
  // i like 0.8 best
  bgRectXY = getWeightedOption([
    [1, 18],
    [0.8, 82],
  ]);

  bgStroke = getWeightedOption([
    [0.05, 45],
    [0.075, 45],
    [0.15, 10],
  ]);
  // Background noise graphic
  paperFxBgGraphic = createGraphics(width, height);
  // Set opacity of bg determined by feature
  bgCol.setAlpha(0.5 * 255 * sin(millis() / bgAlpha)); //1000 750 500

  // Loop function for drawing background, better to run in setup than in draw for performance
  for (let i = 0; i < 2; i++) {
    drawPaperFx(paperFxBgGraphic, bgCol);
  }
  //drawPaperFx(paperFxBgGraphic, bgCol);

  // CreateGraphics for the bitField and the circular mask clipping
  bFieldG = createGraphics(width, height);
  bFieldG.noStroke();
  bFieldMaskG = createGraphics(width, height);
  bFieldMaskG.noStroke();
  // Responsive mask position and sizing with if statements
  if (windowWidth) {
    if (windowWidth >= 2560) {
      sunCircleXpos = 3.85;
      sunCircleYpos = 3.85;
      sunDiameter = 500;
    } else if (windowWidth >= 1920) {
      sunCircleXpos = 4;
      sunCircleYpos = 4;
      sunDiameter = 350;
    } else if (windowWidth >= 1440) {
      sunCircleXpos = 4.15;
      sunCircleYpos = 3.75;
      sunDiameter = 325;
    } else if (windowWidth >= 1024) {
      sunCircleXpos = 4.5;
      sunCircleYpos = 3.75;
      sunDiameter = 300;
    } else if (windowWidth >= 980) {
      sunCircleXpos = 4.75;
      sunCircleYpos = 3.75;
      sunDiameter = 300;
    } else if (windowWidth >= 768) {
      sunCircleXpos = 5.25;
      sunCircleYpos = 4.25;
      sunDiameter = 300;
    } else if (windowWidth >= 426) {
      sunCircleXpos = 5.75;
      sunCircleYpos = 4.75;
      sunDiameter = 175;
    } else if (windowWidth >= 320) {
      sunCircleXpos = 6;
      sunCircleYpos = 6;
      sunDiameter = 150;
    }
  }

  // Bitfield Colour Palette Decider
  bitPalette = getWeightedOption([
    [bFPaletteCollection.bitPaletteI, 7],
    [bFPaletteCollection.bitPaletteII, 7],
    [bFPaletteCollection.bitPaletteIII, 7],
    [bFPaletteCollection.bitPaletteIV, 7],
    [bFPaletteCollection.bitPaletteV, 7],
    [bFPaletteCollection.bitPaletteVI, 7],
    [bFPaletteCollection.bitPaletteVII, 7],
    [bFPaletteCollection.bitPaletteVIII, 7],
    [bFPaletteCollection.bitPaletteIX, 7],
    [bFPaletteCollection.bitPaletteX, 7],
    [bFPaletteCollection.bitPaletteXI, 7],
    [bFPaletteCollection.bitPaletteXII, 7],
    [bFPaletteCollection.bitPaletteXIII, 7],
    [bFPaletteCollection.bitPaletteXIV, 2],
    [bFPaletteCollection.bitPaletteXV, 7],
  ]);

  // Bitfield IDs, determining pattern of bitwise operator derived designs on circular sun object
  bitFieldId = getWeightedOption([
    ["I", 2],
    ["II", 7],
    ["III", 7],
    ["IV", 7],
    ["V", 7],
    ["VI", 7],
    ["VII", 7],
    ["VIII", 7],
    ["IX", 7],
    ["X", 7],
    ["XI", 7],
    ["XII", 7],
    ["XIII", 7],
    ["XIV", 7],
    ["XV", 7],
  ]);

  // Variables for second sun if true
  binaryStarSystem = getWeightedOption([
    [true, 5],
    [false, 95],
  ]);
  if (binaryStarSystem) {
    secondSunG = createGraphics(width, height);
    secondSunG.noStroke();
    secondSunMaskG = createGraphics(width, height);
    secondSunMaskG.noStroke();

    secondBFPalette = FXRandomOption([
      bFPaletteCollection.bitPaletteI2,
      bFPaletteCollection.bitPaletteII2,
      bFPaletteCollection.bitPaletteIII2,
      bFPaletteCollection.bitPaletteIV2,
      bFPaletteCollection.bitPaletteV2,
      bFPaletteCollection.bitPaletteVI2,
      bFPaletteCollection.bitPaletteVII2,
      bFPaletteCollection.bitPaletteVIII2,
      bFPaletteCollection.bitPaletteIX2,
      bFPaletteCollection.bitPaletteX2,
      bFPaletteCollection.bitPaletteXI2,
      bFPaletteCollection.bitPaletteXII2,
      bFPaletteCollection.bitPaletteXIII2,
      bFPaletteCollection.bitPaletteXIV2,
      bFPaletteCollection.bitPaletteXV2,
    ]);
    secondBFId = FXRandomOption([
      "I",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX",
      "X",
      "XI",
      "XII",
      "XIII",
      "XIV",
      "XV",
    ]);
  }

  // Control intensity of blur on the sun
  bFieldBlur = getWeightedOption([
    [1.0, 7],
    [2.0, 3],
    [0, 90],
  ]);

  // 10PRINT setup
  skyscraperAmount = getWeightedOption([
    ["1", 4],
    ["2", 32],
    ["3", 32],
    ["4", 32],
    /*["5", 20],
     ["6", 10],
    ["7", 10],
    ["8", 10],
    ["9", 10],
    ["10", 5], */
  ]);
  tenPColTheme = getWeightedOption([
    ["Dawn", 10],
    ["Dusk", 10],
    ["Noon", 10],
    ["Night", 10],
    ["Eclipse", 10],
    ["Solstice", 10],
    ["Rapture", 10],
    ["Genesis", 10],
    ["Equinox", 10],
    ["Eden", 10],
  ]);
  // Speed with which the 10PRINT command runs
  tenPSpeed = getWeightedOption([
    [2, 5],
    [4, 30],
    [6, 30],
    [8, 30],
    [10, 5],
  ]);

  // Determine the shape used for the first layer of the 10 PRINT
  tenPStyle = getWeightedOption([
    ["Line", 30],
    ["Arc", 30],
    ["Rectangle", 30],
    ["Classic", 10],
  ]);
  // Set length of skyscraper array and thus number of 10print skyscrapers
  for (let i = 0; i < skyscraperAmount; i++) {
    skyscrapers[i] = new TenPrintSkyscraper();
  }

  console.log(
    `Background_Col: ${bgBase},
    Background_Stroke_Weight: ${bgStroke},
    Background_Transparency: ${bgAlpha},
    BG_Noise_XY: ${bgRectXY},
    Sun_Rays_ID: ${fernId},
    Sun_Rays_Colour: ${fernCol},
    Sun_Rays_Divisor: ${fernAmount},
    Sun_Blur: ${bFieldBlur},
    Sun_ID: ${bitFieldId},
    Sun_Palette: ${bitPalette[3]},
    Binary_Star_System?: ${binaryStarSystem},
    TEN_PRINT_Skyscrapers: ${skyscraperAmount},
    TEN_PRINT_Skyscraper_Palette: ${tenPColTheme},
    TEN_PRINT_Speed: ${tenPSpeed},
    TEN_PRINT_Style: ${tenPStyle},

`
  );
  window.$fxhashFeatures = {
    Background: bgBase,
    Background_Stroke_Weight: bgStroke,
    Background_Transparency: bgAlpha,
    Background_Noise_XY: bgRectXY,
    Sun_Rays_ID: fernId,
    Sun_Rays_Colour: fernCol,
    Sun_Rays_Divisor: fernAmount,
    Sun_Blur: bFieldBlur,
    Sun_ID: bitFieldId,
    Sun_Palette: bitPaletteId,
    Binary_Star_System: binaryStarSystem,
    TEN_PRINT_Skyscrapers: skyscraperAmount,
    TEN_PRINT_Style: tenPStyle,
    TEN_PRINT_Skyscraper_Palette: tenPColTheme,
    TEN_PRINT_Speed: tenPSpeed,
  };
};

window.windowResized = () => {
  if (navigator.userAgent.indexOf("HeadlessChrome") == -1) {
    const size = min(windowWidth, windowHeight);
    resizeCanvas(size, size);
  }
};

window.draw = () => {
  for (let i = 0; i < fernObjects.length; i++) {
    // Run the "show" method for the objects in the fernObjs array
    fernObjects[i].show();
  }
  // Do the same for the 10print
  for (let i = 0; i < skyscrapers.length; i++) {
    skyscrapers[i].show();
  }

  // Run function for rolling the bitfield
  rollBitfieldGrapics(bitPalette);
  push();

  bFieldMaskG.circle(
    width / sunCircleXpos,
    height / sunCircleYpos,
    sunDiameter
  );
  // Refactored p5.js mask implementation with help from this stack overflow question: https://stackoverflow.com/questions/70185810/p5-js-how-to-punch-a-hole-into-a-canvas-shape-without-changing-the-background
  maskImg = bFieldMaskG.get();
  bitFieldImg = bFieldG.get();
  bitFieldImg.mask(maskImg);
  tint(255, 170); // reduce opacity
  // Draw onto html's canvas api for better perfomance of blur
  drawingContext.filter = `blur(${eval(bFieldBlur)}px`;
  image(bitFieldImg, 0, 0);

  // Draw second sun if true
  if (binaryStarSystem) {
    rollSecondBitfieldGrapic(secondBFPalette);
    secondSunMaskG.circle(
      width / 0.5 / sunCircleXpos,
      height / 4.25 / sunCircleYpos,
      sunDiameter / 6
    );
    secondMaskImg = secondSunMaskG.get();
    secondBFieldImg = secondSunG.get();
    secondBFieldImg.mask(secondMaskImg);
    image(secondBFieldImg, 0, 0);
  }
  pop();

  // Draw background graphic onto canvas
  push();
  rotate(HALF_PI * 2);
  tint(255, 10); // reduce opacity by approx 94%
  image(paperFxBgGraphic, -width, -height);
  pop();
};

// Object for 10PRINT design producing 'skyscraper' motifs
class TenPrintSkyscraper {
  constructor() {
    this.xTenP = 0;
    this.yTenP = 0;
    this.tenPSize = 15;
    this.tenPrintG = createGraphics(width / 8, height);
    // Restrict the positioning of the outputs to be between these bounds
    this.xPos = random(1.2, 2.2);
    this.yPos = random(1.5, 2.5);

    this.basePalette;
    this.auxPalette;
    // Allocate colour palette determined by the chosen features
    switch (tenPColTheme) {
      case "Dawn":
        this.basePalette = color(
          FXRandomOption([
            //enter palette combos for the base of the dawn colour theme to be selected at random
            "Orchid",
            "PaleGoldenRod",
            "PowderBlue",
          ])
        );
        this.auxPalette = color(
          FXRandomOption([
            //enter auxillary palette combos for the base of the dawn colour theme to be selected at random
            "LightYellow",
            "Navy",
            "Snow",
          ])
        );
        break;
      case "Dusk":
        this.basePalette = color(
          FXRandomOption([
            //base fill
            "Lavender",
            "DarkSlateBlue",
            "DarkRed",
            "DarkOrange",
          ])
        );
        this.auxPalette = color(
          FXRandomOption([
            //auxilliary stroke
            "DarkGray",
            "DarkGoldenRod",
            "Purple",
            "MidnightBlue",
          ])
        );
        break;
      case "Noon":
        this.basePalette = color(
          FXRandomOption([
            //base fill
            "Yellow",
            "Chartreuse",
            "MediumBlue",
          ])
        );
        this.auxPalette = color(
          FXRandomOption([
            //auxilliary stroke
            "SeaGreen",
            "DarkKhaki",
            "LightSkyBlue",
          ])
        );
        break;
      case "Night":
        this.basePalette = color(
          FXRandomOption([
            //base fill
            "MidnightBlue",
            "DarkSlateGrey",
            "Maroon",
          ])
        );
        this.auxPalette = color(
          FXRandomOption([
            //auxilliary stroke
            "Yellow",
            "Black",
            "Crimson",
            "Silver",
          ])
        );
        break;
      case "Eclipse":
        this.basePalette = color(
          FXRandomOption([
            //base
            "Crimson",
            "Black",
            "DarkSlateBlue",
          ])
        );
        this.auxPalette = color(
          FXRandomOption([
            //auxilliary
            "DimGrey",
            "WhiteSmoke",
            "DarkRed",
          ])
        );
        break;
      case "Solstice":
        this.basePalette = color(
          FXRandomOption([
            //base
            "LightCyan",
            "LightGray",
            "LightCoral",
            "LightGoldenRodYellow",
          ])
        );
        this.auxPalette = color(
          FXRandomOption([
            //auxilliary
            "LightPink",
            "LightGreen",
            "Wheat",
            "Teal",
          ])
        );
        break;
      case "Rapture":
        this.basePalette = color(
          FXRandomOption([
            //base
            "Azure",
            "RoyalBlue",
            "DarkSlateGrey",
          ])
        );
        this.auxPalette = color(
          FXRandomOption([
            //auxilliary
            "LightSlateGrey",
            "Aquamarine",
            "Black",
            "SlateBlue",
          ])
        );
        break;
      case "Equinox":
        this.basePalette = color(
          FXRandomOption([
            //base
            "Black",
            "LightGray",
            "DarkSlateGrey",
          ])
        );
        this.auxPalette = color(
          FXRandomOption([
            //auxilliary
            "WhiteSmoke",
            "BlanchedAlmond",
            "DimGrey",
          ])
        );
        break;
      case "Eden":
        this.basePalette = color(
          FXRandomOption([
            //base
            "Beige",
            "Brown",
            "Tan",
          ])
        );
        this.auxPalette = color(
          FXRandomOption([
            //auxilliary
            "LightGreen",
            "Plum",
            "Ivory",
          ])
        );
        break;
      case "Genesis":
        this.basePalette = color(
          FXRandomOption([
            //base
            "Crimson",
            "LavenderBlush",
            "Olive",
          ])
        );
        this.auxPalette = color(
          FXRandomOption([
            //auxilliary
            "MidnightBlue",
            "IndianRed",
            "OliveDrab",
          ])
        );
        break;
    }
  }
  structureSkyscraperLines() {
    this.tenPrintG.stroke(this.auxPalette);
    this.auxPalette.setAlpha(tenPSpeed);
    this.tenPrintG.strokeWeight(5);

    // 10PRINT strucure determined by the probability of a random value either being greater or less than a certain value. In this case, 0.5
    this.r = random(0, 1);

    // Back slash if rendering line shape & if the r value is greater than 0.5
    if (this.r > 0.5) {
      this.tenPrintG.fill(this.basePalette);
      this.basePalette.setAlpha(tenPSpeed);
      // Easier to see back and forward slash when rendering line shape but using triangles instead to produce 'towering' architectural-like forms with illusion of perspective
      this.tenPrintG.triangle(
        // Although a triangle shape is being rendered, the result actually just looks like rectangles with more of a bend
        this.xTenP,
        this.yTenP,
        this.xTenP * this.tenPSize,
        this.yTenP * this.tenPSize
      );
    } else {
      // Otherwise forward slash
      this.tenPrintG.triangle(
        this.xTenP + this.tenPSize,
        this.yTenP,
        this.xTenP,
        this.yTenP + this.tenPSize
      );
    }

    // Left to right movement across X-axis
    this.xTenP = this.xTenP + this.tenPSize;

    if (this.xTenP > width / tenPSpeed) {
      // Create new line
      this.xTenP = 0;
      this.yTenP = this.yTenP + this.tenPSize;
    }

    if (this.yTenP > height / tenPSpeed) {
      // Once bottom of createGraphihc is reached, clear the canvas and increase size, accelarating time it takes to complete a cycle
      this.tenPrintG.clear();
      this.xTenP = 0;
      this.yTenP = 0;
      this.tenPSize += 5;
    }
    // When the spacing increments to 40 bring spacing(sizeTenP) down to 10, anything larger than 40 isn't visible so reloop at that point
    if (this.tenPSize == 40) {
      this.tenPSize = 10;
    }
  }

  // Methods creating different shape with a modified 10 PRINT function
  structureSkyscraperArc() {
    this.tenPrintG.stroke(this.auxPalette);
    this.auxPalette.setAlpha((tenPSpeed ^ 4) / sin(millis() / tenPSpeed));
    this.tenPrintG.strokeWeight(4);

    this.r = random(0, 1);

    if (this.r > 0.5) {
      this.tenPrintG.noFill();
      this.basePalette.setAlpha(tenPSpeed);

      this.tenPrintG.arc(
        this.xTenP,
        this.yTenP,
        this.xTenP * this.tenPSize,
        this.yTenP + this.tenPSize,
        this.xTenP,
        this.yTenP
      );
    } else {
      // Otherwise forward slash
      this.tenPrintG.arc(
        this.yTenP + this.tenPSize,
        this.xTenP * this.tenPSize,
        this.yTenP,
        this.xTenP,
        this.xTenP,
        this.yTenP
      );
    }

    // Left to right movement across X-axis
    this.xTenP = this.xTenP + this.tenPSize;

    if (this.xTenP > width / tenPSpeed) {
      // Create new line
      this.xTenP = 0;
      this.yTenP = this.yTenP + this.tenPSize;
    }

    if (this.yTenP > height / tenPSpeed) {
      this.tenPrintG.clear();
      this.xTenP = 0;
      this.yTenP = 0;
      this.tenPSize += 5;
    }
    if (this.tenPSize == 40) {
      this.tenPSize = 5;
    }
  }

  structureSkyscraperRectangle() {
    //this.tenPrintG.stroke(this.auxPalette);
    this.tenPrintG.noStroke();
    this.auxPalette.setAlpha((tenPSpeed ^ 20) + sin(millis() ^ 10));

    this.r = random(0, 1);

    if (this.r > 0.5) {
      this.tenPrintG.fill(this.auxPalette);
      this.tenPrintG.noStroke();
      //this.tenPrintG.stroke(this.auxPalette);

      // Using rectangle for first 10PRINT layer creates grid effect
      this.tenPrintG.rect(
        this.xTenP,
        this.yTenP,
        this.xTenP % this.tenPSize,
        this.yTenP * this.tenPSize
      );
    } else {
      this.tenPrintG.rect(
        this.xTenP * this.tenPSize,
        this.yTenP % this.tenPSize,
        this.yTenP,
        this.xTenP
      );
    }

    // Left to right movement across X-axis
    this.xTenP = this.xTenP + this.tenPSize;

    if (this.xTenP > width / tenPSpeed) {
      // Create new line
      this.xTenP = 0;
      this.yTenP = this.yTenP + this.tenPSize;
    }

    if (this.yTenP > height / tenPSpeed) {
      this.tenPrintG.clear();
      this.xTenP = 0;
      this.yTenP = 0;
      this.tenPSize += 5;
    }
    if (this.tenPSize > 40) {
      this.tenPSize = 8;
    }
  }

  structureSkyscraperClassic() {
    this.tenPrintG.stroke(this.auxPalette);
    this.tenPrintG.strokeWeight(5);
    this.auxPalette.setAlpha(tenPSpeed);

    this.r = random(0, 1);

    if (this.r < 0.5) {
      this.tenPrintG.fill(this.basePalette);
      this.basePalette.setAlpha(tenPSpeed);

      // Lines replicate the traditional outputs of the 10PRINT command
      // Back slash
      this.tenPrintG.line(
        this.xTenP,
        this.yTenP,
        this.xTenP + this.tenPSize,
        this.yTenP + this.tenPSize
      );
    } else {
      // Forward slash
      this.tenPrintG.line(
        this.xTenP + this.tenPSize,
        this.yTenP,
        this.xTenP,
        this.yTenP + this.tenPSize
      );
    }

    // Left to right movement across X-axis
    this.xTenP = this.xTenP + this.tenPSize;

    if (this.xTenP > width) {
      // Create new line
      this.xTenP = 0;
      this.yTenP = this.yTenP + this.tenPSize;
    }

    if (this.yTenP > height) {
      this.tenPrintG.clear();
      this.xTenP = 0;
      this.yTenP = 0;
      this.tenPSize += 5;
    }
    if (this.tenPSize > 40) {
      this.tenPSize = 5;
    }
  }

  // Running virtually the same 10PRINT function above but with rectangle shapes under the triangle 10PRINT structure, the result looks like the windows and cladding of a tall building
  calcWindowsAndCladding() {
    this.tenPrintG.stroke(this.auxPalette);
    this.auxPalette.setAlpha(tenPSpeed);
    this.r = random(0, 1);

    if (this.r < 0.5) {
      this.tenPrintG.fill(this.basePalette);
      this.basePalette.setAlpha(tenPSpeed);
      this.tenPrintG.rect(
        this.xTenP,
        this.yTenP,
        this.xTenP * this.tenPSize,
        this.yTenP + this.tenPSize
      );
    } else {
      this.tenPrintG.rect(
        this.xTenP + this.tenPSize,
        this.yTenP,
        this.xTenP,
        this.yTenP * this.tenPSize
      );
    }

    this.xTenP = this.xTenP + this.tenPSize;

    if (this.xTenP > width / tenPSpeed) {
      this.xTenP = 0;
      this.yTenP = this.yTenP + this.tenPSize;
    }

    if (this.yTenP > height / tenPSpeed) {
      this.tenPrintG.clear();
      this.xTenP = 0;
      this.yTenP = 0;
      this.tenPSize += 5;
    }
    if (this.tenPSize == 40) {
      this.tenPSize = 15;
    }
  }
  show() {
    for (let i = 0; i < skyscrapers.length; i++)
      switch (tenPStyle) {
        case "Line":
          this.structureSkyscraperLines();
          break;
        case "Rectangle":
          this.structureSkyscraperRectangle();
          break;
        case "Arc":
          this.structureSkyscraperArc();
          break;
        case "Classic":
          this.structureSkyscraperClassic();
          break;
      }
    this.calcWindowsAndCladding();
    image(this.tenPrintG, width / this.xPos, height / this.yPos);
  }
}

function rollBitfieldGrapics(bitPalette) {
  // Reference for functions of various patterns using bitwise operators: //https://twitter.com/aemkei/status/1378106731386040322

  bFieldY += bFieldStep = 2;

  // Copy moves the field revealing more output of the operations of the designated field ID. The dx value changes the angle of motion of the field with -1 being to the left, 1 to the right and 0 centered
  bFieldG.copy(
    0,
    0,
    width / 1.5,
    height / 1.5,
    -1.0, // dx value
    bFieldStep,
    width / 1.5,
    height / 1.5
  );
  // Loop using an incrementor value bound to the step to determine the designs generated
  for (let i = bFieldStep; i--; ) {
    for (let x = width; x--; ) {
      let a;
      let b;

      // Assign colours out of one array colour palette from the colour palette collection object of colour palettes specifically for these bit fields
      bFieldCol1 = bitPalette[0];
      bFieldCol2 = bitPalette[1];
      bFieldCol3 = bitPalette[2];

      // Then render a bitfield from this selection of 15 using different rules to generate graphics for the sun shape

      //XV horizontal distorted lines refactor of field I
      function bitfieldXV() {
        //distorted lines field
        a = (x % bFieldY & 32) * ((x ^ bFieldY) % 18) + i;
        b = a ^ (a * 2);
        if (b == 0) {
          bFieldG.fill(bFieldCol1);
          bFieldG.rect(x, i, 2, 2);
        }
        //non-distorted lines band
        a = (bFieldY | bFieldY) & (64 + i);
        b = a ^ (a * 2);
        if (b == 0) {
          bFieldG.fill(bFieldCol2);
          bFieldG.rect(x, i, 2, 2);
        }
        //distorted lines band
        a = (x ^ bFieldY) % (15 + i);
        b = a ^ (a * 2);
        if (b == 0) {
          bFieldG.fill(bFieldCol3);
          bFieldG.rect(x, i, 2, 2);
        }
      }

      //XIV stripes with transparency  refactor of field III
      function bitfieldXIV() {
        //rightmost stripe
        a = (((x / 86) & bFieldY) ^ 2) + i;
        b = a ^ (a * 2);
        if (b == 0) {
          bFieldG.fill(bFieldCol1);
          bFieldG.rect(x, i, 2, 2);
        }

        //most numerous stripes
        a = ((bFieldY / 128) | (x + 16)) & (16 + i);
        b = a ^ (a * 2);
        if (b == 0) {
          bFieldG.fill(bFieldCol2);
          bFieldG.rect(x, i, 2, 2);
        }
        //thinnest vertical stripes
        a = (x % 10) + i;
        b = a ^ (a * 2);

        if (b == 0) {
          bFieldG.fill(bFieldCol3);
          bFieldG.rect(x, i, 2, 2);
        }
      }

      //XIII distorted sierpinski refactor of VI
      function bitfieldXIII() {
        //lines and distortions
        a = x % bFieldY & (66 + i);
        b = a ^ (a * 2);
        if (b == 0) {
          bFieldG.fill(bFieldCol3);
          bFieldG.rect(x, i, 2, 2);
        }
        // check, dots and sierpinski
        //a = ((y % x) & 32) + i;
        a = (bFieldY % x & 8) + i;
        b = a ^ (a * 2);
        //if (b % 2 == 0) {
        if (b == 0) {
          bFieldG.fill(bFieldCol1);
          bFieldG.rect(x, i, 2, 2);
        }
        //sierpinski
        a = (x & bFieldY) / (64 + i); //larger number = bigger triangle
        b = a ^ (a * 2);
        if (b == 0) {
          bFieldG.fill(bFieldCol3);
          bFieldG.rect(x, i, 2, 2);
        }
        //diagonal lines and bg
        a = x & bFieldY & (bFieldY / 64 + i);
        b = a ^ (a * 2);
        if (b == 0) {
          bFieldG.fill(bFieldCol2);
          bFieldG.rect(x, i, 2, 2);
        }
      }

      //variation of IX (unreleased version)  - //circles / vertical stripes
      function bitfieldXII() {
        //circles
        a = (x * bFieldY) & (64 + i);
        b = a ^ (a * 2);
        if (b == 0) {
          bFieldG.fill(bFieldCol2);
          bFieldG.rect(x, i, 2, 2);
        }
        //circles mod
        a = (x - bFieldY) & (128 + i);
        b = a ^ (a * 2);
        if (b == 0) {
          bFieldG.fill(bFieldCol1);
          bFieldG.rect(x, i, 2, 2);
        }

        //circles mod
        a =
          FXRandomOption([x, bFieldY]) &
          24 &
          (FXRandomOption([x, bFieldY]) / 2) &
          (24 + i); // interchange x and y
        b = a ^ (a * 2);
        if (b == 0) {
          bFieldG.fill(bFieldCol2);
          bFieldG.rect(x, i, 2, 2);
        }

        //lines
        a = (x + bFieldY) & (33 + i);
        b = a ^ (a * 2);
        if (b % 66 == 0) {
          bFieldG.fill(bFieldCol3);
          bFieldG.rect(x, i, 2, 2);
        }
      }

      //VII cantor set mod
      function bitfieldXI() {
        //stripes
        a = ((x % bFieldY) / 64) & ((bFieldY % 128) + i);
        b = a ^ (a * 2);
        if (b == 0) {
          bFieldG.fill(bFieldCol1);
          bFieldG.rect(x, i, 2, 2);
        }
        //checkerboard with line combo v3
        a = (x + x) & (bFieldY / 16 + i); // cantor set mod
        b = a ^ (a * 2);
        if (b % 5 !== 0) {
          bFieldG.fill(bFieldCol2);
          bFieldG.rect(x, i, 2, 2);
        }
        // lines mod
        a = (x | bFieldY) & ((x % 2) + i);
        b = a ^ (a * 2);
        if (b == 0) {
          bFieldG.fill(bFieldCol3);
          bFieldG.rect(x, i, 2, 2);
        }
      }

      //bfield II mod checked steps distrorted
      function bitfieldX() {
        //checker mod
        a = ((x ^ bFieldY) / 24) & (6 + i);
        b = a ^ (a * 2);
        if (b == 0) {
          bFieldG.fill(bFieldCol1);
          bFieldG.rect(x, i, 2, 2);
        }
        //noise mod
        a = (x * bFieldY) ** 10 % (90 + i);
        b = a ^ (a * 2);
        if (b == 0) {
          bFieldG.fill(bFieldCol2);
          bFieldG.rect(x, i, 2, 2);
        }
        //diagonal lines mod
        a = (x ^ bFieldY) % (60 + i); //15 or 30 normally but 60 is best for this version
        b = a ^ (a * 2);
        if (b == 0) {
          bFieldG.fill(bFieldCol3);
          bFieldG.rect(x, i, 2, 2);
        }
      }

      //lines sierpinski checkerboard
      function bitfieldIX() {
        //circles mod
        a = (x & bFieldY) % (64 + i);
        b = a ^ (a * 2);
        if (b == 0) {
          bFieldG.fill(bFieldCol1);
          bFieldG.rect(x, i, 2, 2);
        }
        //circle mod
        a = (x | bFieldY) & (64 + i);
        b = a ^ (a * 2);
        if (b == 0) {
          bFieldG.fill(bFieldCol2);
          bFieldG.rect(x, i, 2, 2);
        }
        //lines
        a = (x ^ bFieldY) % (17 + i);
        b = a ^ (a * 2);
        if (b == 0) {
          bFieldG.fill(bFieldCol3);
          bFieldG.rect(x, i, 2, 2);
        }
      }

      // original circles and sierpinski triangles grid mod
      function bitfieldVIII() {
        //circles
        a = (x & bFieldY) % (64 + i);
        b = a ^ (a * 2);
        if (b == 0) {
          bFieldG.fill(bFieldCol1);
          bFieldG.rect(x, i, 2, 2);
        }
        //circles
        a = (x * bFieldY) & (64 + i);
        b = a ^ (a * 2);
        if (b == 0) {
          bFieldG.fill(bFieldCol2);
          bFieldG.rect(x, i, 2, 2);
        }
        //lines
        a = (x ^ bFieldY) & (33 + i);
        b = a ^ (a * 2);
        if (b % 66 == 0) {
          bFieldG.fill(bFieldCol3);
          bFieldG.rect(x, i, 2, 2);
        }
      }

      //cantor set sierpinski-derivative field
      function bitfieldVII() {
        //minima vertical stripes v4
        a = x + bFieldY + i;
        b = a ^ (a * 2);
        if (b % 2 == 0) {
          bFieldG.fill(bFieldCol1);
          bFieldG.rect(x, i, 2, 2);
        }
        //checkerboard with line combo v3
        a = (x * 8) & ((bFieldY ^ 16) + i); // cantor set
        b = a ^ (a * 2);
        if (b == 0) {
          bFieldG.fill(bFieldCol2);
          bFieldG.rect(x, i, 2, 2);
        }
        //diagonal lines v2
        a = (x | bFieldY) & ((x % 2) + i);
        b = a ^ (a * 2);
        if (b == 0) {
          bFieldG.fill(bFieldCol3);
          bFieldG.rect(x, i, 2, 2);
        }
      }
      //minimal lines and cirlces field
      function bitfieldVI() {
        //checkerboard with line combo v3
        a = (x + 16) * (bFieldY * 8 + i); //v1
        b = a ^ (a * 2);
        if (b == 0) {
          //drkgrey
          bFieldG.fill(bFieldCol3);
          bFieldG.rect(x, i, 2, 2);
        }
        //minima vertical stripes v3
        a = (x ^ bFieldY) + i;
        b = a ^ (a * 2);
        //if (b % 2 == 0) {
        if (
          b %
            getWeightedOption([
              [2, 30],
              [4, 70],
            ]) ==
          0
        ) {
          //white
          bFieldG.fill(bFieldCol3);
          bFieldG.rect(x, i, 2, 2);
        }
        //circular pattern variations 2
        a = (x * bFieldY) & (64 + x / bFieldY + i); //64 only for this field
        b = a ^ (a * 2);
        if (b == 0) {
          //black
          bFieldG.fill(bFieldCol2);
          bFieldG.rect(x, i, 2, 2);
        }
        //diagonal lines v3
        a = (x | bFieldY) * (bFieldY % 2) + i; //2
        b = a ^ (a * 2);
        if (b % 18 == 0) {
          //steelblue
          bFieldG.fill(bFieldCol1);
          bFieldG.rect(x, i, 2, 2);
        }
      }

      // sierpinski triangles field
      function bitfieldV() {
        //sierpinski w/ relief
        a = x + bFieldY - ((x * bFieldY) % 19) + i;
        b = a ^ (a * 2);
        if (b % 32 == 0) {
          bFieldG.fill(bFieldCol1);
          bFieldG.rect(x, i, 2, 2);
        }
        //classic sierpinski triangle formula
        a =
          ((x | bFieldY) &
            getWeightedOption([
              [20, 20],
              [32, 20],
              [48, 20],
              [64, 20],
              [96, 20],
            ])) +
          i; //64 32 96 20 48
        b = a ^ (a * 2);
        if (b == 0) {
          bFieldG.fill(bFieldCol2);
          bFieldG.rect(x, i, 2, 2);
        }
        //minimal sierpinski
        a = x & (bFieldY + i);
        b = a ^ (a * 2);
        if (b == 0) {
          bFieldG.fill(bFieldCol3);
          bFieldG.rect(x, i, 2, 2);
        }
      }

      //checkerboard and lines field
      function bitfieldIV() {
        //checkerboard with line combo v2
        a = ((x % bFieldY) / 16) * ((x ^ bFieldY) % 18) + i;
        b = a ^ (a * 2);
        if (b == 0) {
          bFieldG.fill(bFieldCol1);
          bFieldG.rect(x, i, 2, 2);
        }
        //minimal vertical stripes custom 3
        a = (x - bFieldY) % (10 + i);
        b = a ^ (a * 2);
        if (b == 0) {
          bFieldG.fill(bFieldCol2);
          bFieldG.rect(x, i, 2, 2);
        }
        //mini checkerboard formula
        a = (x ^ bFieldY) & (72 + i);
        b = a ^ (a * 2);
        if (b == 0) {
          bFieldG.fill(bFieldCol3);
          bFieldG.rect(x, i, 2, 2);
        }
      }

      //circles and lines field fleur-de-lis-like ⚜️
      function bitfieldIII() {
        //minima vertical stripes v2
        a = (x * bFieldY) / (16 * bFieldY + i);
        b = a ^ (a * 2);
        if (b % 2 == 0) {
          bFieldG.fill(bFieldCol1);
          bFieldG.rect(x, i, 2, 2);
        }
        //circular pattern variations 1
        a =
          (x * bFieldY) &
          (getWeightedOption([
            [24, 60],
            [64, 40],
          ]) +
            i); //64 or 24
        b = a ^ (a * 2);
        if (b == 0) {
          bFieldG.fill(bFieldCol2);
          bFieldG.rect(x, i, 2, 2);
        }
        //minima vertical stripes customed
        a = (x ^ bFieldY) * (16 + i);
        b = a ^ (a * 2);
        if (
          b %
            getWeightedOption([
              [45, 60],
              [58, 40],
            ]) ==
          0
        ) {
          //45 = lines 58=consistent lines
          bFieldG.fill(bFieldCol3);
          bFieldG.rect(x, i, 2, 2);
        }
      }

      //line heavy field
      function bitfieldII() {
        //minima vertical stripes
        a = x & (9 + i);
        b = a ^ (a * 2);
        if (b == 0) {
          bFieldG.fill(bFieldCol1);
          bFieldG.rect(x, i, 2, 2);
        }
        //checkerboard with line combo
        a = ((x ^ bFieldY) & 32) * ((x ^ bFieldY) % 9) + i;
        b = a ^ (a * 2);
        if (b == 0) {
          bFieldG.fill(bFieldCol2);
          bFieldG.rect(x, i, 2, 2);
        }
        //diagonal lines
        a =
          (x ^ bFieldY) %
          (getWeightedOption([
            [15, 50],
            [30, 50],
          ]) +
            i); //15 or 30
        b = a ^ (a * 2);
        if (b == 0) {
          bFieldG.fill(bFieldCol3);
          bFieldG.rect(x, i, 2, 2);
        }
      }

      //circle heavy field
      function bitfieldI() {
        //checkerboard with lines
        a = ((x ^ bFieldY) & 32) * ((x ^ bFieldY) % 9) + i;
        b = a ^ (a * 2);
        if (b == 0) {
          bFieldG.fill(bFieldCol1);
          bFieldG.rect(x, i, 2, 2);
        }
        //circular pattern variations
        a = (x * bFieldY) & (64 + i); //64 only 24 too unclear
        b = a ^ (a * 2);
        if (b == 0) {
          bFieldG.fill(bFieldCol2);
          bFieldG.rect(x, i, 2, 2);
        }
        //diagonal lines
        a =
          (x ^ bFieldY) %
          (getWeightedOption([
            [15, 50],
            [30, 50],
          ]) +
            i); //15 or 30
        b = a ^ (a * 2);
        if (b == 0) {
          bFieldG.fill(bFieldCol3);
          bFieldG.rect(x, i, 2, 2);
        }
      }

      // Run the function based on the bit field randomly selected as the feature
      switch (bitFieldId) {
        case "XV":
          bitfieldXV();
          break;
        case "XIV":
          bitfieldXIV();
          break;
        case "XIII":
          bitfieldXIII();
          break;
        case "XII":
          bitfieldXII();
          break;
        case "XI":
          bitfieldXI();
          break;
        case "X":
          bitfieldX();
          break;
        case "IX":
          bitfieldIX();
          break;
        case "VIII":
          bitfieldVIII();
          break;
        case "VII":
          bitfieldVII();
          break;
        case "VI":
          bitfieldVI();
          break;
        case "V":
          bitfieldV();
          break;
        case "IV":
          bitfieldIV();
          break;
        case "III":
          bitfieldIII();
          break;
        case "II":
          bitfieldII();
          break;
        case "I":
          bitfieldI();
          break;
      }
    }
  }
}

// In the rare case a second sun is to be rendered, run the same function for an independently unique output onto the second circle
// This function and its predecessor could have all been encapsulated into one bitfield object but that would have meant also refactoring the function for the main sun so while not best practice repeating works 🤷🏾‍♂️
function rollSecondBitfieldGrapic(secondBFPalette) {
  bFieldY += bFieldStep = 2;

  //logic for second sun
  secondSunG.copy(
    0,
    0,
    width / 1.5,
    height / 1.5,
    //roll the bitfield to the right
    1.0,
    bFieldStep,
    width / 1.5,
    height / 1.5
  );

  for (let i = bFieldStep; i--; ) {
    for (let x = width; x--; ) {
      let a;
      let b;

      bFieldCol1Second = secondBFPalette[0];
      bFieldCol2Second = secondBFPalette[1];
      bFieldCol3Second = secondBFPalette[2];

      //XV horizontal distorted lines refactor of field I
      function bitfieldXV() {
        //distorted lines field
        a = (x % bFieldY & 32) * ((x ^ bFieldY) % 18) + i;
        b = a ^ (a * 2);
        if (b == 0) {
          secondSunG.fill(bFieldCol1Second);
          secondSunG.rect(x, i, 2, 2);
        }
        //non-distorted lines band
        a = (bFieldY | bFieldY) & (64 + i);
        b = a ^ (a * 2);
        if (b == 0) {
          secondSunG.fill(bFieldCol2Second);
          secondSunG.rect(x, i, 2, 2);
        }
        //distorted lines band
        a = (x ^ bFieldY) % (15 + i);
        b = a ^ (a * 2);
        if (b == 0) {
          secondSunG.fill(bFieldCol3Second);
          secondSunG.rect(x, i, 2, 2);
        }
      }

      //XIV stripes with transparency  refactor of field III
      function bitfieldXIV() {
        //rightmost stripe
        a = (((x / 86) & bFieldY) ^ 2) + i;
        b = a ^ (a * 2);
        if (b == 0) {
          secondSunG.fill(bFieldCol1Second);
          secondSunG.rect(x, i, 2, 2);
        }

        //most numerous stripes
        a = ((bFieldY / 128) | (x + 16)) & (16 + i);
        b = a ^ (a * 2);
        if (b == 0) {
          secondSunG.fill(bFieldCol2Second);
          secondSunG.rect(x, i, 2, 2);
        }
        //thinnest vertical stripes
        a = (x % 10) + i;
        b = a ^ (a * 2);

        if (b == 0) {
          secondSunG.fill(bFieldCol3Second);
          secondSunG.rect(x, i, 2, 2);
        }
      }

      //XIII distorted sierpinski refactor of VI
      function bitfieldXIII() {
        //lines and distortions
        a = x % bFieldY & (66 + i);
        b = a ^ (a * 2);
        if (b == 0) {
          secondSunG.fill(bFieldCol3Second);
          secondSunG.rect(x, i, 2, 2);
        }
        // check, dots and sierpinski
        //a = ((y % x) & 32) + i;
        a = (bFieldY % x & 8) + i;
        b = a ^ (a * 2);
        //if (b % 2 == 0) {
        if (b == 0) {
          secondSunG.fill(bFieldCol1Second);
          secondSunG.rect(x, i, 2, 2);
        }
        //sierpinski
        a = (x & bFieldY) / (64 + i); //larger number = bigger triangle
        b = a ^ (a * 2);
        if (b == 0) {
          secondSunG.fill(bFieldCol3Second);
          secondSunG.rect(x, i, 2, 2);
        }
        //diagonal lines and bg
        a = x & bFieldY & (bFieldY / 64 + i);
        b = a ^ (a * 2);
        if (b == 0) {
          secondSunG.fill(bFieldCol2Second);
          secondSunG.rect(x, i, 2, 2);
        }
      }

      //variation of IX (unreleased version)  - //circles / vertical stripes
      function bitfieldXII() {
        //circles
        a = (x * bFieldY) & (64 + i);
        b = a ^ (a * 2);
        if (b == 0) {
          secondSunG.fill(bFieldCol2Second);
          secondSunG.rect(x, i, 2, 2);
        }
        //circles mod
        a = (x - bFieldY) & (128 + i);
        b = a ^ (a * 2);
        if (b == 0) {
          secondSunG.fill(bFieldCol1Second);
          secondSunG.rect(x, i, 2, 2);
        }

        //circles mod
        a =
          FXRandomOption([x, bFieldY]) &
          24 &
          (FXRandomOption([x, bFieldY]) / 2) &
          (24 + i); // interchange x and y
        b = a ^ (a * 2);
        if (b == 0) {
          secondSunG.fill(bFieldCol2Second);
          secondSunG.rect(x, i, 2, 2);
        }

        //lines
        a = (x + bFieldY) & (33 + i);
        b = a ^ (a * 2);
        if (b % 66 == 0) {
          secondSunG.fill(bFieldCol3Second);
          secondSunG.rect(x, i, 2, 2);
        }
      }

      //VII cantor set mod
      function bitfieldXI() {
        //stripes
        a = ((x % bFieldY) / 64) & ((bFieldY % 128) + i);
        b = a ^ (a * 2);
        if (b == 0) {
          secondSunG.fill(bFieldCol1Second);
          secondSunG.rect(x, i, 2, 2);
        }
        //checkerboard with line combo v3
        a = (x + x) & (bFieldY / 16 + i); // cantor set mod
        b = a ^ (a * 2);
        if (b % 5 !== 0) {
          secondSunG.fill(bFieldCol2Second);
          secondSunG.rect(x, i, 2, 2);
        }
        // lines mod
        a = (x | bFieldY) & ((x % 2) + i);
        b = a ^ (a * 2);
        if (b == 0) {
          secondSunG.fill(bFieldCol3Second);
          secondSunG.rect(x, i, 2, 2);
        }
      }

      //bfield II mod checked steps distrorted
      function bitfieldX() {
        //checker mod
        a = ((x ^ bFieldY) / 24) & (6 + i);
        b = a ^ (a * 2);
        if (b == 0) {
          secondSunG.fill(bFieldCol1Second);
          secondSunG.rect(x, i, 2, 2);
        }
        //noise mod
        a = (x * bFieldY) ** 10 % (90 + i);
        b = a ^ (a * 2);
        if (b == 0) {
          secondSunG.fill(bFieldCol2Second);
          secondSunG.rect(x, i, 2, 2);
        }
        //diagonal lines mod
        a = (x ^ bFieldY) % (60 + i); //15 or 30 normally but 60 is best for this version
        b = a ^ (a * 2);
        if (b == 0) {
          secondSunG.fill(bFieldCol3Second);
          secondSunG.rect(x, i, 2, 2);
        }
      }

      //lines sierpinski checkerboard
      function bitfieldIX() {
        //circles mod
        a = (x & bFieldY) % (64 + i);
        b = a ^ (a * 2);
        if (b == 0) {
          secondSunG.fill(bFieldCol1Second);
          secondSunG.rect(x, i, 2, 2);
        }
        //circle mod
        a = (x | bFieldY) & (64 + i);
        b = a ^ (a * 2);
        if (b == 0) {
          secondSunG.fill(bFieldCol2Second);
          secondSunG.rect(x, i, 2, 2);
        }
        //lines
        a = (x ^ bFieldY) % (17 + i);
        b = a ^ (a * 2);
        if (b == 0) {
          secondSunG.fill(bFieldCol3Second);
          secondSunG.rect(x, i, 2, 2);
        }
      }

      // original circles and sierpinski triangles grid mod
      function bitfieldVIII() {
        //circles
        a = (x & bFieldY) % (64 + i);
        b = a ^ (a * 2);
        if (b == 0) {
          secondSunG.fill(bFieldCol1Second);
          secondSunG.rect(x, i, 2, 2);
        }
        //circles
        a = (x * bFieldY) & (64 + i);
        b = a ^ (a * 2);
        if (b == 0) {
          secondSunG.fill(bFieldCol2Second);
          secondSunG.rect(x, i, 2, 2);
        }
        //lines
        a = (x ^ bFieldY) & (33 + i);
        b = a ^ (a * 2);
        if (b % 66 == 0) {
          secondSunG.fill(bFieldCol3Second);
          secondSunG.rect(x, i, 2, 2);
        }
      }

      //cantor set sierpinski-derivative field
      function bitfieldVII() {
        //minima vertical stripes v4
        a = x + bFieldY + i;
        b = a ^ (a * 2);
        if (b % 2 == 0) {
          secondSunG.fill(bFieldCol1Second);
          secondSunG.rect(x, i, 2, 2);
        }
        //checkerboard with line combo v3
        a = (x * 8) & ((bFieldY ^ 16) + i); // cantor set
        b = a ^ (a * 2);
        if (b == 0) {
          secondSunG.fill(bFieldCol2Second);
          secondSunG.rect(x, i, 2, 2);
        }
        //diagonal lines v2
        a = (x | bFieldY) & ((x % 2) + i);
        b = a ^ (a * 2);
        if (b == 0) {
          secondSunG.fill(bFieldCol3Second);
          secondSunG.rect(x, i, 2, 2);
        }
      }
      //minimal lines and cirlces field
      function bitfieldVI() {
        //checkerboard with line combo v3
        a = (x + 16) * (bFieldY * 8 + i); //v1
        b = a ^ (a * 2);
        if (b == 0) {
          //drkgrey
          secondSunG.fill(bFieldCol3Second);
          secondSunG.rect(x, i, 2, 2);
        }
        //minima vertical stripes v3
        a = (x ^ bFieldY) + i;
        b = a ^ (a * 2);
        //if (b % 2 == 0) {
        if (
          b %
            getWeightedOption([
              [2, 30],
              [4, 70],
            ]) ==
          0
        ) {
          //white
          secondSunG.fill(bFieldCol3Second);
          secondSunG.rect(x, i, 2, 2);
        }
        //circular pattern variations 2
        a = (x * bFieldY) & (64 + x / bFieldY + i); //64 only for this field
        b = a ^ (a * 2);
        if (b == 0) {
          //black
          secondSunG.fill(bFieldCol2Second);
          secondSunG.rect(x, i, 2, 2);
        }
        //diagonal lines v3
        a = (x | bFieldY) * (bFieldY % 2) + i; //2
        b = a ^ (a * 2);
        if (b % 18 == 0) {
          //steelblue
          secondSunG.fill(bFieldCol1Second);
          secondSunG.rect(x, i, 2, 2);
        }
      }

      // sierpinski triangles field
      function bitfieldV() {
        //sierpinski w/ relief
        a = x + bFieldY - ((x * bFieldY) % 19) + i;
        b = a ^ (a * 2);
        if (b % 32 == 0) {
          secondSunG.fill(bFieldCol1Second);
          secondSunG.rect(x, i, 2, 2);
        }
        //classic sierpinski triangle formula
        a =
          ((x | bFieldY) &
            getWeightedOption([
              [20, 20],
              [32, 20],
              [48, 20],
              [64, 20],
              [96, 20],
            ])) +
          i; //64 32 96 20 48
        b = a ^ (a * 2);
        if (b == 0) {
          secondSunG.fill(bFieldCol2Second);
          secondSunG.rect(x, i, 2, 2);
        }
        //minimal sierpinski
        a = x & (bFieldY + i);
        b = a ^ (a * 2);
        if (b == 0) {
          secondSunG.fill(bFieldCol3Second);
          secondSunG.rect(x, i, 2, 2);
        }
      }

      //checkerboard and lines field
      function bitfieldIV() {
        //checkerboard with line combo v2
        a = ((x % bFieldY) / 16) * ((x ^ bFieldY) % 18) + i;
        b = a ^ (a * 2);
        if (b == 0) {
          secondSunG.fill(bFieldCol1Second);
          secondSunG.rect(x, i, 2, 2);
        }
        //minimal vertical stripes custom 3
        a = (x - bFieldY) % (10 + i);
        b = a ^ (a * 2);
        if (b == 0) {
          secondSunG.fill(bFieldCol2Second);
          secondSunG.rect(x, i, 2, 2);
        }
        //mini checkerboard formula
        a = (x ^ bFieldY) & (72 + i);
        b = a ^ (a * 2);
        if (b == 0) {
          secondSunG.fill(bFieldCol3Second);
          secondSunG.rect(x, i, 2, 2);
        }
      }

      //circles and lines field fleur-de-lis-like ⚜️
      function bitfieldIII() {
        //minima vertical stripes v2
        a = (x * bFieldY) / (16 * bFieldY + i);
        b = a ^ (a * 2);
        if (b % 2 == 0) {
          secondSunG.fill(bFieldCol1Second);
          secondSunG.rect(x, i, 2, 2);
        }
        //circular pattern variations 1
        a =
          (x * bFieldY) &
          (getWeightedOption([
            [24, 60],
            [64, 40],
          ]) +
            i); //64 or 24
        b = a ^ (a * 2);
        if (b == 0) {
          secondSunG.fill(bFieldCol2Second);
          secondSunG.rect(x, i, 2, 2);
        }
        //minima vertical stripes customed
        a = (x ^ bFieldY) * (16 + i);
        b = a ^ (a * 2);
        if (
          b %
            getWeightedOption([
              [45, 60],
              [58, 40],
            ]) ==
          0
        ) {
          //45 = lines 58=consistent lines
          secondSunG.fill(bFieldCol3Second);
          secondSunG.rect(x, i, 2, 2);
        }
      }

      //line heavy field
      function bitfieldII() {
        //minima vertical stripes
        a = x & (9 + i);
        b = a ^ (a * 2);
        if (b == 0) {
          secondSunG.fill(bFieldCol1Second);
          secondSunG.rect(x, i, 2, 2);
        }
        //checkerboard with line combo
        a = ((x ^ bFieldY) & 32) * ((x ^ bFieldY) % 9) + i;
        b = a ^ (a * 2);
        if (b == 0) {
          secondSunG.fill(bFieldCol2Second);
          secondSunG.rect(x, i, 2, 2);
        }
        //diagonal lines
        a =
          (x ^ bFieldY) %
          (getWeightedOption([
            [15, 50],
            [30, 50],
          ]) +
            i); //15 or 30
        b = a ^ (a * 2);
        if (b == 0) {
          secondSunG.fill(bFieldCol3Second);
          secondSunG.rect(x, i, 2, 2);
        }
      }

      //circle heavy field
      function bitfieldI() {
        //checkerboard with lines
        a = ((x ^ bFieldY) & 32) * ((x ^ bFieldY) % 9) + i;
        b = a ^ (a * 2);
        if (b == 0) {
          secondSunG.fill(bFieldCol1Second);
          secondSunG.rect(x, i, 2, 2);
        }
        //circular pattern variations
        a = (x * bFieldY) & (64 + i); //64 only 24 too unclear
        b = a ^ (a * 2);
        if (b == 0) {
          secondSunG.fill(bFieldCol2Second);
          secondSunG.rect(x, i, 2, 2);
        }
        //diagonal lines
        a =
          (x ^ bFieldY) %
          (getWeightedOption([
            [15, 50],
            [30, 50],
          ]) +
            i); //15 or 30
        b = a ^ (a * 2);
        if (b == 0) {
          secondSunG.fill(bFieldCol3Second);
          secondSunG.rect(x, i, 2, 2);
        }
      }
      switch (secondBFId) {
        case "XV":
          bitfieldXV();
          break;
        case "XIV":
          bitfieldXIV();
          break;
        case "XIII":
          bitfieldXIII();
          break;
        case "XII":
          bitfieldXII();
          break;
        case "XI":
          bitfieldXI();
          break;
        case "X":
          bitfieldX();
          break;
        case "IX":
          bitfieldIX();
          break;
        case "VIII":
          bitfieldVIII();
          break;
        case "VII":
          bitfieldVII();
          break;
        case "VI":
          bitfieldVI();
          break;
        case "V":
          bitfieldV();
          break;
        case "IV":
          bitfieldIV();
          break;
        case "III":
          bitfieldIII();
          break;
        case "II":
          bitfieldII();
          break;
        case "I":
          bitfieldI();
          break;
      }
    }
  }
}

// Object for instantiating the Barnsley Fern objects which create the abstracted rays of sunshine shapes in the sketch
class BarnsleyFernObject {
  //variable declaration
  constructor() {
    this.bFernNextX = 0;
    this.bFernNextY = 0;
    this.currentX = 0;
    this.currentY = 0;
    this.prevX = random(-width, width);
    this.prevY = random(-height, height);
    this.newB2Var = 0.04;

    // The fern12 coefficients are determined randomly within the bounds of this fern12Coefs object
    this.fern12Coefs = {
      f1d1: random(-0.8, 0.24),
      f2a2: random(0.4, 0.6),
      f2c2: random(-0.35, 0.79),
      f2d2: random(0.5, 0.3),
      f2e2: random(0.1, 0.5),
      f2f2: random(-0.3, 0.8),
      f3a3: random(1.18, 1.6),
      f3b3: random(-0.53, -0.78),
      f3c3: random(0.23, 0.5),
      f3d3: random(0.1, 1),
      f3e3: random(-0.5, -0.75),
      f3f3: random(0.2, 0.6),
      f4a4: random(0.15, 0.45),
      f4b4: random(0.1, 0.4),
      f4c4: random(-0.6, -0.9),
      f4d4: random(0.11, 0.72),
      f4F4: random(0.2, 0.66),
    };

    // Shine/sparkle colours which animate over the fernCol assigned in the sketch setup
    this.mRainbow = color(
      random(170, 255),
      random(this.prevX + this.prevY, 255),
      random(170, 255)
    );
    this.brass = color(random(210, 220), random(170, 180), random(10, 30));
    this.gRainbow = color(
      this.prevX - random(0, 255),
      random(this.prevX - this.prevY - 100, 255),
      this.prevY % 255
    );
    //more green/teal
    this.bRainbow = color(
      random(this.prevX - this.prevY, 255),
      random(100, 200),
      random(200, 255)
    );
    this.fernObjCol = FXRandomOption([
      this.mRainbow,
      this.brass,
      this.gRainbow,
      this.bRainbow,
    ]);
  }
  // Method for drawing the points to comprise the fern's shape
  drawPoint() {
    stroke(fernCol);
    strokeWeight(1);

    this.prevX = map(this.currentX, -2.182, 2.6558, 50, width / 1.65);
    this.prevY = map(this.currentY, 0, 9.9983, height / 1.65, 50);

    point(this.prevX, this.prevY);
  }
  // Repeat of previous method but adding finer points whose alpha vals fade and reappear in time using p5's setAlpha
  drawPointLayerTwo() {
    this.fernObjCol.setAlpha(128 * 128 * sin(millis() / 750));

    stroke(this.fernObjCol);
    strokeWeight(0.25);

    this.prevX = map(this.currentX, -2.182, 2.6558, 50, width / 1.65);
    this.prevY = map(this.currentY, 0, 9.9983, height / 1.65, 50);

    point(this.prevX, this.prevY);
  }
  // Method for containing the coefficients and probabilities to achieve custom fern shape including the B2 variable which will animate the fern
  calcBF() {
    // Track framecounts for animation
    this.sec = frameCount;

    // Vary the b2 coefficient to replicate animation similar to this guide- https://sites.google.com/site/logicedges/the-barnsley-fern
    if ((this.sec / 1) & (this.sec / 2)) {
      this.newB2Var += this.newB2Var * (deltaTime % 1);
    }
    if (this.newB2Var > 0.2) {
      this.newB2Var = 0.04;
    }
  }
  //custom barnsley fern coefficiants first prototyped here www.chradams.co.uk/fern/maker.html then refactored here to enhance appearance
  fernOne() {
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
  }

  fernTwo() {
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
  }

  fernThree() {
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
  }

  fernFour() {
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
  }

  fernFive() {
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
  }

  fernSix() {
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
  }
  fernSeven() {
    this.r = random(1);

    if (this.r < 0.01) {
      //1
      this.bFernNextX = 0;
      this.bFernNextY = 0.25 * this.currentY;
    } else if (this.r < 0.86) {
      //2
      this.bFernNextX =
        -0.75 * this.currentX + this.newB2Var * this.currentY + 1.5;
      this.bFernNextY = 0.35 * this.currentX + 0.77 * this.currentY + 0.05;
    } else if (this.r < 0.93) {
      //3
      this.bFernNextX = -0.05 * this.currentX + -0.05 * this.currentY;
      this.bFernNextY = 0.5 * this.currentX + 0.75 * this.currentY + 0.05;
    } else {
      //4
      this.bFernNextX = -0.5 * this.currentX + 0.5 * this.currentY + 0.15;
      this.bFernNextY = 0.25 * this.currentX + 0.15 * this.currentY + -0.5;
    }

    this.currentX = this.bFernNextX;
    this.currentY = this.bFernNextY;
  }
  fernEight() {
    this.r = random(1);

    if (this.r < 0.01) {
      //1
      this.bFernNextX = 0;
      this.bFernNextY = -0.015 * this.currentY;
    } else if (this.r < 0.86) {
      //2
      this.bFernNextX =
        -0.95 * this.currentX + this.newB2Var * this.currentY + 0.36;
      this.bFernNextY = 0.32 * this.currentX + 0.8 * this.currentY + 0.175;
    } else if (this.r < 0.93) {
      //3
      this.bFernNextX = 0.05 * this.currentX + -0.96 * this.currentY;
      this.bFernNextY = -0.15 * this.currentX + -1.15 * this.currentY + 0.15;
    } else {
      //4
      this.bFernNextX = -0.15 * this.currentX + -0.12 * this.currentY;
      this.bFernNextY = -0.75 * this.currentX + 0.1 * this.currentY + 0.01;
    }

    this.currentX = this.bFernNextX;
    this.currentY = this.bFernNextY;
  }
  fernNine() {
    this.r = random(1);

    if (this.r < 0.01) {
      //1
      this.bFernNextX = 0;
      this.bFernNextY = -0.5 * this.currentY;
    } else if (this.r < 0.86) {
      //2
      this.bFernNextX =
        0.75 * this.currentX + this.newB2Var * this.currentY + -0.275;
      this.bFernNextY = -0.13 * this.currentX + -0.9 * this.currentY + 1.5;
    } else if (this.r < 0.93) {
      //3
      this.bFernNextX = -0.82 * this.currentX + 0.24 * this.currentY;
      this.bFernNextY = -0.98 * this.currentX + 0.15 * this.currentY + 0.84;
    } else {
      //4
      this.bFernNextX = -0.75 * this.currentX + 0.55 * this.currentY;
      this.bFernNextY = 0.12 * this.currentX + 0.41 * this.currentY + 0.81;
    }

    this.currentX = this.bFernNextX;
    this.currentY = this.bFernNextY;
  }
  fernTen() {
    this.r = random(1);

    if (this.r < 0.05) {
      //1
      this.bFernNextX = 0;
      this.bFernNextY = -0.15 * this.currentY;
    } else if (this.r < 0.4) {
      //2
      this.bFernNextX =
        -0.92 * this.currentX + this.newB2Var * this.currentY + 0.81;
      this.bFernNextY = -0.16 * this.currentX + 0.7 * this.currentY + -1;
    } else if (this.r < 0.4) {
      //3
      this.bFernNextX = 0.19 * this.currentX + 0.2 * this.currentY + 0.2;
      this.bFernNextY = -0.95 * this.currentX + 0.9 * this.currentY + 0.9;
    } else {
      //4
      this.bFernNextX = 0.75 * this.currentX + 0.25 * this.currentY + 0.15;
      this.bFernNextY = -0.96 * this.currentX + -0.72 * this.currentY + 1;
    }

    this.currentX = this.bFernNextX;
    this.currentY = this.bFernNextY;
  }
  fernEleven() {
    this.r = random(1);

    if (this.r < 0.01) {
      //1
      this.bFernNextX = 0;
      this.bFernNextY = 0.25 * this.currentY;
    } else if (this.r < 0.86) {
      //2
      this.bFernNextX =
        -0.75 * this.currentX + this.newB2Var * this.currentY + 1.5;
      this.bFernNextY = -0.35 * this.currentX + -0.77 * this.currentY + -0.95;
    } else if (this.r < 0.93) {
      //3
      this.bFernNextX = -0.05 * this.currentX + -0.05 * this.currentY;
      this.bFernNextY = 0.5 * this.currentX + 0.75 * this.currentY + 0.05;
    } else {
      //4
      this.bFernNextX = -0.5 * this.currentX + 0.5 * this.currentY + 0.15;
      this.bFernNextY = 0.25 * this.currentX + 0.15 * this.currentY + -0.5;
    }

    this.currentX = this.bFernNextX;
    this.currentY = this.bFernNextY;
  }
  fernTwelve() {
    this.r = random(1);

    if (this.r < 0.01) {
      //1
      this.bFernNextX = 0;
      this.bFernNextY = this.fern12Coefs.f1d1 * this.currentY;
    } else if (this.r < 0.86) {
      //2
      this.bFernNextX =
        this.fern12Coefs.f2a2 * this.currentX +
        this.newB2Var * this.currentY +
        this.fern12Coefs.f2e2;
      //+ -1; //f2e2

      this.bFernNextY =
        this.fern12Coefs.f2c2 * this.currentX +
        this.fern12Coefs.f2d2 * this.currentY +
        this.fern12Coefs.f2f2;
    } else if (this.r < 0.93) {
      //3
      this.bFernNextX =
        this.fern12Coefs.f3a3 * this.currentX +
        this.fern12Coefs.f3b3 * this.currentY +
        this.fern12Coefs.f3e3;
      //+ -0.73; //f3e3

      this.bFernNextY =
        this.fern12Coefs.f3c3 * this.currentX +
        this.fern12Coefs.f3d3 * this.currentY +
        this.fern12Coefs.f3f3;
    } else {
      //4
      this.bFernNextX =
        this.fern12Coefs.f4a4 * this.currentX +
        this.fern12Coefs.f4b4 * this.currentY;
      this.bFernNextY =
        this.fern12Coefs.f4c4 * this.currentX +
        this.fern12Coefs.f4d4 * this.currentY +
        this.fern12Coefs.f4F4;
    }

    this.currentX = this.bFernNextX;
    this.currentY = this.bFernNextY;
  }
  // Display the fern
  show() {
    for (let i = 0; i < 1; i++) {
      this.drawPoint();
      this.drawPointLayerTwo();
      this.calcBF();
      rotate(PI / fernAmount); //2 4 8 10
      switch (fernId) {
        case 1:
          this.fernOne();
          break;
        case 2:
          this.fernTwo();
          break;
        case 3:
          this.fernThree();
          break;
        case 4:
          this.fernFour();
          break;
        case 5:
          this.fernFive();
          break;
        case 6:
          this.fernSix();
          break;
        case 7:
          this.fernSeven();
          break;
        case 8:
          this.fernEight();
          break;
        case 9:
          this.fernNine();
          break;
        case 10:
          this.fernTen();
          break;
        case 11:
          this.fernEleven();
          break;
        case 12:
          this.fernTwelve();
          break;
      }
    }
  }
}

// Reusing the drawNoiseBg function from my last drop, 'planet_you' but scaling it up to be the bg this time
function drawPaperFx(bg, bgCol) {
  let noiseBase = 10;
  let rnd = random(0.0000001, 0.0000001);
  for (let i = 5000; i < 10000; i++) {
    const x = random(bgRectXY) * width; // 0.85, 1, 1.5, 2, 2.5
    const y = random(bgRectXY) * height;
    const w = noise(noiseBase) * 150;
    const h = noise(noiseBase) * 250;

    bg.stroke(bgNoise);
    bg.strokeWeight(bgStroke); //0.075, 0.15, 0.215
    bg.fill(bgCol);
    bg.rect(x, y, w, h);

    noiseBase += rnd;
  }
}
// On each mouse click on the sketch, run the function to draw the noise again and watch noise fade into the bgCol colour determined during setup
window.onmousedown = () => {
  drawPaperFx(paperFxBgGraphic, bgCol);
};

window.onkeypress = () => {
  if (keyCode === 83) {
    let c = get(0, 0, windowWidth, windowHeight);
    saveCanvas.image(c, 0, 0);
    save(saveCanvas, "10_PRINTSCAPE.png");
  }
};
