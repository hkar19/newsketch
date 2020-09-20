const canvas = {
  width: window.innerWidth *0.9,
  height: window.innerHeight *0.9,
}
let Antenas = [];

function setup(){
  let cnv = createCanvas(canvas.width,canvas.height);
  Antenas.push(new Antena(10,10,100));
}

function draw(){
  background("#c6ff85");
  drawAntena();
}

function drawAntena(){
  Antenas.forEach(antena=>antena.show());
}

function mousePressed(){
  // Antenas.push(new Antena(mouseX,mouseY,100));
  // let hitAntena = false;
  // let AntenaHits = [];
  let newList = [];
  Antenas.forEach((antena,i,arr)=>{
    let inCircle = dist(mouseX,mouseY,antena.x,antena.y) <= antena.size;
    if(!inCircle){
      // AntenaHits.push(i);
      newList.push(antena);
    }
  })
  if(Antenas.length===newList.length){
    Antenas.push(new Antena(mouseX,mouseY,100));
  }
  else{
    // let newList = [...Antenas].filter();
    Antenas = [...newList];
  }
}