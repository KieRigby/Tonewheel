var NUM_OF_DRAWBARS = 9;
var DRAWBAR_MAX = 8;
var drawbars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);


  //create the drawbar sliders in the DOM and intialize them to 0.
  for(var i = 0; i < NUM_OF_DRAWBARS; i++){
    drawbars[i] = createSlider(0, DRAWBAR_MAX, 0, 1);
    drawbars[i].position(20 + i*30, 20);
    drawbars[i].class('drawbar');
  }


}

function draw() {
  background(51);


}
