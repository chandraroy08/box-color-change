var fixedrect,movingrect;

function setup() {
  createCanvas(800,400);
  
  fixedrect=createSprite(200,50,20,70);
  movingrect=createSprite(200,150,20,70);
  
}

function draw() {
  background(0,0,0);
movingrect.y=World.mouseY
movingrect.x=World.mouseX
console.log(movingrect.x-fixedrect.x)
if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2){
  movingrect.shapeColor='red'
  fixedrect.shapeColor='red'
}
else{
  movingrect.shapeColor='green'
  fixedrect.shapeColor='green'
}
  drawSprites();
}