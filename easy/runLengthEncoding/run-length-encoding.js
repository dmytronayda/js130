/* 
input is a string
output string

CAAABB
C3A2B

initiate the array counting the repeating chars
initiate the encoded string

iterate over the input string chars
  - if this is the 1st char of the string or repeating chars has this char
    - add it to the repeating chars
  - in other case
    - encode the chars in repeating chars and add it to the encoded string
    - reassign repeating chars to array with current char

  - if this is the last char in the array
    - encode the chars in repeating chars and add it to the encoded string

return encoded string
*/

const encodeChar = arr => {
  let repeatedChar = arr[0];
  if (arr.length < 2) {
    return repeatedChar;
  }

  return `${arr.length}${repeatedChar}`;
}

const encode = str => {
  let repeatingChars = [];
  let encoded = "";

  for(let index = 0; index < str.length; index += 1) {
    let char = str[index];
    if (index === 0 || repeatingChars.includes(char)) {
      repeatingChars.push(char);
    } else {
      encoded += encodeChar(repeatingChars);
      repeatingChars = [char];
    }

    if (index === str.length - 1) {
      encoded += encodeChar(repeatingChars);
    }
  }

  return encoded;
}

/* 
initiate the times variable and assign to empty string
initiate the decoded variable and assign to empty string

iterate over the string chars
  - initiate the char var and assign to the char of the string at given index
  - check if current char is a digit
    - if it is, concatinate it to the times var
  - else 
    - reassign the times variable to the string value of times converted to a number or num 1
    - concat the current char to decoded string times # of times
    - reassign times to empty string

return the decoded
*/
const decode = str => {
  let times = "";
  let decoded = "";

  for (let index = 0; index < str.length; index += 1) {
    let char = str[index];
    if (/\d/.test(char)) times += char;
    else {
      times = +times || 1;
      decoded += char.repeat(times);
      times = "";
    }
  }

  return decoded;
}

module.exports = {
  encode,
  decode,
}