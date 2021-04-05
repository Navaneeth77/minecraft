var bg,bgimage
var pk1,pk1image
var c,cimage
var bg2,bg3
var b,w,h,a,z,m,x
var form1
var gamestate = 0;
var object
function preload(){
 
}
function setup(){
    createCanvas(displayWidth,displayHeight);
        form1 = new form();
   object = createSprite(1700,700,20,20);
   object.shapeColor = "red"
}
function draw(){
    if(gamestate===0){
form1.display();

    }
 if(pk1.isTouching (object)){
     gamestate = 0
 }
if (gamestate === 1){
    bg.destroy();
    background(bg2)
    
}
drawSprites();
}