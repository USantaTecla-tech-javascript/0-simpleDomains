const { Console } = require("./console");

const console = new Console();
const SIDES = 3;
const sides = [];
for (let i = 0; i < SIDES; i++) {
  sides[i] = console.readNumber(`Dame el ${i}º lado del triangulo: `);
}

let msg = `Los lados `;
for (let i = 0; i < SIDES; i++) {
  msg += `${sides[i]}${[`, `, ` y `, ` `][i]}`;
}
let greater = sides[0];
let sum = sides[0];
for (let i = 1; i < SIDES; i++) {
  sum += sides[i];
  if (sides[i] > greater) {
    greater = sides[i];
  }
}
const isTriangle = greater < sum - greater;
if (!isTriangle) {
  msg += `NO `;
}
msg += `forman un triangulo `;
if (isTriangle){
  msg += `de tipo `;
  let pairs = 0;
  for (let i = 0; i < SIDES; i++) {
    for (let j = i + 1; j < SIDES; j++) {
      if (sides[i] == sides[j]) {
        pairs++;
      }
    }
  }
  msg += [`escaleno`, `isosceles`, ``, `equilatero`][pairs];
}
console.writeln(msg);
