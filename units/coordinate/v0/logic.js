{
  // coordinates: isDiagonal, shift, getQuadrant, toString, ...
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
}

{
  // coordinates: diagonal
  function Coordinate(x, y) {
    this.x = x;
    this.y = y;

    this.isDiagonal = function () {
      return this.x == this.y;
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
    }
  }

  let coordinate1 = new Coordinate(0, 0);
  let msg = "La coordinate " + coordinate1.toString() + " ";
  let answer = "NO";
  if (coordinate1.isDiagonal()) {
    answer = "SI";
  }
  console.log(msg + answer + " está en diagonal.");


  coordinate1.shift(1, 1);

  msg = "La coordinate " + coordinate1.toString() + " ";
  answer = "NO";
  if (coordinate1.isDiagonal()) {
    answer = "SI";
  }
  console.log(msg + answer + " está en diagonal.");

  let coordinate2 = new Coordinate(2, 1);
  msg = "La coordinate " + coordinate2.toString() + " ";
  answer = "NO";
  if (coordinate2.isDiagonal()) {
    answer = "SI";
  }
  console.log(msg + answer + " está en diagonal.");

  coordinate2.shift(-1, 0);

  msg = "La coordinate " + coordinate2.toString() + " ";
  answer = "NO";
  if (coordinate2.isDiagonal()) {
    answer = "SI";
  }
  console.log(msg + answer + " está en diagonal.");
}

{
  // coordinates: diagonal
  function Coordinate(x, y) {
    this.x = x;
    this.y = y;
    this.isDiagonal = function () {
      return this.x - this.y == 0;
    };
    this.isInverse = function () {
      return this.x + this.y == 19;
    };
    this.isHorizontal = function(coordenada) {
      return this.y == coordenada.y;
    };
    this.isVertical = function(coordenada) {
      return this.x == coordenada.x;
    };
    this.getDirection = function(coordenada) {
      if (this.isDiagonal() && coordenada.isDiagonal){
        return "diagonal";
      }
      if (this.isInverse() && coordenada.isInverse){
        return "inverse";
      }
      if (this.isHorizontal(coordenada)){
        return "horizontal";
      }
      if (this.isVertical(coordenada)){
        return "vertical";
      }
      return undefined;          
    }
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

  function showDiagonal(coordinate) {
    let answer = "NO";
    if (coordinate.isDiagonal()) {
      answer = "SI";
    }
    console.log("La coordinate " + coordinate.toString() + " "
      + answer + " está en diagonal.");
  }

  let coordinate1 = new Coordinate(0, 0);
  let coordinate2 = new Coordinate(2, 1);

  showDiagonal(coordinate1);
  showDiagonal(coordinate2);

  coordinate1.shift(1, 1);
  coordinate2.shift(-1, 0);

  showDiagonal(coordinate1);
  showDiagonal(coordinate2);

  let coordinate = new Coordinate(0, 0);
  for (let i = 0; i < 10; i++) {
    console.log(coordinate.toString());
    coordinate.shift(1, 1);
  }

  function drawPointInSquare(coordinate) {
    let msg = "";
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (coordinate.equals(new Coordinate(i, j))) {
          msg += " ";
        } else {
          msg += "*";
        }
      }
      msg += "\n";
    }
    console.log(msg + "\n");
  }

  coordinate = new Coordinate(0, 0);
  for (let i = 0; i < 10; i++) {
    drawPointInSquare(coordinate);
    coordinate.shift(1, 1);
  }

}