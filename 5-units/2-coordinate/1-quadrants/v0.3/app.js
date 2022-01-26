const { Console } = require("./console");

const console = new Console();
const x = console.readInt("Dame la abcisa, x = ");
const y = console.readInt("Dame la ordenada, y = ");
let msg = `La coordenada (${x}, ${y})`;
if (quadrant === undefined) {
  msg += ` NO está en ningún`;
} else {
  msg += ` está en el ${getQuadrant(x, y)}º`;
}
msg += ` cuadrante.`;
console.writeln(msg);

function getQuadrant(x, y) {
  let quadrant;
  if (x != 0 && y != 0) {
    quadrant = 0;
    if (x > 0) {
      quadrant++;
    }
    if (y < 0) {
      quadrant += 3;
    } else if (x < 0) {
      quadrant += 2;
    }
  }
  return quadrant;
}