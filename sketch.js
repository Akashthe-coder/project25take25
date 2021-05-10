
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var dustbini,dustbinii,dustbin2i;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(800,670,width,20)
	dustbini= new Dustbin1(1200,535)
	
	
	paper1= new Paper(250,450,70)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,0,0);
  
  ground.display();
  dustbini.display();
  
  
  paper1.display();
  drawSprites();
 
}

function keyPressed() {
	if(keyCode===UP_ARROW){
Matter.Body.applyForce(paper1.body,paper1.body.position,{x:1230,y:-965});
	}
}

