class Mango{
    constructor(x,y){
        var options ={
            isStatic: true,
            restitution: 0,
            friction: 0.5
        }
        this.body = Bodies.circle(x,y,15,options);

        this.image = loadImage("images/mango.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 60, 60);
        pop();
    }
}