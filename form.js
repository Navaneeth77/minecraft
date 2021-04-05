class form{
    constructor(){
        bgimage = loadImage("images/kasT6Ln.png")
 pk1image = loadImage("images/altaria.gif")
 cimage = loadImage("images/1.png")
 bg2 = loadImage("images/2.jpg");
        bg = createSprite(displayWidth,displayHeight)
        bg.addImage(bgimage);
       
        c = createSprite(250,250,40,40)
        c.addImage(cimage);
        m = createSprite(1500,300,200,80);
        m.visible = true;
        x = createSprite(1500,800,220,90);
        x.visible = false;
        c.scale = 0.2
        a = createSprite(250,350,100,70)
        z = createSprite(450,770,120,80)
        z.visible = false;
        a.shapeColor = "white"
        //bg.addImage(bgimage);
        pk1 = createSprite(250,100);
        pk1.addImage("pokemon1",pk1image);
        pk1.visible = false;
        h =createSprite(1000,700,200,40)
        b = createSprite(600,300,150,40);
        b.shapeColor = "brown";
        w = createSprite(1100,420,200,100);
        w.shapeColor = "blue";
        h.visible = false;
        w.visible = false;
        b.visible = false;
        a.visible = false;
        c.debug = true;
        c.setCollider("rectangle",10,10,30,30)
    }
    display(){
        background(bgimage)
        if( keyDown("space")  ){
            pk1.visible = true;
            }
            if(keyDown("UP_ARROW")){
              c.y = c.y -10
            
            }
            if(keyDown("DOWN_ARROW")){
                c.y = c.y+10
            }
            if(keyDown("Right_ARROW")){
                c.x = c.x+10
            }
            if(keyDown("LEFT_ARROW")){
                c.x = c.x-10
            }
            if(c.isTouching(m)){
                gamestate = 1;
                console.log(gamestate);
              }
            
                        
            c.bounceOff(b);
            c.bounceOff(w);
            c.bounceOff(h);
            c.bounceOff(a);
            c.bounceOff(z);
            c.bounceOff(m);
            c.bounceOff(x);
    }
}
