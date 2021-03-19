function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  leprochaun= new Leprochaun(350,200,50,50);
  slingshot = new Slingshot(this.leprochaun,{x:100,y:200});


}

function draw() {
  background(255,255,255);  

  leprochaun.display();
  slingshot.display()

  //things to do
  // make the backgrounf api time thing
  // make the good and bad clovers spawn randomly
  // make the leprochaun a slingshot and catch the good clover
  // make a trajectory
  // when the lep touches a good clover it vanishes and if it touches a bad clover the game stops
  


  drawSprites();
}


function mouseDragged(){
  Matter.Body.setPosition(this.leprochaun,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    slingshot.attach(this.leprochaun)
  }
}