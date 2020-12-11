class Boy{

constructor(x,y,width,height){
    var options={
        isStatic:true
    }
this.body=Bodies.rectangle(x,y,width,height,options);
//World.add(world,this.body);
this.width=width;
this.height=height;
this.image=loadImage("boy.png");
}
display(){
    var pos=this.body.position;
    push();
    imageMode(RADIUS);
    pop();
	image(this.image,pos.x,pos.y,this.width,this.height);
    
}


}