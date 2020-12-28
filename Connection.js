class Connection
{
    constructor(x,y)
    {
    var options ={
      bodyA:x,
      pointB:y,
      stiffness:0.04,
      length:20
    }
    this.body=Constraint.create(options)
    World.add(world,this.body)
   this.sling1=loadImage("Images/sling1.png")
   this.sling2=loadImage("Images/sling2.png")
   this.sling3=loadImage("Images/sling3.png")
    }
    display()
    {
      image(this.sling1,155,40)
      image(this.sling2,125,35)
      if(this.body.bodyA)
     {
      var a= this.body.bodyA.position;
var b= this.body.pointB;
push ()
stroke(48,22,8)
strokeWeight(5)
line (a.x+20,a.y+9,b.x+30,b.y+9)
line (a.x-10,a.y+9,b.x-10,b.y+9)
if(a.x<=150)
image (this.sling3,a.x-20,a.y-20,15,40)
else
image (this.sling3,a.x+20,a.y-20,15,40)
pop ()
     }
        
    }
    fly()
    {
      this.body.bodyA=null
    }
    join(bird)
    {
     this.body.bodyA=bird
    }
}