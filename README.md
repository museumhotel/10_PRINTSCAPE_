# 10_PRINTSCAPE
## _04/2022_
### _p5.js_

### (@museumhotel)

Cityscapes are good creative coding projects. This work reimagines the popular cityscape sketch with algorithms not immeadiately associated with the cityscape tradition.
  
The title of the piece takes its name from the 10 PRINT command from the BASIC computer programming language and the [2012 book](https://10print.org/) bearing the same name as the command. 
```basic
10 PRINT CHR$(205.5+RND(1)); : GOTO 10
```

A random number between 0 and 1 is selected and depending on the result, a left or right line is drawn, this is repeated and probabilistically determines the output.
  
### Cityscape / 10 PRINT
I refactored 4 different 10 PRINT methods which run a P5.js version of the 10 PRINT command from within a 10PRINT Skyscraper object. These functions are responsible for constructing the inner _skeleton_ of the buildings in the cityscape and they're identified as a feature with the "TEN_PRINT_Style" property. 

The "Line" style techincally renders triangles but what's actually output resembles clusters of towering architectural forms viewed from a low perspective.

The "Arc" style distributes horizontal lines densley at the top of the skyscraper and _wedge-cut_ circular shapes towards the bottom, a result of the arc shape with a fill colour.

When rendering the "Rectangle" style, simple rectangular shapes are output to form the internal scaffold for the double-layered 10 PRINT method in each iteration. 

The rarest style is the "Classic". Meant to evoke the standard output of the 10 PRINT command with no modifications.

### Skyscraper?
Each 'skyscraper' is actually a composite of two instances of the output of the 10 PRINT method layered on top of each other. The first instance acts as a scaffold layer.

The second instance of the 10PRINT method generates the rectangle shapes, simultaneously fading into and out of obfuscation revealing the scaffold below at a rate defined by the tenPSpeed variable, controlling the speed of each loop cycle.

When the 10 PRINT scaffold function completes one cycle, the size variable is incrementally increased with each new cycle until a certain value is reached at which point it loops from a starting size again. Randomly distributed feature shapes form the base layer, while rectangles as 'windows' are on the second layer on top. There are 10 colour palettes with their own unique combinations of fill and stroke colours.

### Sun Shape / Bitfield
The circle in the top left of the sketch is a representation of the sun which we can expect in many cityscapes. It is filled with the output of a similarly deterministic pattern, the result of combinations of [logical operators](https://p5js.org/examples/control-logical-operators.html) with 15 potential outputs and unique colour palettes. 

Depending on the operators and values, some outputs will contain some combinatation of common self-similar fractals, e.g. Sierpinski triangles, the Cantor set, as well as patterns like checkerboards, etc... I got interested by the outputs of bitwise operators by seeing and sharing work on the [dwitter](www.nickpisca.com/sherpa/?p=600) platform.

### Sun Rays / Barnsley Fern
Forming an arc on the sketch around the sun are sun rays. These are rendered with points which are distributed on the canvas using affine transformations related to [Barnsley fern fractals](https://en.wikipedia.org/wiki/Barnsley_fern).

This work deconstructs the plant shapes afforded by Barnsley's fern algorithm into sun rays by modifying the coefficiants used to determine the structure of the fern. There are 12 different ferns and 13 different base colours as well as 4 different shine/sparkle colours which sit on top of and animate with the rays.

### Background / Noise
The background noise graphic uses the noise function from my previous project, [planet_you](https://www.fxhash.xyz/generative/9813), where it orbitted around the planet in the center of the sketch. The difference here is the scale has been blown up to fill much of the canvas. 

How much of the noise background fills the canvas as well as it's transparency and the stroke colour and weight of the rectangles which comprise it are all determined randomly along with the base fill colour. The "bgRectXY" property determines how much of this graphic fills the canvas.  

with bgRectXY at 0.8, more of the background _behind_ the noise is visible which I prefer as this reveals more of the edge of the noise graphic where the detail of the layers which comprise the noise can be seen. At 1, the graphic fills most of the canvas save for the right and bottom edges which don't quite stretch to fill the canvas. 

Had I set the property to a higher number this piece would likely look more 'polished' and ready but I'd like to challenge perceptions of skill and completeness.

A click of the mouse on the sketch runs the function which generates the noise, the effect fades the noise as it's redrawn over the canvas submerging it deeper into the fill colour of the rectangles rendering the noise resembling textured and aging plaster or parchment.

Credit goes to [liamegan's fxhash-helpers library](https://github.com/liamegan/fxhash-helpers) and Mark Knol(@mknol) for providing the functions for assigning random and weighted random options. 

Thank you! 🙌🏾
================
FXHASH Generative Token webpack boilerplate
================

A boilerplate to automate and ease the creation of Generative Tokens on fxhash. This project uses [webpack](https://webpack.js.org/) and [webpack-dev-server](https://github.com/webpack/webpack-dev-server) to improve the development and deployment experience.

Before diving into the development of your token, we recommend reading the [Guide to mint a Generative Token](https://fxhash.xyz/articles/guide-mint-generative-token) to get some understanding of the process.

If you are looking for a simpler boilerplate, you can use the [fxhash simple boilerplate](https://github.com/fxhash/fxhash-simple-boilerplate) instead.


# Scope of this project

* provide a local environment in which you can iterate and use modern features from the javascript ecosystem
* automate the creation of a .zip file ready to be uploaded on fxhash


# How to use

You will need to have [nodejs](https://nodejs.org/) installed.

## Installation

> First, make sure that your node version is >= 14

Clone the repository on your machine and move to the directory
```sh
$ git clone https://github.com/fxhash/fxhash-webpack-boilerplate.git your_folder && cd your_folder
```

Install the packages required for the local environment
```sh
$ npm i
```

## Start local environment

```sh
$ npm start
```

This last command will start a local http server with [live reloading](https://webpack.js.org/configuration/dev-server/#devserverlivereload) enabled so that you can iterate faster on your projects. Open [http://localhost:8080](http://localhost:8080) to see your project in the browser.

## Build

```sh
$ npm run build
```

Will bundle your js dependencies into a single minified `bundle.js` file, move your files from the `public/` to the `dist/` folder, and link the `bundle.js` with the `index.html`.

**Moreover, it will create a `dist-zipped/project.zip` file which can be directly imported on fxhash**.

# Develop your token

Once the environment is started, you can edit the `src/index.js` file to start building your artwork. The `index.html` file is located in the `public/` folder.

You can import libraries using `npm` or by adding the library file in the `public/` folder and link those using relative paths in the `index.html`.

Any file in the `public/` folder will be added to the final project. 

## fxhash snippet

fxhash requires you to use a javascript code snippet so that the platform can inject some code when tokens will be generated from your Generative Token. The code snippet is already in the `index.html` file of this boilerplate, so you don't have to add it yourself.

**During the development stages, the snippet will generate a random hash each time the page is refreshed**. This way, it helps you reproduce the conditions in which your token will be executed on fxhash.

It creates 3 variables:
- `fxhash`: a random 64 characters hexadecimal string. This particular variable will be hardcoded with a static hash when someone mints a token from your GT
- `fxrand()`: a PRNG function that generates deterministic PRN between 0 and 1. **Simply use it instead of Math.random()**.

*The index.js of this boilerplate quickly demonstrates how to use these*.

## How do Generative Tokens work

This is how Generative Tokens work on fxhash:
* you upload your project to the platform (see next section)
* you mint your project
* when a collector will mint its unique token from your Generative Token, a random hash will be hard-coded in the **fxhash code snippet**
* the token will now have its own `index.html` file, with a **static** hash, ensuring its immutability 

The [Guide to mint a Generative Token](https://fxhash.xyz/articles/guide-mint-generative-token) give in-depth details about this process.


# Publish your token

Once you are happy with the results, you can run the following command:

```sh
$ npm run build
```

This will create a `dist-zipped/project.zip` file.

Go to [https://fxhash.xyz/sandbox/](https://fxhash.xyz/sandbox/) and upload the `project.zip` file in there to see if it works properly.

If your token does not work properly, you can iterate easily by updating your files, running `$ npm run build` again, and upload the zip file again.

Finally, you can mint your token using the same `project.zip`file.


# Rules to follow

> Theses rules must be followed to ensure that your token will be future-proof, accepted by fxhash, and behave in the intended way

* the zip file must be under 15 Mb
* any path to a resource must be relative (./path/to/file.ext)
* no external resources allowed, you must put all your resources in the `public/` folder (sub-folders are OK)
* no network calls allowed (but calls to get resources from within your `public/` folder)
* you must handle any viewport size (by implementing a response to the `resize` event of the `window`)
* you **cannot use random number generation without a seed** (the same input hash must always yield the same output). The `fxrand` function does a very good job in that regard.
