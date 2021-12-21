function Coordinate(x, y) {
  this.x = x;
  this.y = y;
}
Coordinate.DIMENSION = 3;
Coordinate.prototype.isDiagonal = function () {
  return this.x - this.y == 0;
};
Coordinate.prototype.isInverse = function () {
  return this.x + this.y == Coordinate.DIMENSION-1;
};
Coordinate.prototype.isHorizontal = function (coordenada) {
  return this.x == coordenada.x;
}
Coordinate.prototype.isVertical = function (coordenada) {
  return this.y == coordenada.y;
}
Coordinate.prototype.getDirection = function (coordenada) {
  if (this.isDiagonal() && coordenada.isDiagonal()) {
    return "diagonal";
  }
  if (this.isInverse() && coordenada.isInverse()) {
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
Coordinate.prototype.toString = function () {
  return "(" + this.x + "," + this.y + ")";
};
Coordinate.prototype.shift = function (x, y) {
  this.x += x;
  this.y += y;
};
Coordinate.prototype.getQuadrant = function () {
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
Coordinate.prototype.equals = function (coordenada) {
  return this.x == coordenada.x && this.y == coordenada.y;
}

let coordinates = [new Coordinate(0,1), new Coordinate(1,1)];
for(let coordinate of coordinates){
  console.log(coordinate.isDiagonal());
  console.log(coordinate.isHorizontal(2,2));
  console.log(coordinate.getDirection(new Coordinate(0,1)));
  console.log(coordinate.getQuadrant());
  console.log(coordinate.equals(new Coordinate(0,1)));
}

