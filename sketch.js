
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango12,mango713;
var world,boy;
var slingShot;



function preload(){
	boy=loadImage("images/boy.png");
  }

  
function mouseDragged()
{
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
    console.log(mouseX);
}

function mouseReleased()
{
    slingShot.fly();
}


function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,50,40);
	mango2=new mango(1030,80,30);
	mango3=new mango(1100,110,30);
	mango4=new mango(1000,140,40);
	mango5=new mango(900,200,30);
	mango6=new mango(1100,200,30);
	mango7=new mango(1200,200,40);
	mango8=new mango(1000,220,30);
	mango9=new mango(1150,150,30);
	mango10=new mango(935,245,40);
	mango11=new mango(950,170,30);
	mango12=new mango(1050,170,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	stoneObj=new stone(240,420,45,45);

	slingShot= new Chain(stoneObj.body,{x:240,y:420});

}

function keyPressed(){
	if(keyCode === 32){
	  Matter.Body.setPosition(stoneObj.body,{x:240, y:420});
	  slingShot.attach(stoneObj.body);
	}
  }
  function detectCollision(lstone,lmango){
	stoneBodyPosition = lstone.body.position;
	mangoBodyPosition = lmango.body.position;
  
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance <= lmango.r + lstone.width){
	  Matter.Body.setStatic(lmango.body, false);
	}
  
  }

function draw() {

  background(230);
  //Add code for displaying text here!
  Engine.update(engine);
  image(boy ,200,340,200,300);

  textSize(30);
  text("Press Space to get a Second Chance to Play!!",20,30);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  stoneObj.display();

  slingShot.display();

  groundObject.display();

  detectCollision(stoneObj, mango1);
  detectCollision(stoneObj, mango2);
  detectCollision(stoneObj, mango3);
  detectCollision(stoneObj, mango4);
  detectCollision(stoneObj, mango5);
  detectCollision(stoneObj, mango6);
  detectCollision(stoneObj, mango7);
  detectCollision(stoneObj, mango8);
  detectCollision(stoneObj, mango9);
  detectCollision(stoneObj, mango10);
  detectCollision(stoneObj, mango11);
  detectCollision(stoneObj, mango12);
  
}
