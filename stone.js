class stone {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution:0,
          friction:1,
          density:1.2
      }
      this.body = Bodies.circle(x,y,radius,options);

      this.image = loadImage("Images/stone.png")
      World.add(world, this.body);
    }
    display(){
      
      push()
      fill(255,0,0);
      imageMode(CENTER);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop()
    }
  };