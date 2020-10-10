class Rock{
    constructor(x, y){
        var options ={
            isStatic: false,
            restitution : 0,
            friction : 1,
            density : 1.5
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        World.add(world, this.body);

        this.image = loadImage("images/stone.png");
        this.width = 50;
        this.height = 50;
    }
    display(){
        var pos =this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}