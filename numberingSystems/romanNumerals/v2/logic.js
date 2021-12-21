function decimalToRoman(num) {
    if(num < 1 || num > 999) {
      return;
    } else {
      parseInt(num);
      let separatedNumbers = splitNumber(num);
      let codes = [
        ["M","D","C"],
        ["C","L","X"],
        ["X","V","I"]
      ]
      let result = "";
      for(let i = 0; i < separatedNumbers.length; i++) {
        result += toRomanSystem(codes[i], separatedNumbers[i]);
      }
      return result;
    }
  }

  function splitNumber(num) {
    let result = [];
    do {
      let temp = num % 10;
      result.unshift(temp);
      num = parseInt(num / 10);
    } while(result.length < 3);
    return result;
  }

  function toRomanSystem(code, num) {
    let result = "";
    if(num == 0) {
      result += "";
    } else if(num < 5) {
      result += code[2];
      if(num >= 2 && num < 4) {
        result += code[2];
        if(num == 3) {
          result += code[2];
        }
      }
    }
    if(num >= 4 && num < 9) {
      result += code[1];
    }
    if(num > 5) {
      result += code[2];
      if(num >= 7 && num < 9) {
        result += code[2];
        if(num == 8) {
          result += code[2];
        }
      }
    }
    if(num >= 9) {
      result += code[0];
    }
    return result;
  }

  console.log('101 en romano: ' + decimalToRoman(101));
  console.log('45 en romano: ' + decimalToRoman(45));
  console.log('236 en romano: ' + decimalToRoman(236));
  console.log('841 en romano: ' + decimalToRoman(841));
  