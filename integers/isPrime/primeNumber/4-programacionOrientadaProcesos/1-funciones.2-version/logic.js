function isPrime(number) {
  if (number < 2) {
    return false;
  }
  let next = 2;
  while (number % next != 0) {
    next++;
  }
  return number == next;
}

function log(prefix, condition, postfix){
  const answer = condition ? "SI" : "NO";
  console.log(prefix + number + " " + answer + postfix);
}

let number = +prompt("Dame un número: ");
log("El numero ", isPrime(number), " es primo");
