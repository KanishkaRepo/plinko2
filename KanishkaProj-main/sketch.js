var homescreen,contactScreen, galleryScreen;

function setup() {
  createCanvas(windowWidth, windowHeight);
 
  homescreen=new MainScreen();
  
}

function draw() {
  // background(255, 226, 79); 
  // background(25,125,25) ;
  background(255, 255, 255);
  homescreen.display();
}