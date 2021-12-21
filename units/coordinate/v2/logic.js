function Coordinate(x, y) {
  this.x = x;
  this.y = y;
  this.isDiagonal = function () {
    return this.x - this.y == 0;
  };
  this.isInverse = function () {
    return this.x + this.y == 2;
  };
  this.isHorizontal = function (coordenada) {
    return this.x == coordenada.x;
  }
  this.isVertical = function (coordenada) {
    return this.y == coordenada.y;
  }
  this.getDirection = function (coordenada) {
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
  this.toString = function () {
    return "(" + this.x + "," + this.y + ")";
  };
  this.shift = function (x, y) {
    this.x += x;
    this.y += y;
  };
  this.getQuadrant = function () {
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
  this.equals = function (coordenada) {
    return this.x == coordenada.x && this.y == coordenada.y;
  }
}