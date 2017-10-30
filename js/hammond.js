var NUM_OF_DRAWBARS = 9;
var DRAWBAR_MAX = 8;
var drawbars = [];

var pressedNotes = [0,0,0,0,0,0,0,0,0,0,0,0];

function setup() {
  createCanvas(windowWidth, windowHeight);


  //create the drawbar sliders in the DOM and intialize them to 0.
  for(var i = 0; i < NUM_OF_DRAWBARS; i++){
    drawbars[i] = createSlider(0, DRAWBAR_MAX, 8, 1);
    drawbars[i].position(20 + i*30, 20);
    drawbars[i].class('drawbar');
  }


}

function draw() {
  background(51);

  //prints the value of the draw bar underneath the draw bar
  textSize(20);
  textAlign(CENTER);
  fill(255,255,255);
  for(var i = 0; i < NUM_OF_DRAWBARS; i++){
    text(8-drawbars[i].value(), 33+i*30, 200);
  }

  //display which notes are being held down
  textSize(50);
  textAlign(CENTER);
  var noteName;
  var noteX;
  var noteY;
  //for each note index in the array
  for(var noteIndex = 0; noteIndex < 12; noteIndex++){
    //if the note is not pressed
    if(pressedNotes[noteIndex] == 0){
      //fill is white
      fill(255,255,255);
    }else{
      //otherwise fill is green
      fill(0,255,0);
    }
    //convert index into note name
    noteName = indexToNoteName(noteIndex);
    console.log(noteName);
    //calculate X
    noteX = 200+noteIndex*50;
    if(isBlackKey(noteIndex)){
      noteY = 300;
    }else{
      noteY = 400;
    }
    text(noteName, noteX, noteY);
  }

}



function keyPressed(){
  if(keyCode == 65){
    pressedNotes[0] = 1;
  }else if (keyCode == 87){
    pressedNotes[1] = 1;
  }else if (keyCode == 83){
    pressedNotes[2] = 1;
  }else if (keyCode == 69){
    pressedNotes[3] = 1;
  }else if (keyCode == 68){
    pressedNotes[4] = 1;
  }else if (keyCode == 70){
    pressedNotes[5] = 1;
  }else if (keyCode == 84){
    pressedNotes[6] = 1;
  }else if (keyCode == 71){
    pressedNotes[7] = 1;
  }else if (keyCode == 89){
    pressedNotes[8] = 1;
  }else if (keyCode == 72){
    pressedNotes[9] = 1;
  }else if (keyCode == 85){
    pressedNotes[10] = 1;
  }else if (keyCode == 74){
    pressedNotes[11] = 1;
  }
  return false;
}

function keyReleased(){
  if(keyCode == 65){
    pressedNotes[0] = 0;
  }else if (keyCode == 87){
    pressedNotes[1] = 0;
  }else if (keyCode == 83){
    pressedNotes[2] = 0;
  }else if (keyCode == 69){
    pressedNotes[3] = 0;
  }else if (keyCode == 68){
    pressedNotes[4] = 0;
  }else if (keyCode == 70){
    pressedNotes[5] = 0;
  }else if (keyCode == 84){
    pressedNotes[6] = 0;
  }else if (keyCode == 71){
    pressedNotes[7] = 0;
  }else if (keyCode == 89){
    pressedNotes[8] = 0;
  }else if (keyCode == 72){
    pressedNotes[9] = 0;
  }else if (keyCode == 85){
    pressedNotes[10] = 0;
  }else if (keyCode == 74){
    pressedNotes[11] = 0;
  }
  return false;
}

//function to see if a note index is in the position to be a black key
function isBlackKey(noteIndex){
  if (noteIndex == 1 || noteIndex == 3 || noteIndex == 6 || noteIndex == 8 || noteIndex == 10){
    return true;
  }else{
    return false;
  }
}

//function to translate a note index into a note name for example 0 -> C, 1->C#
function indexToNoteName(noteIndex){
  switch(noteIndex){
    case 0:
      return "C";
      break;
    case 1:
      return "C#";
      break;
    case 2:
      return "D";
      break;
    case 3:
      return "D#";
      break;
    case 4:
      return "E";
      break;
    case 5:
      return "F";
      break;
    case 6:
      return "F#";
      break;
    case 7:
      return "G";
      break;
    case 8:
      return "G#";
      break;
    case 9:
      return "A";
      break;
    case 10:
      return "A#";
      break;
    case 11:
      return "B";
      break;
    default:
      return false;
  }
}
