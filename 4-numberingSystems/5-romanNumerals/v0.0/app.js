const { Console } = require("./console");

const console = new Console();
console.writeln(getRightDigit(123,1));
console.writeln('101 en romano: ' + decimalToRoman(101));
console.writeln('45 en romano: ' + decimalToRoman(45));
console.writeln('236 en romano: ' + decimalToRoman(236));
console.writeln('841 en romano: ' + decimalToRoman(841));

function decimalToRoman(decimal) {
  const CODES = [
    ["I", "V", "X"],
    ["X", "L", "C"],
    ["C", "D", "M"]];

  const UNITS = 0;
  const TEENS = 1;
  const CENTS = 2;

  let roman = "";
  for (let i = 1; i <= getLength(decimal); i++) {
    roman = `${toDigitRoman(getRightDigit(decimal, i), i-1)}${roman}`;
  }
  return roman;

  function toDigitRoman(digit, position) {
    let roman = toUnitsRoman(digit, position);
    if (4 <= digit && digit <= 8) {
      if (digit < 5) {
        roman += CODES[position][TEENS];
      } else {
        roman = CODES[position][TEENS] + roman;
      }
    } else if (digit == 9) {
      roman += CODES[position][CENTS];
    }
    return roman;
  }

  function toUnitsRoman(digit, position) {
    const x = digit % 5;
    if (x < 4) {
      let msg = "";
      for (let i = 0; i < x; i++) {
        msg += CODES[position][UNITS];
      }
      return msg
    }
    return CODES[position][UNITS];
  }
}

function getLength(number) {
  let digits = 0;
  while (number > 0) {
    number = parseInt(number / 10);
    digits++;
  }
  return digits;
}

function getRightDigit(number, position) {
  for (let i = 0; i < position - 1; i++) {
    number = parseInt(number / 10);
  }
  return number % 10;
}


