//It keeps on saying in console that constraint is not defined even though it is defined I checked the code from the angry birds game too and its not different but it still says constraint is not defined
//I have finished everything else in this project all the other steps
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boyimg, boy;

function preload()
{
	boyimg=loadImage("Images/boy.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boy=createSprite(200,530,20,20)
	boy.addImage(boyimg);
	boy.scale = 0.15

	ground1 = new ground(600,650,1200,50)
	
	tree1 = new tree(1000,340,1,1)

	stoneObj = new stone(120,460,10,10)

	mango1 = new mango(970,130,300)
	mango2 = new mango(1050,150,300)
	mango3 = new mango(970,220,300)
	mango4 = new mango(870,240,300)
	mango5 = new mango(1060,240,300)
	mango6 = new mango(1140,260,300)

	slingshot = new Chain(stoneObj.body,{x:120, y:460});



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);
  

  stoneObj.display()
  ground1.display()
  tree1.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()

  slingshot.display()

  detectcollision(stoneObj,mango1)
  detectcollision(stoneObj,mango2)
  detectcollision(stoneObj,mango3)
  detectcollision(stoneObj,mango4)
  detectcollision(stoneObj,mango5)

  drawSprites();
 
}

function mouseDragged()
{
    Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased()
{
    slingshot.fly();
}

function detectcollision(lstone,lmango)
{
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if (distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed()
{
	if (keyCode === 32)
	{
		Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
		launcherObject.attach(stoneObj.body)
	}
}
