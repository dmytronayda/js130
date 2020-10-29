/* 
input is a string
output is a string

convert RNA - long string of chars - to list of 3-char codes (codons)
convert codons to protein names
*/

const CODONS = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
  UAA: "STOP",
  UAG: "STOP",
  UGA: "STOP",
};

const toListOfCodons = string => {
  return string.match(/.{3}/g);
}

const toListOfProteins = arr => {
  let result = [];
  for (let index = 0; index < arr.length; index += 1) {
    let codon = arr[index];
    let protein = CODONS[codon];
    if (protein === undefined) {
      throw new Error("Invalid codon");
    } else if (protein === "STOP") {
      return result;
    } else {
      result.push(protein);
    }
  }

  return result;
}

const translate = (string = "") => {
  if(string.length < 3) return [];
  let codons = toListOfCodons(string);
  return toListOfProteins(codons);
}

module.exports = translate;