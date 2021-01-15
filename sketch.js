var log1,log2,log3,log4,log5,log6,log7,log8,log9,log10,log11,log12,log13,log14,log15,log16,log18,log19,log20,log21,log22,log23,log24,log25,log26,log27,log28,log29,log30,log31;
var spawnEnemiesGroup;
var rect1
var rectGroup
var score = 0;

var gameState = "SERVE";
function setup() {
  createCanvas(1600,800);
  log1 =createSprite(170,350,30,700);
  log2 = createSprite(220,380,100,30);
  log3 = createSprite(930,20,1300,30);
  log4 = createSprite(1565,370,30,700);
  log5 = createSprite(805,700,1300,30);
  log6 = createSprite(540,105,30,160);
  log7 = createSprite(515,200,290,30);
  log8 = createSprite(410,125,80,30);
  log9 = createSprite(385,155,30,65);
  log10 = createSprite(455,250,30,80);
  log11 = createSprite(645,250,30,80);
  log12 =  createSprite(590,275,130,30);
  log13 = createSprite(540,370,30,210);
  log14 =  createSprite(430,460,210,30);
  log15 = createSprite(930,570,30,235);
  log16 = createSprite(800,120,140,30);
  log18 = createSprite(855,190,30,110);
  log19 = createSprite(895,250,110,30);
  log20 = createSprite(935,300,30,110);
  log21 = createSprite(1050,340,240,30);
  log22 = createSprite(1050, 390, 30,120);
  log23 = createSprite(915,465, 300,30);
  log24 = createSprite(775,415,30,130);
  log25 = createSprite(600,670,30,80);
  log26 = createSprite(1155,250,30,200);
  log27 = createSprite(1160,150,300,30);
  log28 = createSprite(1025,210,30,130);
  log29 = createSprite(950,80,30,100);
  log30 = createSprite(1490,350,180,30);
  log31 = createSprite(1415,420,30,130);
  log32 = createSprite(1480,600,200,30);
  log1.shapeColor = "cyan";
  log2.shapeColor = "cyan";
  log3.shapeColor = "cyan";
  log4.shapeColor = "cyan";
  log5.shapeColor = "cyan";
  log6.shapeColor = "cyan";
  log7.shapeColor = "cyan";
  log8.shapeColor = "cyan";
  log9.shapeColor = "cyan";
  log10.shapeColor = "cyan";
  log11.shapeColor = "cyan";
  log12.shapeColor = "cyan";
  log13.shapeColor = "cyan";
  log14.shapeColor = "cyan";
  log15.shapeColor = "cyan";
  log16.shapeColor = "cyan";

  log18.shapeColor = "cyan";
  log19.shapeColor = "cyan";
  log20.shapeColor = "cyan";
  log21.shapeColor = "cyan";
  log22.shapeColor = "cyan";
  log23.shapeColor = "cyan";
  log24.shapeColor = "cyan";
  log25.shapeColor = "cyan";
  log26.shapeColor = "cyan";
  log27.shapeColor = "cyan";
  log28.shapeColor = "cyan";
  log29.shapeColor = "cyan";
  log30.shapeColor = "cyan";
  log31.shapeColor = "cyan";
  log32.shapeColor = "cyan";
  
  player = createSprite(230,20,30,30);
  player.shapeColor  = "blue";
  EnemiesGroup = new Group();
  rectGroup = new Group();
}
function draw() {
  background(0);

  if(gameState === "SERVE"){
 textSize(28);
 fill("lime")
    text("Press space bar to start",600,330);
console.log("SERVE");
  }
  if( keyDown("space")&& gameState === "SERVE"){
    gameState = "PLAY";
    console.log("PLAY");
  }
  
  if(gameState === "PLAY"){
    console.log("PLAY1");
    if(keyDown(UP_ARROW)){
      player.y =  player.y-10;
    }
    if(keyDown(DOWN_ARROW)){
      player.y = player.y+10;
    }
    if(keyDown(LEFT_ARROW)){
      player.x = player.x-10;
  
    }
    if(keyDown(RIGHT_ARROW)){
      player.x = player.x +10;
    }
    spawnEnemies();
   
    
    score = score + Math.round(getFrameRate()/60);
 spawnRect();
    if(player.isTouching(rectGroup)){
      textSize(48);
      text("YOU WIN!!!!",670,350);
      rectGroup.setLifetimeEach(-1);
      gameState = "END";
    }
    if(player.isTouching(EnemiesGroup)){
      textSize(48);
      text("YOU LOSE",650,350);
      EnemiesGroup.setVelocityXEach(0);
      gameState ="END";
      
    }
  }
if(gameState === "END"){
text("press r to restart",650,350);
}
if(keyDown("r")){
  gameState = "SERVE";
  EnemiesGroup.destroyEach();
  rectGroup.destroyEach();
  score = 0;
  player.x = 220;
  player.y =20;

}  

   
player.collide(log1);
player.collide(log2); 
player.collide(log3); 
player.collide(log4);
player.collide(log5);
player.collide(log6);
player.collide(log7);
player.collide(log8); 
player.collide(log9);
player.collide(log10);
player.collide(log11);
player.collide(log12);
player.collide(log13);
player.collide(log14);
player.collide(log15);
player.collide(log16);  
player.collide(log18);
player.collide(log19);
player.collide(log20);
player.collide(log21);
player.collide(log22);
player.collide(log23);  
player.collide(log24);
player.collide(log25);
player.collide(log26);
player.collide(log27);
player.collide(log28);
player.collide(log29);
player.collide(log30);
player.collide(log31);
player.collide(log32);
textSize(25);
fill("green");
text("Score: "+ score, 1400,80);
  
 

  drawSprites();
}
function spawnEnemies(){
  if (frameCount % 100 === 0){
    var enemy = createSprite(180,50,100,30);
    enemy.y = Math.round(random(600,700));
    enemy.velocityX = 2;
    enemy.shapeColor = "red";
    enemy.lifetime = 650;
    EnemiesGroup.add(enemy);
    
  }
}
function spawnRect(){
  var rand = Math.round(random(1,100));
  if(rand % 80 === 0){
    rect1 = createSprite(random(200,1600),random(1,600),50,50);
    rect1.shapeColor = "yellow";
    rect1.lifetime = 40;
    rectGroup.add(rect1);
    if(score>400){
      rect1.lifetime = 30;
    }
    if(score>700){
      rect1.lifetime = 20;
    }
  }
}