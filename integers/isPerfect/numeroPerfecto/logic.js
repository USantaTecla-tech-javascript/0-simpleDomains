function isPerfect(number) {
  let acu = 0;
  for (let i = 1; i < number; i++) {
    if (number % i == 0) {
      acu += i;
    }
  }
  return number == acu;
}

function log(prefix, condition, postfix) {
  let answer = condition ? "SI" : "NO";
  console.log(prefix + number + " " + answer + postfix);
}

let number = +prompt("Dame un número: ");
log("El numero ", isPerfect(number), " es perfecto")
