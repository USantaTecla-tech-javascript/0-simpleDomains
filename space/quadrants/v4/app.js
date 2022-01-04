let x = +prompt("Dame la abcisa, x = ");
let y = +prompt("Dame la ordenada, y = ");

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
let msg = "La coordenada (" + x + ", " + y + ")";
if (quadrant == undefined) {
  msg += " NO está en ningún";
} else {
  msg += " está en el " + quadrant + "º";
}
msg += " cuadrante.";
console.log(msg);

