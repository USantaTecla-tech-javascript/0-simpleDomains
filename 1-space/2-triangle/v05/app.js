const { Console } = require("./console");

const console = new Console();
const SIDES = 3;
const sides = [];
for (let i = 0; i < SIDES; i++) {
  sides[i] = console.readInt(`Dame el ${i}º lado del triangulo: `);
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

function getGreater(sides){
  let greater = sides[0];
  for (let i = 1; i < sides.length; i++) {
    if (sides[i] > greater) {
      greater = sides[i];
    }
  }
  return greater;
}

function getSum(sides){
  let sum = 0;
  for (let i = 0; i < sides.length; i++) {
    sum += sides[i];
  }  
}

function isTriangle(sides) {
  return getGreater(sides) < getSum(sides) - getGreater(sides);
}

function getTriangleType(sides){

  function getPairs(sides){
    let pairs = 0;
    for (let i = 0; i < SIDES; i++) {
      for (let j = i + 1; j < SIDES; j++) {
        if (sides[i] == sides[j]) {
          pairs++;
        }
      }
    }
    return pairs;
  }
  return [`escaleno`, `isosceles`, ``, `equilatero`][getPairs(sides)];
}