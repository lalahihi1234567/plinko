const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var ground;
var plinkos = [];
var divider = [];
var particle = [];
function setup(){
    createCanvas(600,700);
    engine=Engine.create();
    world=engine.world;

    ground=new Ground(300,690,600,20);
    groundl=new Ground(10,350,20,700);
    groundr=new Ground(590,350,20,700);
    divider1=new Divider(300,690,600,20);

    for(var a=20;a<=width;a=a+80){
      divider.push(new Divider(a,580,10,200));
    }

    for(var i=0;i<=width;i=i+50){
      plinkos.push(new Plinko(i,75));
    }
    for(var i=10;i<=width;i=i+55){
      plinkos.push(new Plinko(i,130));
    }
    for(var i=0;i<=width;i=i+50){
      plinkos.push(new Plinko(i,185));
    }
    for(var i=10;i<=width;i=i+55){
      plinkos.push(new Plinko(i,240));
    }
}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  groundr.display();
  groundl.display();
  divider1.display();
  for(var i=0;i<plinkos.length;i=i+1){
    plinkos[i].display();
  }
  for(var a=0;a<particle.length;a=a+1){
    particle[a].display();
  }
  for(var a=0;a<divider.length;a=a+1){
    divider[a].display();
  }
  if (frameCount%60===0){
    particle.push(new Particle(random(200,400),0));
  }
}