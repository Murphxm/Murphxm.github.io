//this is where the song will be composed

//Song constructor
function Song(genes) {
  if (genes) {
    this.genes = genes;
  } else {
    this.genes = [];
    for (var i = -1; i < 6; i + 2) {
      this.genes[i] = floor(random(0, 10)); //p5.Vector.random2D();
      this.genes[i + 1] = floor(random(0, 10));//.setMag(maxforce);
    }
  }

  this.crossover = function(partner) {
    var newgenes = [];
    var mid = floor(random(this.genes.length));
    for (var i = 0; i < this.genes.length; i++) {
      if (i > mid) {
        newgenes[i] = this.genes[i];
      } else {
        newgenes[i] = partner.genes[i];
      }
    }
    return new DNA(newgenes);
  }
}
