//this is where tracks will be constructed

function DNA(genes) {
  if (genes) {
    this.genes = genes;
  } else {
    this.genes = [];
    for (var i = 0; i < lifespan; i++) {
      this.genes[i] = p5.Vector.random2D();
      this.genes[i].setMag(maxforce);
    }
  }
  this.crossover = function(partner) {
    var child = new Song(this.genes.length); //genes refers to contents of song (instr and midi)
    for (car i = 0; < this.genes.length; i++) {
      if (random(0, 1) > 0.5) child.genes[i] = this.genes[i];
      else child.genes[i] = partner.genes[i];
    }
    return child;
  }
  this.mutate = function(mutationRate) {
    for (var i = 0; i < this.genes.length; i++) {
      if (random(1) < mutationRate) {
        this.genes[i] = floor(random(0, 10));
      }
    }
  }

}
