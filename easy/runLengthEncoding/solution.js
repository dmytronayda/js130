/* 
- initialize the result string
- initialize the charArr array that is going to keep the repetitions of a char

- iterate over the chars of the string 
  - charArr is empty or current char is same as element in charArr
    - push char to the charArr
  - else if char is not in the charArr yet
    - **encode** char and concat it to the result string
    - reassign charArr to array with new current char
  - if this is the last char in the string and it's was not yet encoded
    - **encode** the char and concat to result string

- return result string 
*/
const encodeChar = arr => {
  let char = arr[0];
  return arr.length === 1 ? char : `${arr.length}${char}`;
}


const encode = str => {
  let encoded = "";
  let charArr = [];

  for (let index = 0; index < str.length; index += 1) {
    let char = str[index];
    if (charArr.length === 0 ||
      charArr[0] === char) {
      charArr.push(char);
    } else {
      encoded += encodeChar(charArr);
      charArr = [char];
    }
    if (index === str.length - 1) {
      encoded += encodeChar(charArr);
    }
  }

  return encoded;
}

/* 
- initialize counter var
- initialize decoded str var

- iterate over the encoded string chars
  - check if char is a number
    - counter concat this char
  - counter = +counter || 1
  - decoded concat char repeated counter # times
  - reassign counter to initial value

- return decoded
*/

const decode = str => {
  let decoded = "";
  let counter = "";

  str
    .split("")
    .forEach(char => {
      if (+char) {
        counter += char;
      } else {
        counter = +counter || 1;
        decoded += char.repeat(counter);
        counter = "";
      }
    });

  return decoded;
}

module.exports = {
  encode,
  decode,
}