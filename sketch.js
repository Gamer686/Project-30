const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var  ground;
var stand1 ,stand2;
var  slingShot;
var  polygon ,polygon_img;

function preLoad(){
    polygon_img=loadImage("polygon.png");
    
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(900,400);
    ground = new Ground();
    stand1 = new Stand(380,300,270,10);
    stand2 = new Stand(700,200,200,10);

    //set one
    block1 = new Block(280,275,30,40);
    block2 = new Block(310,275,30,40);
    block3 = new Block(340,275,30,40);
    block4 = new Block(370,275,30,40);
    block5 = new Block(400,275,30,40);
    block6 = new Block(430,275,30,40);
    block7 = new Block(460,275,30,40);
    block8 = new Block(490,275,30,40);

    //set two
    block9 = new Block(310,235,30,40);
    block10 = new Block(340,235,30,40);
    block11 = new Block(370,235,30,40);
    block12 = new Block(400,235,30,40);
    block13 = new Block(430,235,30,40);
    block14 = new Block(460,235,30,40);
    
    //set three
    block15 = new Block(340,195,30,40);
    block16 = new Block(370,195,30,40);
    block17 = new Block(400,195,30,40);
    block18 = new Block(430,195,30,40);

    //set four
    block19 = new Block(370,155,30,40);
    block20 = new Block(400,155,30,40);

    //set five
    block21 = new Block(385,115,30,40);

    //set six
    block22 = new Block(640,175,30,40);
    block23 = new Block(670,175,30,40);
    block24 = new Block(700,175,30,40);
    block25 = new Block(730,175,30,40);
    block26 = new Block(760,175,30,40);

    //set 7
    block27 = new Block(670,135,30,40);
    block28 = new Block(700,135,30,40);
    block29 = new Block(730,135,30,40);

    //set 8
    block30 = new Block(700,95,30,40);

    polygon=Bodies.circle(50,200,20,20);
    World.add(world,polygon);

    slingShot = new SlingShot(this.polygon,{x:200,y:200});
}
function draw(){
    background("blue")
    Engine.update(engine);

    strokeWeight(2);
    stroke(15);

    stand1.display();
    stand2.display();

    stroke(15);
    fill("black")
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    stroke(15);
    fill("orange")
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    stroke(15)
    fill("violet")
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    stroke(15)
    fill("green")
    block19.display();
    block20.display();
    stroke(15)
    fill("pink")
    block21.display();

    stroke(15)
    fill("red")
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    stroke(15)
    fill("yellow")
    block27.display();
    block28.display();
    block29.display();
    stroke(15)
    fill("white")
    block30.display();
    imageMode(CENTER)
    image(polygon_img,polygon.position.x,polygon.position.y,20,20)
    text("drag the line and release to hit the crazy boxes",600,250)
    
    slingShot.display();

}
function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode===32){
    slingShot.attach(polygon);
}
}