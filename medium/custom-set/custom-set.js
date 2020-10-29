class CustomSet {
  constructor(arr = []) {
    this.elements = arr; 
  }

  empty() {
    return this.elements.length === 0;
  }

  contains(element) {
    return this.elements.includes(element);
  }

  subset(anotherSet) {
    return this.elements.every(elem => anotherSet.contains(elem));
  }

  disjoint(anotherSet) {
    return this.elements.every(elem => !anotherSet.contains(elem));
  }

  eql(anotherSet) {
    if(this.elements.length !== anotherSet.elements.length) return false;
    return this.subset(anotherSet);
  }

  add(elem) {
    if(!this.contains(elem)) {
      this.elements.push(elem);
    }
    return this;
  }

  intersection(anotherSet) {
    let shared = this.elements.filter(elem => anotherSet.contains(elem));
    return new CustomSet(shared);
  }

  difference(anotherSet) {
    let different = this.elements.filter(elem => !anotherSet.contains(elem));
    return new CustomSet(different);
  }

  union(anotherSet) {
    anotherSet.elements.forEach(elem => this.add(elem));
    return this;
  }
}

module.exports = CustomSet;