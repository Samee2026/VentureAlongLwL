//Basic Variables
var gameState;
var LOAD = 0;
var PLAY = 1;
var END = 1;

//Gamestate "0" Variables
var loadSCR, backImg;
var playBTN, playImg;

//Gamestate "1" Variables
var survivor, monster ,villager;
var survivorImg, survivorImg1, survivorImg2, survivorImg3, survivorImg4, monsterImg , villagerImg;
var ground, groundImg
//var tree, treeImg, treeGroup;


function preload(){
   backImg = loadImage("loadSCR.jpg"); 
   playImg = loadImage("playBTN.png");
   groundImg = loadImage("ground.png");
   survivorImg = loadImage("survivorRUN1.png")

   survivorImg1 = loadAnimation("survivorRUN1.png","survivorRUN2.png","survivorRUN3.png");
   survivorImg2 = loadAnimation("survivorRUN4.png","survivorRUN5.png","survivorRUN6.png");
   survivorImg3 = loadAnimation("survivorRUN7.png","survivorRUN8.png","survivorRUN9.png");
   survivorImg4 = loadAnimation("survivorRUN10.png","survivorRUN11.png","survivorRUN12.png");

   //treeImg = loadImage("tree.png");
}

function setup() {
  createCanvas(1400,800);

  loadSCR = createSprite(683,400,500,500);
    loadSCR.addImage("loading",backImg);
     
  playBTN = createSprite(683,500,600,80);
    playBTN.addImage("playBTN",playImg);
    playBTN.scale = 9;
   
  ground = createSprite(700,400,10,10);
    ground.addImage("ground",groundImg);
    ground.scale = 3.9;   
       ground.visible = false;
    
  survivor = createSprite(700,400,10,10);
    survivor.visible = false;
    survivor.addImage("standing",survivorImg);
    survivor.addAnimation("leftrun",survivorImg2);
    survivor.addAnimation("downrun",survivorImg1);
    survivor.addAnimation("uprun",survivorImg3);
    survivor.addAnimation("rightrun",survivorImg4);
      survivor.scale = 2.5;
  
  //treeGroup = createGroup();
}
function draw() {
  background("green"); 
  
  if(frameCount % 60 === 0){
    ground.x = ground.width/2;
    ground.y = ground.width/2;
  }

   if(gameState === LOAD ){
     playBTN.visible = true;
     loadSCR.visible = true;
   } 

   if(gameState === PLAY ){
      ground.visible = true
      survivor.visible = true

   if(keyDown(DOWN_ARROW)){
     // survivor.y = survivor.y + 5
      survivor.changeAnimation("downrun",survivorImg1);
      ground.y = ground.y - 5
      //treeGroup.x = treeGroup.x - 5
   }
  
   if(keyDown(LEFT_ARROW)){
     // survivor.x = survivor.x - 5
      survivor.changeAnimation("leftrun",survivorImg2);
      ground.x = ground.x + 5
   }
  
   if(keyDown(UP_ARROW)){
     // survivor.y = survivor.y - 5
      survivor.changeAnimation("uprun",survivorImg3);
      ground.y = ground.y + 5
   }

   if(keyDown(RIGHT_ARROW)){
    //  survivor.x = survivor.x + 5
      survivor.changeAnimation("rightrun",survivorImg4);
      ground.x = ground.x - 5
   }

  

   
  }

  if(mousePressedOver(playBTN)){
   gameState = PLAY;
   playBTN.visible = false;
   loadSCR.visible = false;
  }

 
  //spawnTree();
  //spawnMonster();
  //spawnVillager();
 
  drawSprites();
}

/*function spawnVillager(){
  if(frameCount % 120 === 0){
  villager = createSprite(100,100,10,10);
  villager.addImage(villagerImg);
  villager.x = Math.round(random(10,750));
  villager.y = Math.round(random(10,380));
  villager.scale = 0.5
  villager.lifeTime = 40
  }
}*/

/*function spawnMonster(){
  if(frameCount % 80 === 0){
    monster = createSprite(100,100,10,10);
    monster.addImage(monsterImg);
    monster.x = Math.round(random(10,700));
    monster.y = Math.round(random(10,300));
    villager.scale = 0.9
    villager.lifetime = 40;
  }
}*/

      
  




