const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var  ground;
var stand1 ,stand2;
var  slingShot;
var polygon, polygon_img;

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

    
    block1 = new Block(280,275,30,40);
    block2 = new Block(310,275,30,40);
    block3 = new Block(340,275,30,40);
    block4 = new Block(370,275,30,40);
    block5 = new Block(400,275,30,40);
    block6 = new Block(430,275,30,40);
    block7 = new Block(460,275,30,40);
    block8 = new Block(330,275,30,40);

    
    block9 = new Block(360,275,30,40);
    block10 = new Block(390,275,30,40);
    block11 = new Block(420,275,30,40);
    block12 = new Block(450,275,30,40);
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    
    
    block15 = new Block(420,195,30,40);
    block16 = new Block(450,195,30,40);
    block17 = new Block(490,195,30,40);
    block18 = new Block(500,195,30,40);

    
    block19 = new Block(520,195,30,40);
    block20 = new Block(550,195,30,40);

    
    block21 = new Block(560,195,30,40);

    
    block22 = new Block(590,195,30,40);
    

    polygon=Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingShot = new SlingShot(polygon,{x:200,y:200});
}
function draw(){
    background("black")
    Engine.update(engine);

    strokeWeight(2);
    stroke(15);

    stand1.display();
    stand2.display();

    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    
    block19.display();
    block20.display()
    block21.display();

    
    block22.display();

    fill("gold")
    imageMode(CENTER)
    image(polygon_img,polygon.position.x,polygon.position.y,  20 ,20)
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
    slingshot.attach(this.polygon);
}
}