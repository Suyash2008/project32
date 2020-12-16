const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var gamestates = "onsling";
var Score = 0;
var bg;
var backgroundIm;

function preload(){
  
}

function setup(){
  createCanvas(1200,600);
  
  engine = Engine.create();
  world = engine.world;
  
  angleMode(RADIANS)
  shootblock = new Shootblock(200,300,40,40)
  chain = new Chain(shootblock.body,{x:200,y:300})
  ground = new Ground(600,600,1200,100)
  platform = new Ground(600,400,300,20)
  box = new Box(480,360,40,50)
  box2 = new Box(525,360,40,50)
  box3 = new Box(570,360,40,50)
  box4 = new Box(615,360,40,50)
  box5 = new Box(660,360,40,50)
  box6 = new Box(705,360,40,50)
  box7 = new Box(500,300,40,50)
  box8 = new Box(545,300,40,50)
  box9 = new Box(590,300,40,50)
  box10 = new Box(635,300,40,50)
  box11 = new Box(680,300,40,50)
  box12 = new Box(520,220,40,50)
  box13 = new Box(565,220,40,50)
  box14 = new Box(610,220,40,50)
  box15 = new Box(655,220,40,50)
  box16 = new Box(540,160,40,50)
  box17 = new Box(585,160,40,50)
  box18 = new Box(630,160,40,50)
  box19 = new Box(560,100,40,50)
  box20 = new Box(604,100,40,50)
  box21 = new Box(580,40,40,50)
}
function draw(){
  if(backgroundIm)
  background(backgroundIm);
  Engine.update(engine);
  rectMode(CENTER);
  textSize(30)
  fill("yellow")
  text("Score "+Score,800,100);
  shootblock.display();
  chain.display();
  ground.display();
  platform.display();
  box.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  ChangeBackground()
}
function mouseDragged(){
  if(gamestates != "flying"){
  Matter.Body.setPosition(shootblock.body,{x:mouseX,y:mouseY})
}
}
function mouseReleased(){
  chain.fly();
  gamestates = "flying";
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(shootblock.body,{x:200,y:300})
    chain.attach(shootblock.body);
    gamestates = "onsling"
  }
}
async function ChangeBackground(){
  var timeFetch = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var timeJson = await timeFetch.json()
  var dt = timeJson.datetime;
  var hour = dt.slice(11,13)
  console.log(hour)
  if(hour>6&&hour<18){
    bg = "bg.png";
  }
  else{
    bg = "bg2.png"
  }
  backgroundIm = loadImage(bg)
}
