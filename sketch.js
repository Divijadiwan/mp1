var Engine = Matter.Engine;
 var World = Matter.World;
 var Events = Matter.Events;
  var Bodies = Matter.Bodies;
 
var particles = [],boys;
var plinkos = [];
var division = [];
var divisionHeight=300;
var gameState = "PLAY";
function setup()
 {
   
  
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new ground(width/2,height,width,20);
  boys = new boy(10,700,50,50);

   for (var k = 0; k <=width; k = k + 80) {
     division.push(new divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  
  background("grey");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
  
   
   for (var k = 0; k < division.length; k++) {
     
     division[k].display();
   }
   text("500",25,550);
   text("500",105,550);
   text("500",185,550);
   text("500",265,550);
   text("100",345,550);
   text("100",425,550);
   text("100",505,550);
   text("200",585,550);
   text("200",665,550);
   text("200",745,550);
   

boys.display();
if(frameCount%60 === 0)
{
 particles.push(new Particle(random(width/2-10,width/2+10),10,10));
}
  for(var j =0;j<particles.length;j++)
  {
    particles[j].display();
  }
}
function mousePressed()
{
  if(gameState!="END")
  {
   particle =  new Particle(mouseX,10,10);
   count+=1;
  }


}
function keyPressed()
  {
    if(keyCode === RIGHT_ARROW )
    {
      boys.body.velocityX = 2;
    }
    if(keyCode === LEFT_ARROW )
    {
      boys.body.velocityX = -2;
    }
  }