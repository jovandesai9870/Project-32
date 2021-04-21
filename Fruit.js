class Fruit
{
    constructor(x,y,width,height){
         var options = {
             'restitution' : 0.1,
             'friction' : 0,
             'density' : 0.5,
             isStatic : true
         }
         this.image = loadImage("fruit1.png");
         this.width=width;
         this.height=height;
         this.body = Bodies.rectangle(x,y,width,height,options);
         World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();

    }
}