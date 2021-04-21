class Obstacle{
 
    constructor(x,y,width,height){
        var options = {
            isStatic : false,
            'restituion' : 0.8
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("brown");
        rect(pos.x,pos.y,this.width,this.height)
    }
 }