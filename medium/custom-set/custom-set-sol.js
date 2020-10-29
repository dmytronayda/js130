class CustomSet {
  constructor(elements = []) {
    this.elements = elements;
  }

  empty() {
    return this.elements.length === 0;
  }

  contains(elem) {
    return this.elements.includes(elem);
  }

  subset(otherSet) {
    return this.elements.every(elem => otherSet.contains(elem));
  }

  disjoint(otherSet) {
    return this.elements.every(elem => !otherSet.contains(elem));
  }

  eql(otherSet) {
    if (this.elements.length !== otherSet.elements.length) {
      return false;
    }
    return this.subset(otherSet);
  }
  add(elem) {
    if (!this.contains(elem)) {
      this.elements.push(elem);
    }
    return this;
  }

  intersection(otherSet) {
    let sameElements = this.elements.filter(elem => otherSet.contains(elem));
    return new CustomSet(sameElements);
  }

  difference(otherSet) {
    let differentElements = this.elements.filter(elem => !otherSet.contains(elem));
    return new CustomSet(differentElements);
  }

  union(otherSet) {
    let unionSet = new CustomSet(this.elements);
    otherSet.elements.forEach(elem => unionSet.add(elem));
    return unionSet;
  }
}

module.exports = CustomSet;