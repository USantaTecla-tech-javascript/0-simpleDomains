const SIDES = 3;
for (let i = 0; i < SIDES; i++) {
  sides = +prompt("Dame un valor: ");
}

let msg = "Los lados ";
for (let i = 0; i < SIDES; i++) {
  msg += sides[i] + [", ", " y ", " "][i];
}
let greater = sides[0];
let sum = sides[0];
for (let i = 1; i < SIDES; i++) {
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
for (let i = 0; i < SIDES; i++) {
  for (let j = i + 1; j < SIDES; j++) {
    if (sides[i] == sides[j]) {
      pairs++;
    }
  }
}
msg += ["escaleno", "isosceles", null, "equilatero"][pairs];
console.log(msg);
