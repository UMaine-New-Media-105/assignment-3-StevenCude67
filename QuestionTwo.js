//This code creates a bucket that is sliding acorss the stone floor of a town, trying to catch apples falling fromthe sky

//In question 1 I created the bucket, floor and clouds

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //colors background 
  background("lightblue");
  
  //draws stone street
  fill("lightgray")
  rect(0, 355, 400, 55);
  
  //draws clouds
  drawClouds(0, -30, 1);
  
  //draws bucket
  drawBucket(mouseX - 25, 325, 1, "tan", "black");
  
  //bucket glows gold when mouse is clicked
  if (mouseIsPressed){
    drawBucket(mouseX - 25, 325, 1, "gold", "darkgoldenrod");
  }
  
}

//creates a bucket that can be moved on the X axis
//can be moved and size changed when function is called
function drawBucket(bucketX, bucketY, bucketSize, bucketColor, bucketBarColor){
  push();
  translate(bucketX, bucketY);
  scale(bucketSize);
  fill(bucketColor);
  quad(0, 0, 50, 0, 42, 50, 8, 50);
  fill(bucketBarColor);
  rect(3, 12, 44, 5);
  rect(7, 38, 36, 5);
  pop();
}

//draws clouds on the top of the screen
//can be moved and size changed when function is called
function drawClouds (cloudX, cloudY, cloudSize){
  push();
  translate(cloudX, cloudY);
  scale(cloudSize);
  fill("white")
  noStroke();
  ellipse(30, 30, 100);
  ellipse(100, 30, 100);
  ellipse(170, 30, 100);
  ellipse(240, 30, 100);
  ellipse(310, 30, 100);
  ellipse(380, 30, 100);
  pop();
}
