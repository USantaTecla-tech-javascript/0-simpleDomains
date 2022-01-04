{
  // Los lados 34, 24 y 3 NO forman un triangulo
  // Los lados 34, 24 y 3 forman un triangulo equilatero
  // Los lados 34, 24 y 3 forman un triangulo isosceles
  // Los lados 34, 24 y 3 forman un triangulo escaleno
  let a = 24;
  let b = 24;
  let c = 24;

  {
    let mayor;
    if (a >= b && a >= c) {
      mayor = a;
    } else if (b >= a && b >= c) {
      mayor = b;
    } else {
      mayor = c;
    }
    let esTriangulo = mayor < (a + b + c) - mayor;
    let msg = "Los lados " + a + ", " + b + " y " + c;
    if (!esTriangulo) {
      msg += "NO";
    }
    msg += "forman un triangulo";
    if (esTriangulo) {
      if (a == b) {
        if (a == c) {
          msg += "equilatero";
        } else {
          msg += "isosceles";
        }
      } else {
        if (b == c) {
          msg += "isosceles";
        } else {
          msg += "escaleno";
        }
      }
    }
    console.log(msg);
  }

  {
    let mayor = a;
    if (b >= mayor) {
      mayor = b;
    } 
    if (c >= mayor) {
      mayor = c;
    }
    let esTriangulo = mayor < (a + b + c) - mayor;
    let msg = "Los lados " + a + ", " + b + " y " + c;
    if (!esTriangulo) {
      msg += "NO";
    }
    msg += "forman un triangulo";
    if (esTriangulo) {
      if (a == b && b == c) {
        msg += "equilatero";
      } else if (a == b || b == c || c == a) {
        msg += "isosceles";
      } else {
        msg += "escaleno";
      }
    }
    console.log(msg);
  }

}

{
  // Los lados 34, 24 y 3 NO forman un triangulo
  // Los lados 34, 24 y 3 forman un triangulo equilatero
  // Los lados 34, 24 y 3 forman un triangulo isosceles
  // Los lados 34, 24 y 3 forman un triangulo escaleno

  function getMaximum2(x, y, z) {
    if (x >= y && x >= z) {
      return x;
    } else if (y >= x && y >= z) {
      return y;
    } else {
      return z;
    }
  }

  function getMaximum(x, y, z) {
    let mayor;
    if (x >= y) {
      mayor = x;
    } else {
      mayor = y;
    }
    if (z >= mayor) {
      mayor = z;
    }
    return mayor;
  }

  function getIsTriangle(x, y, z) {
    let maximum = getMaximum(x, y, z);
    return maximum < (x + y + z) - maximum;
  }

  function getTriangleType2(x, y, z) {
    if (x == y) {
      if (x == z) {
        return "equilatero";
      } else {
        return "isosceles";
      }
    } else {
      if (y == z) {
        return "isosceles";
      } else {
        return "escaleno";
      }
    }
    return undefined;
  }

  function getTriangleType(x, y, z) {
    if (x == y && y == z) {
      return "equilatero";
    } else if (x == y || y == z || z == x) {
      return "isosceles";
    } else {
      return "escaleno";
    }
  }

  {
    let a = 240;
    let b = 24;
    let c = 24;
    let msg = "Los lados " + a + ", " + b + " y " + c + " ";
    let isTriangle = getIsTriangle(a, b, c);
    if (!isTriangle) {
      msg += "NO ";
    }
    msg += "forman un triangulo ";
    if (isTriangle) {
      msg += getTriangleType(a, b, c);
    }
    console.log(msg);
  }

}

