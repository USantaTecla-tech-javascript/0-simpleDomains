const { Console } = require("./console");

const console = new Console();
const x = console.readNumber("Dame la abcisa, x = ");
const y = console.readNumber("Dame la ordenada, y = ");

let quadrant;
if (x != 0 && y != 0) {
  quadrant = 1;
  if (y < 0) {
    quadrant += 2;
  }
  if (x > 0 && y < 0 || x < 0 && y > 0) {
    quadrant++;
  }
}
let msg = `La coordenada (${x}, ${y})`;
if (quadrant === undefined) {
  msg += ` NO está en ningún`;
} else {
  msg += ` está en el ${quadrant}º`;
}
msg += ` cuadrante.`;
console.writeln(msg);



