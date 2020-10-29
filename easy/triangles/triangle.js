class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  kind() {
    let {
      side1,
      side2,
      side3
    } = this;

    if (this.valid()) {
      if (side1 === side2 && side2 === side3) {
        return "equilateral";
      } else if (side1 === side2 || side2 === side3 || side3 === side1) {
        return "isosceles";
      } else {
        return "scalene";
      }
    } else {
      throw new Error();
    }
  }

  valid() {
    let {
      side1,
      side2,
      side3
    } = this;

    if (side1 > 0 &&
      side2 > 0 &&
      side3 > 0) {
      if (side1 + side2 >= side3 &&
        side2 + side3 >= side1 &&
        side3 + side1 >= side2
      ) {
        return true;
      }
    }

    return false;
  }
}

module.exports = Triangle;