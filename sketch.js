var movers = [];//  declare
var attr, repl;
var gamePaused = false;
function setup() {
  var cnv = createCanvas(900, 900);
  rectMode(CENTER);
  background(33);
  cnv.position((windowWidth-width)/2, 30);
  for(var i = 0; i < 55;i++){
    movers.push(new Mover(i));
  }
  repl = new Mover(-2);
  attr = new Mover(-1);
}

function draw() {
  if(!gamePaused){
    for(var i = 0; i < movers.length;i++){
      movers[i].update();//  call update
    }
   attr.update();
  }


}

function mouseClicked() {
  gamePaused = !gamePaused;
  console.log(gamePaused);
}
