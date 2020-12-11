class con{
    constructor(bodyA,pointB){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        length:20,
        stiffness:0.07

    }

    this.chain=Constraint.create(options);
    this.pointB=pointB;
    World.add(world,this.chain);
    }
   
    fly(){
    this.chain.bodyA=null;
    }

    attach(bodyA){
    this.chain.bodyA=bodyA;
    }

    display(){
        if(this.chain.bodyA){
        strokeWeight(4);
       line(this.chain.bodyA.position.x,this.chain.bodyA.position.y-15,this.chain.pointB.x,this.chain.pointB.y);
        }
    }
}