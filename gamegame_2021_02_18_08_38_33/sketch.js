var s = 100, ex = 10, txt,i;

function preload(){
  clim1=loadImage('assets/clim1.PNG');
  clim2=loadImage('assets/clim2.PNG');
  clim3=loadImage('assets/clim3.PNG');
  clim4=loadImage('assets/clim4.PNG');
  clim5=loadImage('assets/clim5.PNG');
  clim6=loadImage('assets/clim6.PNG');
  clim7=loadImage('assets/clim7.PNG');
  clim8=loadImage('assets/clim8.PNG');
  clim9=loadImage('assets/clim9.PNG');
  clim10=loadImage('assets/clim10.PNG');
being=loadImage('assets/start.PNG');
  close=loadImage('assets/close.PNG');
points=loadImage('assets/why.png');
}

function setup() {
  createCanvas(750, 1334);
   background(138,43,226);
  col=color(0,255,210);
  image(being,0,0);
    txt = [];
  button1 = createButton('START');
  button1.position(250, 500);
  button1.mousePressed(beginGame);
  button1.style('font-size','80px');
  button1.style('background-color',col);
  button1.style("font-family","Rock Salt");
}

function beginGame() {
   background(138,43,226);
  image(clim1,0,0);
  button1.remove();
 
  button2 = createButton('Share');
  button2.position(30,1216);
  col=color(0,255,210);
   button2.style('font-size','80px');
  button2.style('background-color',col);
  button2.style("font-family","Rock Salt");
  button2.mousePressed(shareOne)
  
   button4.remove();
}
function shareOne(){
   background(138,43,226);
  image(clim2,0,0);
  button2.remove();
  button2 = createButton('Share');
  button2.position(30,1216);
  col=color(0,255,210);
   button2.style('font-size','80px');
  button2.style('background-color',col);
  button2.style("font-family","Rock Salt");
  button2.mousePressed(shareTwo)
}
function shareTwo(){
   background(138,43,226);
  image(clim3,0,0);
  button2.remove();
  button2 = createButton('Share');
  button2.position(30,1216);
  col=color(0,255,210);
   button2.style('font-size','80px');
  button2.style('background-color',col);
  button2.style("font-family","Rock Salt");
  button2.mousePressed(shareThree)
}
function shareThree(){
   background(138,43,226);
  image(clim4,0,0);
  button2.remove();
  button2 = createButton('Share');
  button2.position(30,1216);
  col=color(0,255,210);
   button2.style('font-size','80px');
  button2.style('background-color',col);
  button2.style("font-family","Rock Salt");
  button2.mousePressed(shareFour)
}
function shareFour(){
   background(138,43,226);
  image(clim5,0,0);
button2.remove();
  button2 = createButton('Share');
  button2.position(30,1216);
  col=color(0,255,210);
   button2.style('font-size','80px');
  button2.style('background-color',col);
  button2.style("font-family","Rock Salt");
  button2.mousePressed(shareFive)
}
function shareFive(){
   background(138,43,226);
  image(clim6,0,0);
  button2.remove();
  button2 = createButton('Share');
  button2.position(30,1216);
  col=color(0,255,210);
   button2.style('font-size','80px');
  button2.style('background-color',col);
  button2.style("font-family","Rock Salt");
  button2.mousePressed(shareSix)
}
function shareSix(){
   background(138,43,226);
  image(clim7,0,0);
 button2.remove();
  button2 = createButton('Share');
  button2.position(30,1216);
  col=color(0,255,210);
   button2.style('font-size','80px');
  button2.style('background-color',col);
  button2.style("font-family","Rock Salt");
  button2.mousePressed(shareSeven)
}
function shareSeven(){
   background(138,43,226);
  image(clim8,0,0);
  button2.remove();
  button2 = createButton('Share');
  button2.position(30,1216);
  col=color(0,255,210);
   button2.style('font-size','80px');
  button2.style('background-color',col);
  button2.style("font-family","Rock Salt");
  button2.mousePressed(shareEight)
}
function shareEight(){
   background(138,43,226);
  image(clim9,0,0);
  button2.remove();
  button2 = createButton('Share');
  button2.position(30,1216);
  col=color(0,255,210);
   button2.style('font-size','80px');
  button2.style('background-color',col);
  button2.style("font-family","Rock Salt");
  button2.mousePressed(shareNine)
}
function shareNine(){
   background(138,43,226);
  image(clim10,0,0);
 button2.remove();
  button2 = createButton('Share');
  button2.position(30,1216);
  col=color(0,255,210);
   button2.style('font-size','80px');
  button2.style('background-color',col);
  button2.style("font-family","Rock Salt");
  button2.mousePressed(endGame);
}

function endGame(){
  
  background(138,43,226);
  image(close,0,0);
 button2.remove();
  button3 = createButton('See Points!');
  button3.position(300,1016);
  col=color(0,255,210);
   button3.style('font-size','80px');
  button3.style('background-color',col);
  button3.style("font-family","Rock Salt");
  button3.mousePressed(realGame);
  
  
}

function realGame(){
  button3.remove();
  image(points,0,0);
   button4 = createButton('Start Again');
  button4.position(300,1216);
  col=color(0,255,210);
   button4.style('font-size','80px');
  button4.style('background-color',col);
  button4.style("font-family","Rock Salt");
  button4.mousePressed(beginGame);
  
}
function draw() {
  textRegion(230,2400/2-ex,s+ex,ex,txt,s)
}

function textRegion(r1,r2, r4, stroke,_text,_size){
  var r3 = textWidth(join(_text,''))+ex;
  strokeWeight(stroke);
  noStroke();
 noFill();
  rect(r1, r2, r3, r4);
  fill(0,255,210);
  textSize(40);
  text(join(_text,''),r1+stroke,r2+_size);
  noFill(0);
  rect(r1, r2, r3, r4);
}

function keyPressed(){
  i = txt.length;
  txt[i]=key.toLowerCase();
  if(txt.length > (1200-(ex*2))/s){
    txt.splice(0,1);
  }
}