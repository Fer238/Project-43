function setup() {
  createCanvas(400,400);
  
  angleMode(DEGREES);
}

function draw() {
  background("black");  
  translate(200,200); 
  rotate(-90);

  
//second  
  sc = second();
  scAngle = map(sc,0,60,0,360);
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);

//minute
  mn = minute();
  mnAngle = map(m,0,60,0,360);
  puch();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();
  stroke(0,255,0);
  arc(0,0,280,280,0,mnAngle);

//hour
  hr = hour();
  hrAngle = map(hr %12,0,12,0,360);
  puch();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();
  stroke(0,0,255);
  arc(0,0,260,260,0,hrAngle);

  
//point 
  stroke(255,0,255);
  point(0,0);
  strokeWeight(10);
  noFill();

 
  

  drawSprites();
}
