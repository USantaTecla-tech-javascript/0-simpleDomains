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

function sumPrimesUntil(max){
  let sum = 0;
  for (let i = 1; i <= max; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

const MAX = 100;
console.log("La suma en los " + MAX 
  + " primeros primos es " + sumPrimesUntil(MAX));
