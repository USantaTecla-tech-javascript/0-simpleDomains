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

function sumFirsPrimes(amount) {
  let sum = 0;
  let prime = 1;
  for (let i = 0; i < amount; i++) {
    while (!isPrime(prime)) {
      prime++;
    }
    sum += prime;
    prime++;
  }
  return sum;
}

const MAX = 100;
console.log("La suma de los " + MAX
  + " primeros primos es " + sumFirsPrimes(MAX));
