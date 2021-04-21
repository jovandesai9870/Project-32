class Bird
{
    constructor(x,y){
         var options = {
             'restitution' : 0.8,
             'friction' : 1.0,
             'density' : 1.0
         }
         this.image = loadImage("bird.png");
         this.body = Bodies.rectangle(x,y,100,100,options);
         World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,100,100);
        pop();

    }
}