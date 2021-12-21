let number = +prompt("Dame un número: ");
let acu = 0;
for (let i = 1; i < number; i++) {
  if (number % i == 0) {
    acu += i;
  }
}
let answer = number == acu ? "SI" : "NO";
console.log("El numero" + " " + number + " " 
  + answer + " es perfecto");
