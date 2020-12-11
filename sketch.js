
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


function setup() {
	createCanvas(1200, 650);

	engine = Engine.create();
	world = engine.world;

	tree=new Tree(width-300,346,600,600);
	ground=new Ground(width/2,height-10,width,40);
	mango1=new Mango(940,130,58);
	mango2=new Mango(830,230,45);
	mango3=new Mango(700,250,57);
	mango4=new Mango(870,140,45);
	mango5=new Mango(780,180,55);
	mango6=new Mango(900,230,52);
	mango7=new Mango(1000,170,59);
	mango8=new Mango(970,250,45);
	mango9=new Mango(1050,250,48);
	mango10=new Mango(780,290,45);
	mango11=new Mango(1100,200,55);
	mango12=new Mango(1130,290,50);
	boy1=new Boy(100,390,300,300);
	stone1=new Stone(200,500,20,20);
	join=new con(stone1.body,{x:160,y:470});

}


function draw() {
	background(150,250,250);
	Engine.update(engine);
	
	tree.display();
	ground.display();
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
	boy1.display();
    stone1.display();
    join.display();
	detectCollision(stone1,mango1);
    detectCollision(stone1,mango2);
    detectCollision(stone1,mango3);
    detectCollision(stone1,mango4);
    detectCollision(stone1,mango5);
    detectCollision(stone1,mango6);
    detectCollision(stone1,mango7);
	detectCollision(stone1,mango8);
	detectCollision(stone1,mango9);
    detectCollision(stone1,mango10);
    detectCollision(stone1,mango11);
    detectCollision(stone1,mango12);
	fill("black")
    textSize(30);
    text("Press Space to get a second chance to play.",100,100);

 
	
}


function mouseDragged(){
  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  join.fly();
}

function keyPressed(){
  if(keyCode === 32){
    //Matter.Body.setPosition(stone1.body,{x:150,y:300});
    join.attach(stone1.body);
  }
}
