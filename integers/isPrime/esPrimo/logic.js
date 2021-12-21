let number;
do {
  number = +prompt("Dame un numero positivo: ");
  if (number/number != 1 || number <= 0)
    console.log("Por favor, un poquito de su atención!!!");
} while (number/number != 1 || number <= 0);
let divisor = 2;
if (number > 1)
  while (number % divisor != 0)
    divisor++;
console.log("El número " + number + " " + (divisor == number ? "si" : "no") + " es primo.");
for (let i = 1; i <= number; i++)
  if (i == 1 || i == number)
    console.log(i + " " + (number % i == 0 ? "si" : "no") + " es divisor de " + number);
  else
    console.log(i + " " + (number % i == 0 ? "si!!!" : "no") + " es divisor de " + number);
