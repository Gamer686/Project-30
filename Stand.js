class Stand{
    constructor(x,y,w,h){
        var options = {
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h =h;
        World.add(world,this.body);
    }
    display(){
        push()
        var angle = this.body.angle;
        strokeWeight(2);
        fill("dark blue")
        translate(this.body.position.x,this.body.position.y);
        rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.w,this.h);
        pop();
    }
}