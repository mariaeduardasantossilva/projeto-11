var imgbarco;
var imgmar

function preload(){
 imgbarco=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
 imgmar=loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  mar = createSprite(400,200);
  mar.addImage(imgmar);
  mar.velocityX=-5;
  mar.scale=0.3;
  barco = createSprite(130,200,30,30);
  barco.addAnimation("barco",imgbarco);
  barco.scale=0.25;
}

function draw() {
  background("blue");
   mar.velocityX=-3;
   if (mar.x<0 && mar.x>1000){
     mar.x=mar.width/2;
   }

  console.log(mar.x)

    drawSprites();

 
}
