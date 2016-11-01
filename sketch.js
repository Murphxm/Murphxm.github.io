//Set up website layout and add files, link to shit
//Run initial population creation, randomized draw.

var pop;

function setup() {

  createCanvas(600, 600);
  song = new Song();
  pop = new Population();

}

function draw() {
  background(0);
  population.run;

  //receive results from interface
  //if completer run: {
  //population.selection();
  //}

  //draw interface objects
}

function Display(song) {
  this.pos = createVector(width / 2, height);
  this.completed = false;
  this.crashed = false; //necessary?

  if (song) {
    this.song = song;
  } else {
    this.midi = new Midi();
    this.instr = new Instr();
  }
  this.fitness = 0;

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.recieveFitness = function() {
    //something here?
    if (this.completed) {
      this.fitness *= 10;
    }
    if (this.crashed) { //necessary?
      this.fitness /= 10;
    }
  }

  this.update = function() {

    var d = dist(this.pos.x, this.pos.y, target.x, target.y);
    if (d < 10) {
      this.completed = true;
      this.pos = target.copy();
    }
    if (this.pos.x > rx && this.pos.x < rx + rw && this.pos.y > ry && this.pos.y < ry + rh) {
      this.crashed = true;
    }
    if (this.pos.x > width || this.pos.x < 0) {
      this.crashed = true;
    }
    if (this.pos.y > height || this.pos.y < 0) {
      this.crashed = true;
    }
  }

  this.show = function() {
    push();
    //display code?
    pop();
  }
}
