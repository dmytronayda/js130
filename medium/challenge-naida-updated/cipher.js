/*
Write a program that conforms to the above requirements and encrypts text
strings with the following simple (and very unsecure) cipher:

- Replace each letter in the original string with another letter.
- The first letter of the alphabet should be replaced with the last.
- The second letter of the alphabet should be replaced with the next to last.
- The third letter of the alphabet should be replace with the second from
the last.
- Continue on in this manner throughout the alphabet.


- For example, the word "money" gets encrypted as "nlmvb".

Notes:
- input: string
- output: string

Test case example:
money
nlmvb

Algorithm:
- initialize the result string
- clean up the string from non-alphanumeric chars

- iterate over the string chars
- get the position of the current char in the English Alphabet
- convert the position of the current char to the opposite position
- concat the converted char to the result str

- return result string
*/

const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

const getOppositeChar = (index) => {
  let reversedAlphabet = ALPHABET.reverse();
  return reversedAlphabet[index];
};

const cleanStr = str => {
  return str.replace(/\s|\W/g, "");
};

const encode = string => {
  let result = "";

  string = cleanStr(string);

  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];

    if (index !== 0 && index % 5 === 0) {
      result += " ";
    }

    if (/\d/.test(char)) {
      result += char;
    } else {
      let charIdxInAlphabet = ALPHABET.indexOf(char.toLowerCase());
      let encodedChar = getOppositeChar(charIdxInAlphabet);
      result += encodedChar;
    }
  }

  return result;
};

module.exports = encode;