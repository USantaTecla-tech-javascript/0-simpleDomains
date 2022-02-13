const { Console } = require("./console");

const console = new Console();
const sideA = console.readNumber("Dame el 1º lado del triangulo: ");
const sideB = console.readNumber("Dame el 2º lado del triangulo: ");
const sideC = console.readNumber("Dame el 3º lado del triangulo: ");
let greater = sideA;
if (sideB > greater) {
  greater = sideB;
}
if (sideC > greater) {
  greater = sideC;
}
let msg = `Los lados ${sideA}, ${sideB} y ${sideC} `;
const isTriangle = greater < (sideA + sideB + sideC) - greater;
if (!isTriangle) {
  msg += "NO ";
}
msg += `forman un triangulo`;
if (isTriangle) {
  msg += ` de tipo`;
  if (sideA == sideB && sideB == sideC) {
    msg += " equilatero";
  } else if (sideA == sideB || sideB == sideC || sideC == sideA) {
    msg += " isosceles";
  } else {
    msg += " escaleno";
  }
}
console.writeln(msg);
