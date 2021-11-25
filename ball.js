class Ball{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.bola = loadImage('polygon.png')
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        
        rectMode(CENTER);
        rect(0,0,this.width, this.height);

        image(this.bola, -35, -40, 70,70);
        pop();
      }
}
