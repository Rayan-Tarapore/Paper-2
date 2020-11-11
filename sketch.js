
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var ground
var box
var paperimg
var image, dustbin
function preload()
{
 var image = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball = new Paper(200,180,20,20);
    ground = new Ground(600,630,1200,20);
    box1 = new Box(800,520,10,200);
    box2 = new Box(950,520,10,200);
    dustbin = new Image(image)
    	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  drawSprites();
 ball.display();
 ground.display();
 box1.display();
 box2.display();
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    Body.applyForce(ball.body,ball.body.position,{x:65,y:0});
  }
  if(keyCode === LEFT_ARROW){
    Body.applyForce(ball.body,ball.body.position,{x:-65,y:0});
  }
  if(keyCode === UP_ARROW){
    Body.applyForce(ball.body,ball.body.position,{x:0,y:-65});
  }
  if(keyCode === DOWN_ARROW){
    Body.applyForce(ball.body,ball.body.position,{x:0,y:65});
  }
}



