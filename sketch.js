const Engine=Matter.Engine;
const World = Matter.Borld;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(100,100,40,50);

  
}

function draw() {
  background(255,255,255);  
  drawSprites();
  box1.display();
}