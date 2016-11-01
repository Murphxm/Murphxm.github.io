//this is where the population of songs will be stored

//Population Constructer
function Population(){
  this.songs = []; //initializes songs as array
  this.popsize = 10; // number of tracks
  this.matingpool = []; //initializes mating pool as variable
  this.generations = 0; //1 as first?

  for (var i = 0; i < this.popsize; i++) {
    this.songs[i] = new Song();
  }

  this.evaluate = function() {
    var maxfit = 0;
    for (var i = 0; i < this.popsize; i++) {
      this.song[i].calcFitness();
      if (this.song[i].fitness > maxfit) {
        maxfit = this.song[i].fitness;
      }
    }
    for (var i = 0; i < this.popsize; i++) {
      this.song[i].fitness /= maxfit;
    }
    this.matingpool = []; //initializes mating pool as variable?
    for (var i = 0; i < this.popsize; i++) { //for ever song in the population...
      var n = this.song[i].fitness * 100; //..times that songs fitness by 100
      for (var j = 0; j < n; j++) { //for every 1 of this new value...
        this.matingpool.push(this.song[i]); //...add song to mating pool
      }
    }
  }

  this.selection = function() {
    for (var i = 0; i < this.songs.length; i ++) { //for as many songs as there are
      var a = floor(random(this.matingPool.length)); //selects random song from mating pool
      //var b = floor(random(this.matingPool.length)); //and another
      var b = this.selectParentB(a); //and another, checking that they are not the same
      var partnerA = this.matingPool[a]; //assigns value to partnerA
      var partnerB = this.matingPool[b]; //and the second to partnerB
      var child = partnerA.crossover(parentB); //initializes child as return product of
                                               //crossover function of partnerA, widt
                                               //arguments: partnerB.
      child.mutate(this.mutationRate); //runs the child through the mutate function
      this.songs[i] = child; //replaces current song with newly created child
    }
    this.generations ++; //marks that generations have increased
  }

  this.selectParentB = function(parentA) {
    var p = floor(random(this.matingPool.length)); //selects random song from mating pool
    if (p != a) { //if it is not equal to song a
      return p; //return it as var b
    } else { //otherwise...
      return this.selectParentB(a); //...runs function again
    }
  }
}
