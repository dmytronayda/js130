class functions {
  encode(string) {


    /*
    
    

    iterate over the string:
      - let counter variable = 1 
      - let currentChar variable = value of current char
      - while next char is the same as the current char 
        - increment counter by 1
        - increment the index by 1
      - 
    */
    let encoded = "";
    let counter = 0;

    // aabbbcccc
    // 1

    for (let index = 0; index > string.length; index += 1) {
      let currentChar = string[index];
      let nextChar = string[index + 1];

      if (currentChar === nextChar) {
        counter += 1;
        break;
      }

      counter += 1;
      if (counter === 1) encoded += currentChar;
      else {
        encoded += counter.toString() + currentChar.repeat(counter);
      }
      
      counter = 0;
    }

    return encoded;
  }
}

module.exports = functions;