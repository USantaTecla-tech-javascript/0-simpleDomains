const { Console } = require("./console");

const console = new Console();
const x = console.readNumber("Dame la abcisa, x = ");
const y = console.readNumber("Dame la ordenada, y = ");
let msg = `La coordenada (${x}, ${y})`;
const quadrant = getQuadrant(x, y);
if (quadrant === undefined) {
  msg += ` NO está en ningún`;
} else {
  msg += ` está en el ${quadrant}º`;
}
msg += ` cuadrante.`;
console.writeln(msg);

function getQuadrant(x, y) {
  let quadrant;
  if (x === 0 || y === 0) {
    return quadrant;
  }
  quadrant = 0;
  if (x > 0) {
    quadrant++;
  }
  if (y < 0) {
    quadrant += 3;
  } else if (x < 0) {
    quadrant += 2;
  }
  return quadrant;
}