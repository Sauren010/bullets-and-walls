var bullet , wall;
var speed , weight;
var thickness; 

function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)
  bullet=createSprite(50,200,50,50);
  wall=createSprite(1200,200,thickness,height/2)
  bullet.velocityX = speed;
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
}

function draw() {
  background(255,255,255);

  

if (hasCollided(bullet, wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed* speed/(thickness *thicness *thickness);

  
  if(damage>10)
  {
    wall.shapeColor=color(255,0,0);
  }



  if(damage<10)
  {
    wall.shapeColor=color(0,225,0);
  }
}

hasCollided(Lbullet, Lwall);

  drawSprites();
}
 
function hasCollided(Lbullet, Lwall)
{
  bulletRightEdge=Lbullet.x +Lbullet.width;
  wallLeftEdge=Lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}