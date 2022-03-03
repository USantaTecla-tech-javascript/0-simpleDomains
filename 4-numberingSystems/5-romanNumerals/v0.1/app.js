const { Console } = require("./console");

const console = new Console();
console.writeln('101 en romano: ' + decimalToRoman(101));
console.writeln('45 en romano: ' + decimalToRoman(45));
console.writeln('236 en romano: ' + decimalToRoman(236));
console.writeln('841 en romano: ' + decimalToRoman(841));

function decimalToRoman(num) {
  if (num < 1 || num > 999) {
    return;
  }
  const CODES = [
    ["M", "D", "C"],
    ["C", "L", "X"],
    ["X", "V", "I"]
  ]
  const CENTS = 0;
  const TEENS = 1;
  const UNITS = 2;
  
  let separatedNumbers = splitNumber(num);
  let result = "";
  for (let i = 0; i < separatedNumbers.length; i++) {
    result += toRomanSystem(CODES[i], separatedNumbers[i]);
  }
  return result;

  function splitNumber(num) {
    let result = [];
    do {
      let temp = num % 10;
      result.unshift(temp);
      num = parseInt(num / 10);
    } while (result.length < CODES.length);
    return result;
  }

  function toRomanSystem(codes, digit) {
    let result = "";
    if (0 < digit && digit <= 4) {
      result += codes[UNITS];
      if (digit >= 2 && digit <= 3) {
        result += codes[UNITS];
        if (digit == 3) {
          result += codes[UNITS];
        }
      }
    }
    if (digit >= 4 && digit < 9) {
      result += codes[TEENS];
    }
    if (digit > 5) {
      result += codes[UNITS];
      if (digit >= 7 && digit <= 8) {
        result += codes[UNITS];
        if (digit == 8) {
          result += codes[UNITS];
        }
      }
    }
    if (digit === 9) {
      result += codes[CENTS];
    }
    return result;
  }

}