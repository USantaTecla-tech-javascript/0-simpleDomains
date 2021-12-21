function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

function log(prefix, condition, postfix){
  const answer = condition ? "SI" : "NO";
  console.log(prefix + number + " " + answer + postfix);
}

let number = +prompt("Dame un número: ");
log("El numero ", isPrime(number), " es primo");
