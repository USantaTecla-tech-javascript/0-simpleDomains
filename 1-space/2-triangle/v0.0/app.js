const { Console } = require("./console");

const console = new Console();
const sideA = console.readNumber("Dame el 1º lado del triangulo: ");
let total = sideA;
let greater = sideA;
const sideB = console.readNumber("Dame el 2º lado del triangulo: ");
total += sideB;
greater = greater > sideB ? greater : sideB;
const sideC = console.readNumber("Dame el 3º lado del triangulo: ");
total += sideC;
greater = greater > sideC ? greater : sideC;
const equilateral = sideA == sideB && sideB == sideC ? "equilateralo" : "";
const isosceles = sideA == sideB || sideB == sideC ? "isosceles" : "";
let msgType = equilateral !== `` ? equilateral : isosceles;
const scalene = sideA != sideB && sideB != sideC && sideC != sideA ? "escaleno" : "";
msgType = scalene !== `` ? scalene : msgType;
console.writeln(`Los lados ${sideA}, ${sideB} y ${sideC}${total - greater > greater ? "" : " NO"} forman un triangulo ${msgType !== `` ? `de tipo ${msgType}` : ""}`);
