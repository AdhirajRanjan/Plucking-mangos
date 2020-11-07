class tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("Images/tree.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      rectMode(CENTER);
      fill(255,0,0);
      rect(pos.x, pos.y, this.width, this.height);
      imageMode(CENTER);
      image(this.image, this.body.position.x, this.body.position.y, this.width+400, this.height+600);
      pop()
    }
  };