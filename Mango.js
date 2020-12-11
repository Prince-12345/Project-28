class Mango{

constructor(x,y,r){
    var options={

        isStatic:true
    }
this.body=Bodies.circle(x,y,r,options);
this.r=r;
World.add(world,this.body)
this.image=loadImage("mango.png");

}
display(){
push();
translate(this.body.position.x,this.body.position.y);
imageMode(CENTER);
pop();
image(this.image,this.body.position.x,this.body.position.y,this.r,this.r);

}



}