class Runner {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.milesRun = 0;
    this.fitness = 25;
    this.completedRaces = [];
  }

  runSomeMiles(miles) {
    this.milesRun += miles;
    this.fitness += miles;
  }

  stretch() {
    this.fitness = this.fitness + 0.5;
  }

  runRace(name, distance) {
    this.completedRaces.push(name);
    this.runSomeMiles(distance);
  }
}

module.exports = Runner;
