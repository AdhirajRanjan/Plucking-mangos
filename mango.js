class mango {
    constructor(x,y,r) {
      var options = {
          isStatic: true,
          restitution: 0,
          friction: 1
      }
      this.x=x
      this.y=y
      this.r=r
      this.image=loadImage("Images/mango.png")
      this.body = Bodies.circle(this.x,this.y,this.r,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill(255,0,0);
      ellipse(pos.x, pos.y, this.width, this.height);
      imageMode(CENTER);
      image(this.image, this.body.position.x+12, this.body.position.y, 75, 75);
      
      
    }
  };