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
if (!isTriangle(sides)) {
  msg += `NO `;
}
msg += `forman un triangulo `;
if (isTriangle(sides)) {
  msg += `de tipo ${getTriangleType(sides)}`;
}
console.writeln(msg);

function isTriangle(sides) {
  let greater = sides[0];
  let sum = sides[0];
  for (let i = 1; i < sides.length; i++) {
    sum += sides[i];
    if (sides[i] > greater) {
      greater = sides[i];
    }
  }
  return greater < sum - greater;
}

function getTriangleType(sides){
  let pairs = 0;
  for (let i = 0; i < sides.length; i++) {
    for (let j = i + 1; j < sides.length; j++) {
      if (sides[i] == sides[j]) {
        pairs++;
      }
    }
  }
  return [`escaleno`, `isosceles`, ``, `equilatero`][pairs];
}
