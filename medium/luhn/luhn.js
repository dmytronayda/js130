class Luhn {
  constructor(str = "") {
    this.numString = str;
  }

  valid() {
    if (this.numString.length < 2) return false;
    let toCheck = this.numString.replace(/\s/g, "");
    if (toCheck.match(/\D/g) !== null) return false;
    if (toCheck.length < 2) return false;


    let sum = toCheck.split("").reverse().map((char, index) => {
      if (index % 2 === 1) {
        if (+char * 2 > 9) {
          return +char * 2 - 9;
        }
        return +char * 2;
      } else {
        return +char;
      }
    }).reduce((sum, nextNum) => sum + nextNum, 0);

    return sum % 10 === 0;
  }
}

module.exports = Luhn;