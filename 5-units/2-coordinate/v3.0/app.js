const { Console } = require("./console");

const console = new Console();
function Coordinate(x, y) {
  this.x = x;
  this.y = y;
  function isDiagonal () {
    return this.x - this.y == 0;
  };
  function isInverse() {
    return this.x + this.y == 2;
  };
  function isHorizontal(coordenada) {
    return this.x == coordenada.x;
  }
  function isVertical(coordenada) {
    return this.y == coordenada.y;
  }
  function getDirection(coordenada) {
    if (this.isDiagonal() && coordenada.isDiagonal) {
      return "diagonal";
    }
    if (this.isInverse() && coordenada.isInverse) {
      return "inverse";
    }
    if (this.isHorizontal(coordenada)) {
      return "horizontal";
    }
    if (this.isVertical(coordenada)) {
      return "vertical";
    }
    return undefined;
  };
  function toString() {
    return "(" + this.x + "," + this.y + ")";
  };
  function shift(x, y) {
    this.x += x;
    this.y += y;
  };
  function getQuadrant() {
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
  };
  function equals(coordenada) {
    return this.x == coordenada.x && this.y == coordenada.y;
  }
}

console.writeln(new Coordinate(0,1).isDiagonal());

let coordinates = [new Coordinate(0,1), new Coordinate(1,1)];
for(let coordinate of coordinates){
  console.writeln(coordinate.isDiagonal());
  console.writeln(coordinate.isHorizontal(2,2));
  console.writeln(coordinate.getDirection(new Coordinate(0,1)));
  console.writeln(coordinate.getQuadrant());
  console.writeln(coordinate.equals(new Coordinate(0,1)));
}

