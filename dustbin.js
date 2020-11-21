class Dustbin{

    constructor(x,y,width,height){
     var options = {
         isStatic: true,
         density: 1, 
         restitution: 1, 
         friction: 1
     }
     this.body = Bodies.rectangle(x,y,width,height,options);
     World.add(world, this.body);
     this.width = width;
     this.height = height;
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        fill("green")
        //rect(0,0,this.width,this.height)
        pop()
    }

}