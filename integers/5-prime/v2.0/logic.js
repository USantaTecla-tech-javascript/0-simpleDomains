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

function sumPrimes(amount) {
  let sum = 0;
  let prime = 1;
  do {
    if (isPrime(prime)) {
      amount--;
      sum += prime;
    }
    prime++;
  } while (amount > 0);
  return sum;
}

const MAX = 100;
console.log("La suma de los " + MAX
  + " primeros primos es " + sumPrimes(MAX));
