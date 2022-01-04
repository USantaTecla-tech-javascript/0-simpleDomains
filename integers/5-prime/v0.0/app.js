const { Console } = require("./console");

const console = new Console();
let number;
do {
  number = +console.readInt("Dame un numero positivo: ");
  if (number/number != 1 || number <= 0)
    console.writeln("Por favor, un poquito de su atención!!!");
} while (number/number != 1 || number <= 0);
let divisor = 2;
if (number > 1)
  while (number % divisor != 0)
    divisor++;
console.writeln("El número " + number + " " + (divisor == number ? "si" : "no") + " es primo.");
for (let i = 1; i <= number; i++)
  if (i == 1 || i == number)
    console.writeln(i + " " + (number % i == 0 ? "si" : "no") + " es divisor de " + number);
  else
    console.writeln(i + " " + (number % i == 0 ? "si!!!" : "no") + " es divisor de " + number);
