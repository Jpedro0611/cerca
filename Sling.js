class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
      
        this.pointB = pointB;
        this.Sling = Constraint.create(options);
        World.add(world, this.Sling);
    }
    fly () {
        this.Sling.bodyA = null

    }
    
    display(){
        
        
        if (this.Sling.bodyA){
        var pointA = this.Sling.bodyA.position;
        var pointB = this.pointB;
        push()
        
        stroke(48,22,8)
  
            strokeWeight(7);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
           
        
        
        pop()

        }
    }
    
}