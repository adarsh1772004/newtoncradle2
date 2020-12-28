const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
var engine, world, body;
var box1, box2, ground;
var stick1, stick2, stick3, stick4;
var box3, box4, box5;
var pig1, pig2;
var bird
var backgroundImg
var platform
var gameState="OnSling"
var connect

function preload(){
time()
}

function setup() {
  createCanvas(1200,400);
  engine=Engine.create()
  world=engine.world;
box1=new Box(920,300,80,80)
box2=new Box(700,320,80,80)
ground=new Ground(600,380, 1200, 10)
stick1=new Stick(810, 260, 300, PI/2)
box3=new Box(700, 240, 80, 80)
box4=new Box(920, 240, 80, 80)
stick2=new Stick(810, 180, 300, PI/2)
box5=new Box(800, 160, 80, 80)
stick3=new Stick(760, 120, 150, PI/4)
stick4=new Stick(855, 120, 150, -PI/4)
pig1=new Pig(810, 350)
pig2=new Pig(810, 220)
bird=new Bird(150, 50)
platform=new Ground(120, 275, 235, 200)
connect=new Connection(bird.body,{x:150,y:50})
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);
  else
  background("black") 
  Engine.update(engine)
 box1.display()
 box2.display() 
 ground.display()
 stick1.display()
 box3.display()
 box4.display()
 stick2.display()
 box5.display()
 stick3.display()
 stick4.display()
 pig1.display()
 pig2.display()
 bird.display()
 connect.display()
 platform.display()
}

function mouseDragged()
{
  if(gameState === "OnSling")
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}
function mouseReleased()
{
  connect.fly()
  gameState="launch"
}
async function time()
{
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var data=await response.json()
  var time=data.datetime
  var hrs=time.slice(11, 13)
  if(hrs>=6&&hrs<=18)
  {
    backgroundImg=loadImage("Images/bg.png")
  }
  else
  {
    backgroundImg=loadImage("Images/bg2.jpg")
  }
  
}
function keyPressed()
{
  if(keyCode==32)
  {
    Matter.Body.setPosition(bird.body,{x:150, y:50})
    connect.join(bird.body)
    Matter.Body.setAngle(bird.body,0)
    gameState="OnSling"
  }
}
