const { Console } = require("./console");

const console = new Console();
function isPrime(number) {
  let result = false;
  if (number >= 2) {
    let next = 2;
    while (number % next != 0) {
      next++;
    }
    result = number == next;
  }
  return result;
}

function log(prefix, condition, postfix){
  const answer = condition ? "SI" : "NO";
  console.writeln(prefix + number + " " + answer + postfix);
}

let number = +console.readInt("Dame un número: ");
log("El numero ", isPrime(number), " es primo");
