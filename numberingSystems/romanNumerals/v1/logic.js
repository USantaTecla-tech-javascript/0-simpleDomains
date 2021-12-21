function toRoman(decimal) {
  let roman = "";
  for (let i = 0; i < getLength(decimal); i++) {
    roman += toDigitRoman(getRightDigit(decimal, i));
  }
  return roman;
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

const CODES = [
  ["I","V","X"],
  ["X","L","C"],
  ["C","D","M"]];

const UNITS = 0;
const TEENS = 1;
const CENTS = 2;

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

