class mango {
    constructor(x,y) {
      var options = {
          isStatic: true,
          restitution: 0,
          friction: 1
      }
      this.x=x
      this.y=y
      this.image=loadImage("Images/mango.png")
      this.body = Bodies.circle(this.x,this.y,300,options);
      World.add(world, this.body);
    }
    display(){
      fill(255,0,0);
      imageMode(CENTER);
      image(this.image, this.body.position.x+12, this.body.position.y, 75, 75);
      
      
    }
  };