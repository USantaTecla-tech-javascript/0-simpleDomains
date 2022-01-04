const { Console } = require("./console");

const console = new Console();
let sides = [20, 24, 14];

let msg = "Los lados ";
for (let i = 0; i < sides.length; i++) {
  msg += sides[i];
  if (i == sides.length - 1) {
    msg += " ";
  } else if (i < sides.length - 2) {
    msg += ", ";
  } else {
    msg += " y ";
  }
}
let greater = sides[0];
let sum = sides[0];
for (let i = 1; i < sides.length; i++) {
  sum += sides[i];
  if (sides[i] > greater) {
    greater = sides[i];
  }
}
if (greater >= sum - greater) {
  msg += "NO";
}
msg += "forman un triangulo ";
let pairs = 0;
for (let i = 0; i < sides.length; i++) {
  for (let j = i + 1; j < sides.length; j++) {
    if (sides[i] == sides[j]) {
      pairs++;
    }
  }
}
msg += ["escaleno", "isosceles", null, "equilatero"][pairs];
console.writeln(msg);
