var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var divisions = []; 
var particles ;
var plinkos = [];

var gameState = 0;
var divisionHeight=300;
var score = 0;
var count = 5;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);





   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
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
  background("black");

  textSize(20)
  text("Score : "+score,20,30);

   
  textSize(20)
  text("Chances Left : "+count,630,30);

  textSize(30)
  text("500 ",15,550);

  textSize(30)
  text("500 ",95,550);

  textSize(30)
  text("500 ",175,550);

  textSize(30)
  text("500 ",255,550);

  textSize(30)
  text("100 ",335,550);

  textSize(30)
  text("100 ",415,550);

  textSize(30)
  text("100 ",495,550);

  textSize(30)
  text("200 ",575,550);

  textSize(30)
  text("200 ",655,550);

  textSize(30)
  text("200 ",735,550);


  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();

   }

   if(particles!= null){

    particles.display(); 
 
    if(particles.body.position.y > 760){
 
     if(particles.body.position.x < 300 && particles.body.position.x > 0 ){
 
       score = score + 500;
       particles = null;
 
     }
 
    }
 
     }

     if(particles!= null){

      particles.display(); 
   
      if(particles.body.position.y > 760){
   
       if(particles.body.position.x > 301 && particles.body.position.x < 600){
   
         score = score + 100;
         particles = null;
   
       }
   
      }
   
       }

       if(particles!= null){

        particles.display(); 
     
        if(particles.body.position.y > 760){
     
         if(particles.body.position.x > 601 && particles.body.position.x < 900){
     
           score = score + 200;
           particles = null;
     
         }
     
        }
     
         }

         if(count===0){

          gameState = "end";
          textSize(50);
          text("Game Over :(",300,250);
         
         }
         if(gameState==="end"){

          count = 0;
     
       }

  }

function mousePressed(){

  if(gameState!=="end"){

    particles = new Particle(mouseX,10,10,10,);
    
  }   
  /**/
    count = count - 1;
    

}
