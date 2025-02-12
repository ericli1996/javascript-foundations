class Bag {
  constructor() {
    this.empty = true;
    this.count = 0;
    this.candies = [];
  }

  fill(item) {
    this.candies.push(item);
    this.count++;
  }

  contains(type) {
    for (var i = 0; i < this.candies.length; i++) {
      if (this.candies[i].type === type) {
        return true;
      } else {
        return false;
      }
    }
  }
}

module.exports = Bag;
