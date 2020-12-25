const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var engine, world;
var ground;
var obj;

function setup()
 {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var option = {
    isStatic : true
  }
 
  ground = Bodies.rectangle(200,380,400,40,option);
  World.add(world,ground);
  console.log(ground);
  console.log(ground.position.x);
  console.log(ground.position.y);

 var bounciness = {
   restitution : 1.1
 }

  obj = Bodies.circle(200,100,40,bounciness);
  World.add(world,obj);


}

function draw() {
  background("blue");  
  Engine.update(engine);
 
  fill("green");
  rectMode(CENTER)
 rect(ground.position.x,ground.position.y,400,40);

 fill("red");
 ellipseMode(RADIUS);
 ellipse(obj.position.x,obj.position.y,40,40);

}