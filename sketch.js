
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball

var wall1, wall2, wall3

var dustbinImage

function preload(){
dustbinImage = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

    ball = new Paper(200, 300, 20);
  ground = Bodies.rectangle(400,690,800,20,{isStatic: true});
  World.add(world, ground);
  wall1 = new Dustbin(500,610,20,140)
  wall3 = new Dustbin(700,610,20,140)
  wall2 = new Dustbin(600,670,200,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ball.display();
  fill("brown");
  rect(ground.position.x,ground.position.y,800,20)
  wall1.display()
  wall3.display()
  wall2.display()
  imageMode(CENTER)
  image(dustbinImage, 600, 580, 200, 200)
  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x: 50, y:-65})
  }
}



