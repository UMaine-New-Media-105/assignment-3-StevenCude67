//In this games, a god has decided the local town wastes too much food, so he rains apples down across the land. This being says "if a hero can step up and get "100 APPLE POINTS", then I'll stop the apple rain. So you stp up to the plate, seeing if you are worthy!

//Created by Steven Cude, used p5.js refrence for a few pieces of code

function setup() {
  //This makes the apples from a random X coordinate
  appleFallX = random(400);
  appleX = random(width);
  //this starts and resets the apple to the top of the screen
  appleY = 0;
  //I couldn't get the speed to be random everydrop, so I kept it at a nice even 6
  appleSpeed = 6;
  appleFalling = false;
  //Allows for manipulation of X and Y location of bucket
  bucketX = 25;
  bucketY = 325;
  //Setting applePoints allows the code to keep track of your points
  applePoints = 0;
  //these variables let the color of the apple change each time, I added a 4th color, so it would actually cycle through the first three!
  appleColorRandom = ["red", "yellow", "green", "orange"]
  newColor = 2;
  
  createCanvas(400, 400);
  ellipseMode(CORNER);
  angleMode(DEGREES);
}

function draw() {
  //colors background
  background("lightblue");

  //draws stone street
  fill("lightgray");
  rect(0, 355, 400, 55);

  //draws apples that fall at random speeds
  drawApple(appleX, appleY, 1, appleColorRandom[newColor]);
  if (appleFalling) {
    appleY = appleY + appleSpeed;
    
//restes apples to the top if they hit the bucket or miss it
    if (appleY >= height - 60) {
      appleFalling = false;
      appleY = 0;
      appleX = random(25, 375);
    }
  }

  // draws clouds
  drawClouds(-50, -80, 1);

  //draws bucket
  drawBucket(mouseX - bucketX, bucketY, 1, "tan", "black");

  //shows "Apple Points:"
  push();
  fill("red");
  strokeWeight(3);
  textSize(20);
  text("Apple Points:", 5, 25);
  pop();
  
//Shows the amount of "Apple Points" the player has gained
  push();
  fill("red");
  strokeWeight(3);
  textSize(20);
  text(applePoints, 130, 25);
  pop();

  //bucket glows gold when apple goes in bucket

  if (dist(appleX, appleY, mouseX, 340) <= 40) {
    drawBucket(mouseX - bucketX, bucketY, 1, "gold", "darkgoldenrod");
    applePoints = applePoints + 1;
  }
//this part of the code makes the end screen appear if player get 100 "Apple Points"
  if (applePoints === 100) {
    fill("white");
    rect(0, 0, 400);
    fill("black");
    strokeWeight(3);
    textSize(40);
    text("You Saved The Day!!", 10, 200);
    noLoop();
    drawApple(50, 250, 3, "red")
    drawApple(170, 50, 3, "yellow")
    drawApple(290, 250, 3, "green")
  }
  
  //this resets the array to 0, so an error doesn't occur
  if(newColor === 3){
    newColor = 0
  }
}

//creates a bucket that can be moved on the X axis
//can be moved and scaled when it's called in draw()
function drawBucket(bucketX, bucketY, bucketSize, bucketColor, bucketBarColor) {
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
//can be moved and scaled when it's called in draw()
function drawClouds(cloudX, cloudY, cloudSize) {
  push();
  translate(cloudX, cloudY);
  scale(cloudSize);
  fill("white");
  noStroke();
  ellipse(30, 30, 100);
  ellipse(100, 30, 100);
  ellipse(170, 30, 100);
  ellipse(240, 30, 100);
  ellipse(310, 30, 100);
  ellipse(380, 30, 100);
  pop();
}

//draws apples that fall from the top of the screen
//can be moved, scaled, and cahnged the color of the apple when it's called in draw()
function drawApple(appleX, appleY, appleSize, appleColor){
  push();
  translate(appleX, appleY, appleSize);
  scale(appleSize);
  fill(appleColor);
  ellipse(0, 0, 20);
  rect(9, -4, 2, 4);
  pop();
}

//this function sets the appleFalling to true, so that the code on Line 38 can occur
//this function also let's the array in line 20 to cycle through it's 4 indexes
function mousePressed() {
  appleFalling = true;
  newColor = newColor + 1
}
