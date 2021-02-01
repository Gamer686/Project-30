class Block{
    constructor(x,y,w,h){
        var options = {
           // isStatic:true
           restitution:0.8,
           friction:0.9,
            density:0.00002
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h =h;
        this.visiblity = 225
        World.add(world,this.body);
    }
    display(){
        if(this.body.speed < 3){
            var angle = this.body.angle;
            var pos = this.body.position;
            push();
          translate( pos.x, pos.y);
          angleMode(RADIANS)
            rotate(angle)
            rectMode(CENTER)
            fill("pink")
            rect(0,0,this.w,this.h);
            pop();
        }
        else{
            World.remove(world,this.body);
        }
        push();
        this.visiblity = this.visiblity - 5;
        tint(255,this.visiblity);
        
        pop();
    }
}