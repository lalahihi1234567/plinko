class Particle {
    constructor(x,y) {
      var options = {
          isStatic: false,
          restitution: 0.4
      }
      this.body = Bodies.circle(x,y,8,options);
      this.radius = 8;
      this.color=color(random(0,255),random(0,255),random(0,255))
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      rotate(angle);
      ellipseMode(RADIUS);
      fill(this.color);
      ellipse(pos.x, pos.y, this.radius, this.radius);
      pop();
    }
  };