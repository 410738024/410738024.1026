var mic
function setup() {
createCanvas(windowWidth, windowHeight);
angleMode(DEGREES)
mic= new p5.AudioIn();
mic.start();
}

function draw() {
  background("#FFEDDF");
  textSize(30)
  text("X:"+mouseX+"  Y:"+mouseY,50,50)
  var micLevel=mic.getLevel();
  console.log(micLevel)
  
  push()
   translate(width/2,height/2)
   fill("#FCEAB4") 
   ellipse(0,0,400)   ///w是x軸座標，h是y軸座標
   ellipse(0,0,100,50)
   //ellipse(-35,0,20) //左邊鼻孔
   //ellipse(35,0,20) //右邊鼻孔
   fill(255) 
   ellipse(-25+map(mouseX,0,width,0,20),-10+map(mouseY,0,height,-20,20),20)
   ellipse(25+map(mouseX,0,width,0,20),-10+map(mouseY,0,height,-20,20),20)
   fill("#B7BD9C")
   ellipse(-55,-100,60)
   ellipse(55,-100,60)

   fill(0) //0是黑色眼株
   ellipse(-55+map(mouseX,0,width,-20,20),-100+map(mouseY,0,height,-20,20),20)//左邊眼珠
   ellipse(55+map(mouseX,0,width,-20,20),-100+map(mouseY,0,height,-20,20),20)
  //if(mouseIsPressed)
  //{
  //fill(255)
  //arc(0,75,200,150,0,PI)
  //}
  //else
  //{
  //fill(255,0,0) //255為白色
  //arc(0,75,200,75,0,PI)
  //}
   
arc(0,75,200,75+micLevel*1000,0,100)


fill(255)
arc(0,74,200,50,0,180)
pop()

}
