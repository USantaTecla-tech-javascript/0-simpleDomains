const { Console } = require("./console");

const console = new Console();
let abacusNumbers = [
  '*****|||||',
  '|||||*****',
  'oooooooooo',
  '|****|****',
  '*|****|***',
  '**|****|**',
  '***|****|*',
  '****|****|',
]

function printAbacus(num, digits) {
  let abacus = [];
  let numbers = splitInDigits(num, digits);
  for (let i = 0; i < abacusNumbers.length; i++) {
    abacus[i] = '';
  }
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < abacusNumbers.length; j++) {
      abacus[j] += abacusNumbers[j][numbers[i]];
    }
  }
  let border = getBorder(digits);
  abacus.unshift(border);
  abacus.push(border);
  return abacus;
}

function splitInDigits(num, digits) {
  let arr = [];
  for (let i = 0; i < digits; i++) {
    let temp = num % 10;
    arr.unshift(temp);
    num = parseInt(num / 10);
  }
  return arr;
}

function getBorder(digits) {
  let border = '';
  for (let i = 0; i < digits; i++) {
    if (i % 3 == 0) {
      border += 'C';
    }
    else if (i % 3 - 1 == 0) {
      border += 'D';
    }
    else {
      border += 'U';
    }
  }
  return border;
}

function printAbacusAlt(number, digits) {
  let abacus = [];
  for (let i = 0; i < abacusNumbers.length; i++) {
    abacus[i] = '';
  }
  for (let i = 0; i < digits; i++) {
    for (let j = 0; j < abacusNumbers.length; j++) {
      i > digits - getNumberOfDigits(number) ?
        abacus[j] += abacusNumbers[j][getDigitInPosition(i)] :
        abacus[j] += abacusNumbers[j][0];
    }
  }
  let border = getBorder(digits);
  abacus.unshift(border);
  abacus.push(border);
  return abacus;
}

function getNumberOfDigits(num) {
  let digits = 0;
  do {
    num = parseInt(num / 10);
    digits++;
  } while (num > 0);
  return digits;
}

function getNumberOfDigitsAlt(number) {
  number = stringifyNumber(number);
  return number.length;
}

function stringifyNumber(number) {
  return number.toString();
}

function getDigitInPosition(number, position) {
  let stopPoint = getNumberOfDigits(number) - position;
  for (let i = 0; i < stopPoint; i++) {
    number = parseInt(number / 10);
  }
  return number % 10;
}

function getDigitInPositionAlt(number, position) {
  number = stringifyNumber(number);
  return parseInt(number[position - 1]);
}

console.writeln(printAbacus(2368));
console.writeln(printAbacus(230, 9));
console.writeln(printAbacus(123456789, 30));
console.writeln(getNumberOfDigits(123));
console.writeln(getNumberOfDigits(0));
console.writeln(getNumberOfDigitsAlt(123));
console.writeln(getNumberOfDigitsAlt(0));
console.writeln(getDigitInPosition(9023, 1));
console.writeln(getDigitInPosition(223, 2));
console.writeln(getDigitInPositionAlt(9023, 1));
console.writeln(getDigitInPositionAlt(223, 2));
console.writeln(printAbacusAlt(230, 9));
console.writeln(printAbacusAlt(123456789, 30));
