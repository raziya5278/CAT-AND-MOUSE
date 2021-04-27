
var background, backgroundImage;
var tom, tom_runningImage, tom_lastImage;
var jerry, jerry_teasingImage, jerry_lastImage;

function preload() {
    //load the images here
    backgroundImage = loadImage(garden.png);
    tom_runningImage = loadImage(tomTwo.png,tomThree.png);
    tom_lastImage = loadImage(tomFour.png);
    jerry_teasingImage = loadImage(jerryTwo.png,jerryThree.png);
    jerry_lastImage = loadImage(jerryFour.png);
   
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    background = createSprite(1000, 800);
    background.addImage(backgroundImage);

    tom = createSprites(800,315);
    tom.addImage(tom_runningImage,tom_lastImage);
   
    jerry = createSprites(750,290);
    jerry.addImage(jerry_teasingImage,jerry_lastImage);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if (isTouching(tom,jerry)){
        jerry.changeAnimation = "jerry_lastImage";
        tom.changeAnimation = "tom_lastImage"; 
      }
      else{
        jerry.changeAnimation = "jerry_teasingImage";
        tom.changeAnimation = "tom_runningImage";
        tom.velocityX = 0;
      } 

    drawSprites();
}

function keyPressed(){

  //For moving and changing animation write code here

  if (keyCode === LEFT_ARROW){
      tom.velocityX = -5;
      tom.addAnimation ("tomRunning","tomTwo.png");
      tom.changeAnimation ("tomRunning");
      
      jerry.addAnimation ("jerryTeasing","jerryTwo.png, jerryThree.png");
      jerry.changeAnimation ("jerryTeasing");

  }

}
