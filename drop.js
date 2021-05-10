class Drop{
    constructor(x, y) {
        var options = {
            
            'restitution':0.3,
            'friction':5.0,
            'density':1.9,
        }
        this.radius=10;
        this.body = Bodies.circle(x, y,this.radius,options);
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("blue")
        ellipse(0,0,10);
        pop();
      }

      reposition(){
        if(this.body.position.y>height){
          Matter.Body.setPosition(this.body,{x:random(0,width),y:random(0,height/2)})
        }
      }
}

   