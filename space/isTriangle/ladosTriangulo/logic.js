let sideA = +prompt("Dame un lado del triangulo: ");
let total = sideA;
let greater = sideA;
let sideB = +prompt("Dame otro lado del triangulo: ");
total = total + sideB;
greater = greater > sideB ? greater : sideB;
let sideC = +prompt("Dame el último lado del triangulo: ");
total = total + sideC;
greater = greater > sideC ? greater : sideC;
let isTriangle = total - greater > greater;
let msgAnswer = "Los lados " + sideA + ", " + sideB + ", " + sideC + " " + (isTriangle ? "SI" : "NO");
let equilateral = sideA == sideB && sideB == sideC ? "equilateralo" : "";
let isosceles = sideA == sideB || sideB == sideC ? "isosceles" : "";
let scalene = sideA != sideB && sideB != sideC && sideC != sideA ? "scaleno" : "";
let msgType = equilateral !== "" ? equilateral : isosceles;
msgType = scalene !== "" ? scalene : msgType;
msgType = isTriangle ? "de tipo " + msgType : "";
console.log(msgAnswer + " forman un triangulo " + msgType);
