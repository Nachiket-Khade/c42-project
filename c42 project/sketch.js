var iss, spacecraft;
var bg,issimg, scimg;
var scimg1,scimg2,scimg3;
var hasDocked = false;

function preload() {
  bg = loadImage("spacebg.jpg");

  issimg  = loadImage("spacecraft.png");

  scimg  = loadImage("spacecraft1.png");
  scimg1 = loadImage("spacecraft2.png");
  scimg2 = loadImage("spacecraft3.png");
  scimg3 = loadImage("spacecraft4.png");
}

function setup() {
 canvas = createCanvas(800,400);
  //background(bg);
  hasDocked = false;

  spacecraft = createSprite(500,300,0,0);
  spacecraft.addImage(scimg);
  spacecraft.scale = 0.2;

  iss = createSprite(500,100,0,0);
  iss.addImage(issimg);
  iss.scale = 0.25;
}

function draw() {
  background(bg);
  if(!hasDocked) {
    spacecraft.x += random(1,-1);
    if(keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y -2;
    }
      
    if(keyDown("LEFT_ARROW")){
        spacecraft.addImage(scimg2);
      spacecraft.x = spacecraft.x - 1;
    }
      
    if(keyDown("RIGHT_ARROW")){
        spacecraft.addImage(scimg3);
      spacecraft.x = spacecraft.x + 1;
    }
      
    if(keyDown("DOWN_ARROW")){
        spacecraft.addImage(scimg1);
    }
  }
  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("red")
    text("Docking Successful!", 200, 300);
  }
  drawSprites();
}