var rocket, pebble, obstacle1,obstacle2 , obstacle3, bg
var rocketImg, pebbleImg, obstacle1Image,obstacle2Image , obstacle3Image, backgroundImage

function preload() {
  backgroundImage = loadImage("bg.jpeg");
  pebbleImg= loadImage("pebble.jpg");
  rocketImg = loadImage("rocket.png");
  obstacle1Image = loadImage("obstacle1.png","obstacle2.png","obstacle3.png");
  
  
}

function setup() {
  canvas = createCanvas(600,600);
  rocket = createSprite(200,400,20,20)
  rocket.addImage(rocketImg)
  pebble = createSprite()
  
  

}

function draw() {
  background("lightblue");
  




  drawSprites()
}

function spawnObstacles(){
  if (frameCount % 60 === 0 ) {
    var obstacles = createSprite(400,365,50,50)

    var rand = randomNumber(1,3)
    obstacles.setAnimation(obstacle1Image + rand)
    obstacles.scale= 0.07;



  }





}

