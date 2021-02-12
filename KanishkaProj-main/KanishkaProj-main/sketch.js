var homescreen,contactScreen, galleryScreen;

function setup() {
  createCanvas(displayWidth,displayWidth);
 
  homescreen=new MainScreen();
  
}

function draw() {
  background(255,255,255);  
  homescreen.display();
}