
let rad = 60; // Width of the shape
let xpos, ypos; // Starting position of shape

let xspeed = 2.8; // Speed of the shape
let yspeed = 2.2; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom

function setup() {
  createCanvas(800, 600);
  noStroke();
  frameRate(30);
  ellipseMode(RADIUS);
  
  xpos = width / 2;
  ypos = height / 2;
}

function draw() {
  background(102);

  
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

  // Draw the shape
  ellipse(xpos, ypos, rad, rad);
}

function setup() {
  createCanvas(800, 600);
  noStroke();
  frameRate(30);
  ellipseMode(RADIUS);
  
  xpos = width / 2;
  ypos = height / 2;
}