class Tree {
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        //World.add(world,this.body);
        this.width=width;
        this.height=height;
        this.image=loadImage("tree.png");
    }

    display(){
    var  treepos=this.body.position
        push();
        imageMode(CENTER);
        image(this.image,treepos.x,treepos.y,this.width,this.height);
        pop();
    }

}