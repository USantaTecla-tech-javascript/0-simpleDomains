let x = +prompt("Dame la abcisa, x = ");
let y = +prompt("Dame la ordenada, y = ");

let quadrant;
if (x > 0) {
  if (y > 0) {
    quadrant = 1;
  } else if (y < 0) {
    quadrant = 4;
  }
} else if (x < 0) {
  if (y > 0) {
    quadrant = 2;
  } else if (y < 0) {
    quadrant = 3;
  }
}
let msg = "La coordenada (" + x + ", " + y + ")";
if (quadrant == undefined) {
  msg += " NO está en ningún";
} else {
  msg += " está en el " + quadrant + "º";
}
msg += " cuadrante.";
console.log(msg);
