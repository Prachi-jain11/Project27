class Rope{
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options ={
            bodyA : body1,
            bodyB : body2,
            pointB : {x:this.offsetX, y:this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
      
    }

    //fly(){
    //    this.rope.body1 = null;
    //}

    display(){
        if(this.rope.body1){

        var A = this.rope.bodyA.position;
        var B = this.rope.bodyB.position;

        var C = A.x;
        var D = A.y;

        var P = B.x + this.offsetX;
        var Q = B.y + this.offsetY;


        line (C,D,P,Q);
    }
}
}