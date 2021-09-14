class launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.007,
            length:10
        }
        this.pointB=pointB;
        this.Launcher=Constraint.create(options);
        World.add(world,this.Launcher);
    }
    fly(){
        this.Launcher.bodyA=null;
    }
    display(){
        if(this.Launcher.bodyA){
            var pointA=this.Launcher.bodyA.position;
            var pointB=this.pointB;
            fill("black");
            strokeWeight(10);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}