const { Console } = require("./console");

const console = new Console();
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

let x = +console.readInt("Dame la abcisa, x = ");
let y = +console.readInt("Dame la ordenada, y = ");
const quadrant = getQuadrant(x, y);
let msg = "La coordenada (" + row + ", " + column + ")";
if (quadrant == undefined) {
  msg += " NO está en ningún"
} else {
  msg += " está en el " + quadrant + "º";
}
msg += " cuadrante.";
console.writeln(msg);
