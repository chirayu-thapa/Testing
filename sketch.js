var box
var pic = ""

function preload(){
  pic = loadImage("Pic.jpg")
}

function setup(){
  canvas = createCanvas(400,400);
  box = createSprite(200,200,20,20);
  box.addImage(pic);
  box.scale=0.1;
}
function draw(){
background ("black");
  drawSprites();

  if(keyIsDown(RIGHT_ARROW)){
    box.x=box.x+3;
  }
  if(keyIsDown(LEFT_ARROW)){
    box.x=box.x-3;
  }
  if(keyIsDown(UP_ARROW)){
    box.y=box.y-3;
  }
  if(keyIsDown(DOWN_ARROW)){
    box.y=box.y+3;
  }
}




