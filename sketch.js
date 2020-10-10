
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
  boyImage = loadImage("images/boy.png");
  treeImage = loadImage("images/tree.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Rock(100, 100);
	ground = new Ground(400, 670, 800, 30);
  chain = new Chain(stone.body, {x: 90, y: 530});
  mango1 = new Mango(470, 275);
  mango2 = new Mango(530, 320);
  mango3 = new Mango(550, 200);
  mango4 = new Mango(625, 135);
  mango5 = new Mango(580, 260);
  mango6 = new Mango(650, 215);
  mango7 = new Mango(655, 290);
  mango8 = new Mango(715, 250);
  mango9 = new Mango(745, 310);

	Engine.run(engine);
  
}

function draw() {
  background("white");
   
  ground.display();

  imageMode(CENTER);
  image(boyImage, 150, 600, 200, 300);
  image(treeImage, 600, 375, 400, 600)

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();

  stone.display();
  chain.display();

  if(ifTouch(stone, mango1)){
    Matter.Body.setStatic(mango1.body, false);
  }

  else if(ifTouch(stone, mango2)){
    Matter.Body.setStatic(mango2.body, false);
  }

  else if(ifTouch(stone, mango3)){
    Matter.Body.setStatic(mango3.body, false);
  }

  else if(ifTouch(stone, mango4)){
    Matter.Body.setStatic(mango4.body, false);
  }

  else if(ifTouch(stone, mango5)){
    Matter.Body.setStatic(mango5.body, false);
  }

  else if(ifTouch(stone, mango6)){
    Matter.Body.setStatic(mango6.body, false);
  }

  else if(ifTouch(stone, mango7)){
    Matter.Body.setStatic(mango7.body, false);
  }

  else if(ifTouch(stone, mango8)){
    Matter.Body.setStatic(mango8.body, false);
  }

  else if(ifTouch(stone, mango9)){
    Matter.Body.setStatic(mango9.body, false);
  }


  /*detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  detectCollision(stone, mango9);*/

  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    chain.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body, {x: 90, y: 530} )
      chain.attach(stone.body);
  }
}

function detectCollision(lstone, lmango){
  mangoPos = lmango.body.position;
  stonePos = lstone.body.position;

  var distance = dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y)

  if(distance <= lmango.r + lstone.r){
    Matter.Body.setStatic(lmango.body, false);
  }
}



