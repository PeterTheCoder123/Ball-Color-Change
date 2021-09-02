var ball;

function setup() {
  createCanvas(400,400);
  ball=createSprite(200,200,10,20);
}

function draw() 
{
  background(30);

if(keyIsDown(LEFT_ARROW)){
  ball.shapeColor= "blue";
}
if(keyIsDown(RIGHT_ARROW)){
  ball.shapeColor = "red"
}
if(keyIsDown(UP_ARROW)){
  ball.shapeColor = "orange"
}
if(keyIsDown(DOWN_ARROW)){
  ball.shapeColor = "green"
}





  drawSprites();

}




