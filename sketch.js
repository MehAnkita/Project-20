var garden;
var cat, catAnm, mouse, mouseAnm;
function preload() {
    //load the images here
    garden= loadImage("images/garden.png");
    catAnm=loadAnimation("images/cat2.png","images/cat3.png");
    mouseAnm=loadAnimation("images/mouse1.png","images/mouse2.png","images/mouse3.png","images/mouse4.png",);
    mouseStanding=loadAnimation("images/mouse2.png");
    catStanding=loadAnimation("images/cat4.png");
}

function setup(){
    createCanvas(1000,700);
    //create tom and jerry sprites here
   mouse = createSprite(200,600,50,100);
   mouse.addAnimation("mouse",mouseStanding);
    mouse.scale=0.1;
    cat=createSprite(800,600,50,100);
    cat.addAnimation("cat",catStanding);
    cat.scale=0.1;

}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.width<mouse.width/3+cat.width/3){
        mouse.addAnimation("mouse",mouseStanding);
        cat.addAnimation("cat",catStanding);
        cat.velocityX=0;
        cat.setCollider("rectangle",0,0,cat.width,cat.height);
        mouse.setCollider("rectangle",0,0,mouse.width,mouse.height);
        
    }

    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
    cat.velocityX=-1;
  //For moving and changing animation write code here

mouse.addAnimation("mouse",mouseAnm);
cat.addAnimation("cat",catAnm)
}

}
