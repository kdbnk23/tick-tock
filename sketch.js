var hr;
var sc;
var mm;


function setup() {
  createCanvas(800,400);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  translate(200,200)
  rotate(-90)
  hr=hour()
  sc=second()
  mn=minute()
  angleMode(DEGREES)
  scAngle=map(sc,0,60,0,360)
  hrAngle=map(hr%12,0,12,0,360)
  mnAngle=map(mn,0,60,0,360)
  push()
  rotate(scAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(00,00,100,0)
  pop()
  push()
  rotate(hrAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(00,00,100,0)
  pop()
  push()
  rotate(mnAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(00,00,100,0)
  pop()
  //Seconds 
  stroke(255,0,0); 
  arc(0,0,300,300,0,scAngle); 
  //Minutes 
  stroke(0,255,0); 
  arc(0,0,280,280,0,mnAngle); 
  //Hour 
  stroke(0,0,255); 
  arc(0,0,260,260,0,hrAngle);
}

