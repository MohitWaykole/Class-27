class Chain{
    constructor(bodyA, bodyB){
        var option = {
            bodyA : bodyA,
            bodyB : bodyB,
            length : 10,
            stiffness : 0.04
        }

        this.body = Matter.Constraint.create(option);
        World.add(world, this.body);
    }

    display(){
        push();
        var b = this.body.bodyA.position;
        var b2 = this.body.bodyB.position;
        stroke("brown");
        strokeWeight(5);
        line(b.x, b.y, b2.x, b2.y);
        pop();
    }
}