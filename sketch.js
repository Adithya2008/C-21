var bullet,wall;
var speed,weight;
var thickness;

function setup() 
{
  createCanvas(1200,400);
 // createSprite(400, 200, 50, 50);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet =createSprite(50,200,50,50);
  wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor=color(80,80,80)
bullet.shapeColor=color(0,0,100)
}

function draw() {
  background(0);  
  bullet.velocityX= speed;
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
   
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness);

    if(damage>180)
    {
      bullet.shapeColor=color(255,0,0);
    }
    if(damage<100 && damage>100)
    {
      bullet.shapeColor=color(230,230,0);

    }
    if(damage<100)
    {bullet.shapeColor=color(0,255,0);}

    hasCollided();
  }
 
  
  drawSprites();
}

function hasCollided (bullet,wall)
{
  bulletRightEdge=bullet.x + bullet.width;
  wallleftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false;
}