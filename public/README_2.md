# 10_PRINTSCAPE
## _04/2022_
### (@museumhotel)

### _p5.js_

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