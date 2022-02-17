const { Console } = require("./console");

const console = new Console();
const fractions = [];
const SIZE = 3;
for (let i = 0; i < SIZE; i++) {
  fractions[i] = readFraction();
}
let sum = newFraction(0,1);
let product = newFraction(1,1);
for (let i = 0; i < fractions.length; i++) {
  console.writeln(`Fracción: ${toStringFraction(fractions[i])} e inversa: ${toStringFraction(reverseFraction(fractions[i]))}`);
  sum = addFractions(sum, fractions[i]);
  product = multiplyFractions(product, fractions[i]);
}
console.writeln(`Suma: ${toStringFraction(sum)}`);
console.writeln(`Producto: ${toStringFraction(product)}`);
for (let i = 0; i < fractions.length; i++) {
  console.writeln(`Suma sin ${toStringFraction(fractions[i])}: ${toStringFraction(subtractFractions(sum,fractions[i]))}`);
  console.writeln(`Producto sin ${toStringFraction(fractions[i])}: ${toStringFraction(divideFractions(product,fractions[i]))}`);
}

function readFraction() {
  return {
    numerator: console.readNumber(`Dame el numerador: `),
    denominator: console.readNumber(`Dame el denominador: `)
  };
}

function newFraction(numerator, denominator){
  return {
    numerator : numerator,
    denominator : denominator,
  }
}

function addFractions(left, right) {
  return simplifiedFraction({
    numerator: left.numerator * right.denominator + right.numerator * left.denominator,
    denominator: left.denominator * right.denominator
  });
}

function simplifiedFraction(fraction) {

  function gcd(a, b) {
    if (a == b)
      return a;
    if (a > b)
      return gcd(a - b, b);
    return gcd(a, b - a);
  }

  const divisor = gcd(fraction.numerator, fraction.denominator);
  return {
    numerator : fraction.numerator / divisor,
    denominator : fraction.denominator / divisor
  };
}

function subtractFractions(left, right) {
  return addFractions(left, oppositeFraction(right));
}

function oppositeFraction(fraction) {
  return {
    numerator : -fraction.numerator, 
    denominator : fraction.denominator
  }
}

function multiplyFractions(left, right) {
  return simplifiedFraction({
    numerator : left.numerator * right.numerator,
    denominator : left.denominator * right.denominator
  });
}

function divideFractions(left, right) {
  return multiplyFractions(left, reverseFraction(right));
}

function reverseFraction(fraction) {
  return {
    numerator : fraction.denominator, 
    denominator : fraction.numerator
  };
}

function toStringFraction(fraction) {
  return `(${fraction.numerator}/${fraction.denominator})`;
}

