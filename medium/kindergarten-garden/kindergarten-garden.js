const KIDS = [
  "Alice",
  "Bob",
  "Charlie", 
  "David",
  "Eve", 
  "Fred", 
  "Ginny", 
  "Harriet",
  "Ileana", 
  "Joseph", 
  "Kincaid",
  "Larry"
];

const PLANTS = {
  R: "radishes",
  G: "grass",
  C: "clover",
  V: "violets",
};

/* 
/*
Notes:
- input: string with \n char specifying the end of the first row and beginning of the next one
- output: array of plants assigned to a given kid; where kid is a property of the Garden object

Plants are associated with capital letters: V for violets, etc.
There are 2 rows. Every kid gets 2 plants from each row. Plants are assigned 
to kids in alphabetical order.

Test case example:
new Garden("VC\nRC").alice 
[ "violets",
  "clover",
  "radishes",
  "clover"  ]


Algorithm:
- create the Garden class and export it for the test suite
*/
const ROW1 = 0;
const ROW2 = 1;

class Garden {
  constructor(diagram, kids = KIDS) {
    this.rowPlants = diagram.split("\n");
    kids.sort().forEach((kid, index) => {
      this[kid.toLowerCase()] = this.getPlants(index);
    });
  }

  getPlants(index) {
    let firstPlant = index * 2;
    let secondPlant = firstPlant + 1;

    let plants = [
      this.rowPlants[ROW1][firstPlant],
      this.rowPlants[ROW1][secondPlant],
      this.rowPlants[ROW2][firstPlant],
      this.rowPlants[ROW2][secondPlant],
    ];

    return plants.map(char => PLANTS[char]);
  }
}

module.exports = Garden;