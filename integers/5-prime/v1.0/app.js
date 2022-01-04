const { Console } = require("./console");

const console = new Console();
let number = console.readIntPositive("Dame un numero posi");
console.writeln("El número " + number + " " + esPrimo() + " es primo.");
printDivisor(number);




let answer = "no";
if (number > 1) {
  let divisor = 2;
  while (number % divisor != 0)
    divisor++;
  answer = divisor == number ? "si" : "no";
}
console.writeln("El número " + number + " " + answer + " es primo.");
for (let i = 1; i <= number; i++) {
  let answer = number % i == 0 ? "si" : "no";
  if (i != 1 && i != number && number % i == 0)
    answer += "!!!";
  console.writeln(i + " " + answer + " es divisor de " + number);
}

function prompotPositivos(title){
  let valid;
do {
  number = +console.readInt(title);
  valid = number > 0;
  if (!valid)
    console.writeln("Por favor, un poquito de su atención!!!");
} while (!valid);
}
