class boy{
    constructor(x,y,w,h)
    {
        var options = {
            isStatic: false
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.body.setVelocityX = 2;
        this.w = w; 
        this.h = h;
         World.add(world,this.body);
        this.image = loadImage("download.png");
       
      }
      display(){
        var pos =this.body.position;
        imageMode(CENTER);
      image(this.image,pos.x, pos.y, this.w,this.h);
      }
    };
    
