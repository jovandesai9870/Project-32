class Nest
{
    constructor(bodyA,pointB){
      var options  = {
          bodyA : bodyA,
          pointB : pointB,
          'length' : 10,
          'stiffness' : 1
      }
      this.image = loadImage("nest.png");
      this.pointB = pointB;
      this.nest = Constraint.create(options);
      World.add(world,this.nest);
    }
    fly(){
        this.nest.bodyA = null;
      }
    display(){
        if(this.nest.bodyA)
        var pointA = this.nest.bodyA.position;
        var pointB = this.pointB;
        push();
        imageMode(CENTER);
        image(this.image,pointB.x,pointB.y,pointA.x,pointA.y);
        pop();
    }
}