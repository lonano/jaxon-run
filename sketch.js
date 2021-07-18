var path, pathImg
var boy, boyImg
var wall1;
var wall2;
function preload(){
  //pre-load images
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage("path",pathImg)
  path.velocityY = 3;
  path.scale=1.2;
  boy = createSprite(200,350,10,10);
  boy.scale = 0.05;
  boy.addAnimation("boy",boyImg);
  wall1 = createSprite(40,200,30,400);
  wall1.visible = false;
  wall2 = createSprite(365,200,30,400);
  wall2.visible = false;
}

function draw() {
  background(0);
  if(path.y > 400){
    path.y = height/2;
  }
  createEdgeSprites();
  boy.collide(wall1);
  boy.collide(wall2);
  boy.x = mouseX
    drawSprites();
}
