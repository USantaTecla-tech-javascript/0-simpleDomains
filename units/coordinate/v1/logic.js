let coordinate1 = {
  x: -2,
  y: -2,
  isDiagonal: function () {
    return this.x == this.y;
  },
  toString: function () {
    return "(" + this.x + ", " + this.y + ")";
  },
  shift: function (x, y) {
    this.x += x;
    this.y += y;
  },
  getQuadrant: function () {
    let quadrant;
    if (this.x != 0 && this.y != 0) {
      quadrant = 1;
      if (this.y < 0) {
        quadrant += 2;
      }
      if (this.x > 0 && this.y < 0 || this.x < 0 && this.y > 0) {
        quadrant++;
      }
    }
    return quadrant;
  }
};

let msg = "La coordinate " + coordinate1.toString() + " ";
let answer = "NO";
if (coordinate1.isDiagonal()) {
  answer = "SI";
}
console.log(msg + answer + " está en diagonal, en el "
  + coordinate1.getQuadrant() + " cuadrante");

coordinate1.shift(1, 1);

msg = "La coordinate " + coordinate1.toString() + " ";
answer = "NO";
if (coordinate1.isDiagonal()) {
  answer = "SI";
}
console.log(msg + answer + " está en diagonal, en el "
  + coordinate1.getQuadrant() + " cuadrante");

let coordinate2 = {
  x: 2,
  y: 1,
  isDiagonal: function () {
    return this.x == this.y;
  },
  toString: function () {
    return "(" + this.x + "," + this.y + ")";
  },
  shift: function (x, y) {
    this.x += x;
    this.y += y;
  },
  getQuadrant: function () {
    let quadrant;
    if (this.x != 0 && this.y != 0) {
      quadrant = 1;
      if (this.y < 0) {
        quadrant += 2;
      }
      if (this.x > 0 && this.y < 0 || this.x < 0 && this.y > 0) {
        quadrant++;
      }
    }
    return quadrant;
  }
};

msg = "La coordinate " + coordinate2.toString() + " ";
answer = "NO";
if (coordinate2.isDiagonal()) {
  answer = "SI";
}
console.log(msg + answer + " está en diagonal, en el "
  + coordinate1.getQuadrant() + " cuadrante");

coordinate2.shift(-1, 0);

msg = "La coordinate " + coordinate2.toString() + " ";
answer = "NO";
if (coordinate2.isDiagonal()) {
  answer = "SI";
}
console.log(msg + answer + " está en diagonal, en el "
  + coordinate1.getQuadrant() + " cuadrante");
