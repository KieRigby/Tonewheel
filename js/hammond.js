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

  textSize(20);
  textAlign(CENTER);
  fill(255,255,255);
  for(var i = 0; i < NUM_OF_DRAWBARS; i++){
    text(8-drawbars[i].value(), 33+i*30, 200);
  }


}
