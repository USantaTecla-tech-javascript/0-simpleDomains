let a = +prompt("Dame un lado del triangulo: ")
let total = a
let mayor = a
let b = +prompt("Dame otro lado del triangulo: ")
total = total + b
mayor = mayor > b ? mayor : b
let c = +prompt("Dame el último lado del triangulo: ")
total = total + c
mayor = mayor > c ? mayor : c
let isTriangle = total - mayor > mayor
let msg = isTriangle ? "SI" : "NO" 
let equilateral = a == b && b == c ? "equilateralo" : ""
let isosceles = a == b || b == c ? "isosceles" : ""
let msgType = equilateral !== "" ? equilateral : isosceles
let scalene = a != b && b != c && c != a ? "scaleno" : ""
msgType = scalene !== "" ? scalene : msgType
msgType = isTriangle ? "de tipo " + msgType : ""
alert("Los lados " + a + ", " + b + ", " + c + " " 
  + msg + " forman un triangulo " + msgType)
  