class CONSTRAINT{
    constructor(a,b){
     var options={
      bodyA:a,
      pointB:b,
      length:50,
      stiffness:0.04, 
     }
     
    this.glue=Matter.Constraint.create(options);
    World.add(world,this.glue);
    this.pointb=b;

    }

     fly(){
        this.glue.bodyA=null;
     }


    display(){
        if(this.glue.bodyA){
            line(this.glue.bodyA.position.x,this.glue.bodyA.position.y,
                this.pointb.x,this.pointb.y); 
        }
    }

}