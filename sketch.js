const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var backgroundImg;
var towerImg;
var tower;
var cannon;
var cannonImg;
var cannonBaseImg;
var cannonBall;


function preload() {
  backgroundImg = loadImage("assets/background.gif");
  towerImg = loadImage("assets/tower.png");
 
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  var angle = 20;
 options={
 isStatic:true
 }
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);
 
 tower = Bodies.rectangle(160,350,160,310, options);
 World.add(world,tower);

 cannon = new Cannon(180, 110, 130, 100, angle);
 cannonBall = new Cannonball(cannon.x, cannon.y);
}

function draw() {
  background(189);
  image(backgroundImg, 0,0, 1200, 600);
  //image(towerImg,)
  Engine.update(engine);
  push ();
  imageMode(CENTER);
 image(towerImg, tower.position.x, tower.position.y, 160, 310);
 pop ();
 rect(ground.position.x, ground.position.y,width*2,1);
  
   cannon.display();
   cannonBall.display();
}
