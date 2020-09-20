class Antena{
  constructor(x,y,strength){
    this.size = 10;
    this.x = x;
    this.y = y;
    this.strength= strength;
  }

  show(){
    fill(0,0,0,100);
    circle(this.x,this.y,this.size);
    fill(0,0,0,0);
    circle(this.x,this.y,this.strength);
  }
}