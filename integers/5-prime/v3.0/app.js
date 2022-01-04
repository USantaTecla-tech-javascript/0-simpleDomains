const { Console } = require("./console");

const console = new Console();
let number = +console.readInt("Dame un numero positivo: ");
while (!(number > 0)){
  console.writeln("Por favor, un poquito de su atención!!!");
  number = +console.readInt("Dame un numero positivo: ");
}
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
