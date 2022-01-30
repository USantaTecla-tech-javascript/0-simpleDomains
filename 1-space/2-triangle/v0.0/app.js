const { Console } = require("./console");

const console = new Console();
let sideA = +console.readNumber("Dame el 1º lado del triangulo: ");
let total = sideA;
let greater = sideA;
let sideB = +console.readNumber("Dame el 2º lado del triangulo: ");
total = total + sideB;
greater = greater > sideB ? greater : sideB;
let sideC = +console.readNumber("Dame el 3º lado del triangulo: ");
total = total + sideC;
greater = greater > sideC ? greater : sideC;
let isTriangle = total - greater > greater;
let equilateral = sideA == sideB && sideB == sideC ? "equilateralo" : "";
let isosceles = sideA == sideB || sideB == sideC ? "isosceles" : "";
let scalene = sideA != sideB && sideB != sideC && sideC != sideA ? "escaleno" : "";
let msgType = equilateral !== "" ? equilateral : isosceles;
msgType = scalene !== "" ? scalene : msgType;
console.writeln(`Los lados ${sideA}, ${sideB} y ${sideC}${isTriangle ? "" : " NO"} forman un triangulo ${isTriangle ? `de tipo ${msgType}` : ""}`);
