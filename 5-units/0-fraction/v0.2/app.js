const { Console } = require("./console");

class Fraction {

  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
  }

  add(fraction) {
    return new Fraction(
      this.numerator * fraction.denominator + fraction.numerator * this.denominator,
      this.denominator * fraction.denominator).simplified();
  }

  simplified() {

    function gcd(a, b) {
      if (a == b)
        return a;
      if (a > b)
        return gcd(a - b, b);
      return gcd(a, b - a);
    }

    const divisor = gcd(this.numerator, this.denominator);
    return new Fraction(this.numerator / divisor, this.denominator / divisor);
  }

  subtract(fraction) {
    return this.add(fraction.opposite());
  }

  opposite() {
    return new Fraction(-this.numerator, this.denominator);
  }

  multiply(fraction) {
    return new Fraction(
      this.numerator * fraction.numerator,
      this.denominator * fraction.denominator).simplified();
  }

  divide(fraction) {
    return this.multiply(fraction.reverse());
  }

  reverse() {
    return new Fraction(this.denominator, this.numerator);
  }

  toString() {
    return `(${this.numerator}/${this.denominator})`;
  }

}

const console = new Console();
const fractions = [];
const SIZE = 3;
for (let i = 0; i < SIZE; i++) {
  fractions[i] = readFraction();
}
for (let i = 0; i < fractions.length; i++) {
  console.writeln(`Fracción: ${fractions[i].toString()} e inversa: ${fractions[i].reverse().toString()}`);
}
let sum = new Fraction(0,1);
let product = new Fraction(1,1);
for (let i = 0; i < fractions.length; i++) {
  sum = sum.add(fractions[i]);
  product = product.multiply(fractions[i]);
}
console.writeln(`Suma: ${sum.toString()}`);
console.writeln(`Producto: ${product.toString()}`);
for (let i = 0; i < fractions.length; i++) {
  console.writeln(`Suma sin ${fractions[i].toString()}: ${sum.subtract(fractions[i]).toString()}`);
  console.writeln(`Producto sin ${fractions[i].toString()}: ${product.divide(fractions[i]).toString()}`);
}

function readFraction() {
  return new Fraction(
    console.readNumber(`Dame el numerador: `),
    console.readNumber(`Dame el denominador: `));
}

