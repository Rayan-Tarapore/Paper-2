class Paper{
    constructor(x,y,radius){
    var ellipse_option={
        restitution: 0.3,
        friction:0.5,
        density:1.2
    }
    this.image = loadImage("PaperSprite.png")
    this.body = Bodies.circle(x,y,radius,ellipse_option)
    this.radius= 60;
    World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0,this.radius,this.radius);
        pop();
    }
}