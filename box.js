class Box{
    constructor(x,y,width,height){
        var option = {
            restitution : 0.4,
            friction : 1,
            density : 1
        }
    this.body = Bodies.rectangle(x,y,width,height,option)
    this.width = width;
    this.height = height;
    this.Image = loadImage("wood1.png");
    this.visibility = 255;
    World.add(world,this.body);
    }
    display(){
        //console.log(this.body.speed)
        if(this.body.speed <12){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER)
        image(this.Image,0,0,this.width,this.height)
        pop();
    }
    else{
        var pos = this.body.position;
        World.remove(world,this.body)
        push();
        this.visibility = this.visibility -5;
        tint(255,this.visibility)
        image(this.Image,pos.x,pos.y,this.width,this.height)
        pop();
    }
    
}
    score(){
        if(this.visibility<0&&this.visibility>-105){
            Score = Score + 1
          }
    }
}
    