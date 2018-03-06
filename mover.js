 function Mover(id){
  this.id = id;
  this.loc = createVector(500, 500);
  this.vel = createVector(random(-5, 5),random(-5, 5));
  this.acc = createVector(0,0);
  this.w = random(10, 30);
  this.clrR = random(255);
  this.clrG = random(255);
  this.clrB = random(255);
  this.angle = 0;

  this.update= function(){
     this.checkEdges();
     if(this.id >= 0 && this.loc.dist(attr.loc) < 100){
    //    //  calculate new acc
       this.acc = p5.Vector.sub( this.loc, attr.loc);
      this.acc.normalize();
       this.acc.mult(0.05);
     }
    if(this.id >= 0 && this.loc.dist(repl.loc) < 100){
       //  calculate new acc
      this.acc = p5.Vector.sub(attr.loc,this.loc);
      this.acc.normalize();
    //    this.acc.mult(0.5);
     }
      this.vel.add(this.acc);
      this.vel.limit(8);
     this.loc.add(this.vel);
     this.render();
  }
  // function definition
  this.checkEdges= function(){
        if (this.loc.x < 0) this.vel.x = -this.vel.x;
        if (this.loc.x > width) this.vel.x = -this.vel.x;
        if (this.loc.y < 0) this.vel.y = -this.vel.y;
        if (this.loc.y > height) this.vel.y = -this.vel.y;
  }

  this.render= function(){
     stroke(this.clrR, this.clrG, this.clrB);
     attr;
     if(this != attr  && this.loc.dist(attr.loc) < 200){
       line(this.loc.x, this.loc.y, attr.loc.x, attr.loc.y)
     }
     fill(255);
     //ellipse(this.loc.x, this.loc.y,10, 10);
     // if(this.id === -2) fill(50,255, 0);
     // if(this.id === -1) fill(0, 0, 255);
     // push();
     //   translate(this.loc.x, this.loc.y);
     //   rotate(this.angle += 0.1);
     //   rect(0,0, this.w, this.w);
     // pop();

  }
}
