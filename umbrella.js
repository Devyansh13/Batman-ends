class Umbrella{
    constructor(x, y, radius) {
        var options = {
            isStatic:true,
            'restitution':0.3,
            'friction':5.0,
            'density':1.9,
        }
        this.image=loadImage("walking_1.png")
        this.radius=radius;
        this.body = Bodies.circle(x, y,this.radius,options);
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER)
        image(this.image,0,85,this.radius*6,this.radius*7)
        pop();
      }

}
