const { Console } = require("./console");

const console = new Console();
function getQuadrant(x, y) {
  if (x > 0) {
    if (y > 0) {
      return 1;
    } else if (y < 0) {
      return 4;
    }
  } else if (x < 0) {
    if (y > 0) {
      return 2;
    } else if (y < 0) {
      return 3;
    }
  }
  return undefined;
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