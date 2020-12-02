class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255;
  }

 display(){
   console.log(this.body.speed);
  if (this.body.speed<3){
    super.display=true;
  }
  else
  //World.remove(world,this.body);
   push();
   this.Visiblity=this.Visiblity-5;
   tint(230,this.Visiblity);
   image(this.image,this.Visiblity.X,this.Visiblity.Y,50,50);
   pop(); 
  }
  



};