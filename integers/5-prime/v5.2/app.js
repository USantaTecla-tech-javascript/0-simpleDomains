const { Console } = require("./console");

const console = new Console();
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
  console.writeln(prefix + number + " " + answer + postfix);
}

let number = +console.readInt("Dame un número: ");
log("El numero ", isPrime(number), " es primo");
