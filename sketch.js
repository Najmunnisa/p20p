var bgimg,cats,mouses,cati,mousei,catwalkimg,catwalks,mouseanm,catlast,mouselast
function preload() {
    //load the images here
    bgimg=loadImage("images/garden.png")
    cati=loadImage("images/cat1.png")
    mousei=loadImage("images/mouse1.png")
    catwalkimg=loadAnimation("images/cat2.png","images/cat3.png")
    mouseanm=loadAnimation("images/mouse2.png","images/mouse3.png")
    catlast=loadImage("images/cat4.png")
    mouselast=loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   cats=createSprite(900,600)
   cats.addImage("h",cati)
   cats.scale=0.15
   mouses=createSprite(50,600)
   mouses.addImage("mouse",mousei)
   mouses.scale=0.15
}

function draw() {

    background(bgimg);
    //Write condition here to evalute if tom and jerry collide
    if(cats.x - mouses.x < (cats.width - mouses.width)/2)
    { 
        cats.velocityX=0;
        cats.addAnimation("tomLastImage", catlast);
        cats.x =300;
        cats.scale=0.2;
        cats.changeAnimation("tomLastImage");
        mouses.addAnimation("jerryLastImage", mouselast);
        mouses.scale=0.15;
        mouses.changeAnimation("jerryLastImage");
    }  
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
   //catwalks.x=catwalks.x-20
   cats.velocityX=-5;
   cats.addAnimation("tom",catwalkimg)
   cats.changeAnimation("tom")
   mouses.addAnimation("mouse",mouseanm)
   mouses.changeAnimation("mouse")

}

}
