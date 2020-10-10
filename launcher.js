class Chain{
    constructor(bodyA,pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            length: 5,
            stiffness: 0.005
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    fly(){
        this.chain.bodyA = null;
    }

    attach(body){
        this.chain.bodyA = body;
    }

    display(){
        if(this.chain.bodyA){
        var startPoint = this.chain.bodyA.position;
        var endPoint = this.chain.pointB;
        line(startPoint.x, startPoint.y, endPoint.x, endPoint.y);
        }
    }
}