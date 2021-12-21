function sumDivisors(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (number % i == 0) {
      sum += i;
    }
  }
  return sum;
}

function areFriends(number1, number2) {
  return number1 == sumDivisors(number2)
    && number2 == sumDivisors(number1);
}

let number1 = prompt("Dame un número: ");
let number2 = prompt("Dame otro número: ");
let answer = areFriends(number1, number2) ? "SI" : "NO";
console.log("Los números " + number1 + " y " + number2 + " " + answer + " son mumeros amigos");
