class RedBox{
  constructor(){
    this.width =0;
    this.height = 0;
    this.xPosition = 0;
    this.yPosition= 0;
    this.color = "green";
  }
display(){ 

  strokeWeight(0)
  fill("red")
  rect(this.xPosition, this.yPosition, this.width, this.height);




}


}







var  x=new RedBox

var helicopter, movingRect,box,heli_animation,ground;

 function preload(){
 
 movingRect=loadImage("package.png");
 heli_animation=loadImage("helicopter.png");
 }

function setup() {
  createCanvas(1200,800);
 
  box = createSprite(400, 100,100,80);
    box.addImage(movingRect)
    box.scale=0.3

    helicopter = createSprite(400, 100, 150, 100);
   helicopter.addImage( heli_animation)
   
  
   ground=createSprite(10,750,12000,10)
 
  ground.velocityY = 0;
  
}

function draw() {
  background(0,0,0);  

   bounceOff(box,ground)


   if(keyDown("down")) {
    box.velocityY = +5;
  }
  
    
  drawSprites();

   
 


  x.xPosition=150;
  x.yPosition=650;
 x.width = 510;
    x.height = 10;
    
 x.display();


 x.xPosition=150;
 x.yPosition=500;
x.width = 10;
   x.height = 160;
    
x.display();

x.xPosition=650;
x.yPosition=500;
x.width = 10;
  x.height = 160;
   
x.display();




  
}
function bounceOff (a,b)
{
    if (a.x - b.x < b.width/2 + a.width/2
        && b.x - a.x < b.width/2 + a.width/2) {
      a.velocityX = a.velocityX * (0);
      b.velocityX = b.velocityX * (0);
    }
    if (a.y - b.y < b.height/2 + a.height/2
      && b.y - a.y < b.height/2 + a.height/2){
      a.velocityY = a.velocityY * (0);
      b.velocityY = b.velocityY * (0);
    }

}



