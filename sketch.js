const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 
const Constraint  = Matter.Constraint;

var engin,world;
var ground;
var gr1,gr2,gr3,gr4,gr5,gr6,gr7,gr8,gr9,gr10;
var fr1,fr2,fr3,fr4,fr5,fr6,fr7,fr8,fr9,fr10;
var bird;
var nest;

var score=0;

function setup() {
  
  var canvas = createCanvas(1600,700);

  engine  = Engine.create();
  world = engine.world;

  ground = new Ground(0,650,1600,20);

  fr1  = new Fruit(1240,80,50,50);
  fr2  = new Fruit(1040,380,50,50);
  fr3  = new Fruit(940,180,50,50);
  fr4  = new Fruit(1140,480,50,50);
  fr5  = new Fruit(940,780,50,50);
  fr6  = new Fruit(1140,280,50,50);
  fr7  = new Fruit(1440,535,50,50);
  fr8  = new Fruit(1380,380,50,50);
  fr9  = new Fruit(1260,180,50,50);
  fr10  = new Fruit(1340,630,50,50);

  bird = new Bird(200,500);

  gr1 = new Ground(1200,100,80,10);
  gr2 = new Ground(1000,400,80,10);
  gr3 = new Ground(900,200,80,10);
  gr4 = new Ground(1100,500,80,10);
  gr5 = new Ground(900,800,80,10);
  gr6 = new Ground(1100,300,80,10);
  gr7 = new Ground(1400,555,80,10);
  gr8 = new Ground(1340,400,80,10);
  gr9 = new Ground(1220,200,80,10);
  gr10 = new Ground(1300,650,80,10);
  
  nest = new Nest(bird.body,{x : 100 , y : 100});

  ob1 = new Obstacle(100,0,10,100);

}

function draw() {
  background("lightblue");
 
  text("Score:"+score,200,200);
  Engine.update(engine);

 

  bird.display();

  gr1.display();
  gr2.display();
  gr3.display();
  gr4.display();
  gr5.display();
  gr6.display();
  gr7.display();
  gr8.display();
  gr9.display();
  gr10.display();

  fr1.display();
  fr2.display();
  fr3.display();
  fr4.display();
  fr5.display();
  fr6.display();
  fr7.display();
  fr8.display();
  fr9.display();
  fr10.display();

  ground.display();

  nest.display();

 // ob1.display();

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  nest.fly();
}
