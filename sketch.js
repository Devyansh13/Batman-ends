var d1,u,t;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

drops=[]
function preload(){
    t1=loadImage("1.png");
    t2=loadImage("2.png");
    t3=loadImage("3.png");
    t4=loadImage("4.png")
}

function setup(){
    createCanvas(500,600);
    engine = Engine.create();
    
    world = engine.world;
    
    u=new Umbrella(250,380,50)
   
    

    for(var j = 0;j <100;j=j+1){ 
      drops.push(new Drop(random(10,480),random(0,350)))
     }
     Engine.run(engine)
}

function draw(){
    background(0);
   
    for (var k=0;k<drops.length;k++){
       drops[k].display(); 
        drops[k].reposition();
      }

      u.display();

if(frameCount%60===0){
  t=createSprite(200,50,50,50);
  var rand = Math.round(random(1,4));
switch(rand) {
  case 1: t.addImage(t1);
          break;
  case 2: t.addImage(t2);
          break;
  case 3: t.addImage(t3);
          break;
  case 4: t.addImage(t4);
          break;
  default: break;
}
t.scale=0.8
t.lifetime=20;
}

drawSprites();

    }

    
  

