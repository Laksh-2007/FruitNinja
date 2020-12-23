var sword;
var END=0;
var PLAY=1;
var gameState=1;
var fruit;
var monster;
function preload(){
  swordImage=loadImage("sword.png");
  gameOver=loadImage("gameover.png");
  fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
alien=loadImage("alien1.png")  ;
  swooshSound=loadSound("knifeSwooshSound.mp3");
 endSound=loadSound("gameover.mp3"); 
  alien2=loadImage("alien2.png");
}

function setup(){
  
 sword=createSprite(200,200,20,20);
  sword.addImage(swordImage);
  sword.scale=0.7;
  score=0;
sword.setCollider("rectangle" ,0,0,100,100);
  fruitGroup=createGroup();
  enemyGroup=createGroup();
  sword.debug=true;
}

function draw(){
  background("black");
  if(gameState===PLAY){
    fruits(); 
    enemy();
    
    sword.y=World.mouseY;
sword.x=World.mouseX;
  }
if(fruitGroup.isTouching(sword)){
  score=score+2;
  fruitGroup.destroyEach();
  swooshSound.play();
}
 if(enemyGroup.isTouching(sword)){
   gameSate=END;
   endSound.play();
   enemyGroup.destroyEach();
   sword.x=200;
   sword.y=200;
   sword.addImage(gameOver);
fruitGroup.setVelocity(0,0);  
 }
  drawSprites();
  textSize(25);
  fill("red");
  text("Score:" + score,180,20);
}
function fruits(){
  if(World.frameCount%80===0){
  var eatGp=createGroup();
    var fruit=createSprite(400,200,20,20);
    fruit.scale=0.2;
    fruit.debug=true;
   var r=Math.round(random(1,4));
   if(r==1){
     fruit.addImage(fruit1);
     fruit.x=0;
     fruit.velocityX=(7+(score/4));
   }
   else if(r==2){
     fruit.addImage(fruit2);
     
     fruit.velocityX=-(7+(score/4));
   }
   else if(r==3){
     fruit.addImage(fruit3);
     fruit.x=0;
     fruit.velocityX=(7+(score/4));
   }
    
   else if(r==4){
     fruit.addImage(fruit4);
     fruit.velocityX=-(7+(score/4));
   }
   fruit.y=Math.round(random(50,340));
   
  
   fruitGroup.add(fruit);
  }
}
function enemy(){
  if(World.frameCount%200===0){
 var monster=createSprite(400,200,20,20);
 monster.addImage(alien);
    monster.addImage(alien2);
 monster.y=Math.round(random(100,300));
 monster.velocityX=-(8+(score/4));
 
 enemyGroup.add(monster);
 } 

}