let number1 = prompt("Dame un número: ");
let sum1 = 0;
for (let i = 1; i < number1; i++) {
  if (number % i == 0) {
    sum1 += i;
  }
}
let number2 = prompt("Dame otro número: ");
let sum2 = 0;
for (let i = 1; i < number1; i++) {
  if (number % i == 0) {
    sum2 += i;
  }
}
const answer = number1 == sum2 && number2 == sum1 ? "SI" : "NO";
console.log("Los números " + number1 + " y " + number2 + " " + answer + " son mumeros amigos");
