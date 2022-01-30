const { Console } = require("./console");

const console = new Console();
let x = console.readNumber("Dame un valor: ");
let y = console.readNumber("Dame otro valor: ");
let z = console.readNumber("Dame el último valor: ");
console.writeln("Estos son tus valores:\n" + 
  "x=" + x + "\n" +
  "y=" + y + "\n" +
  "z=" + z + "\n");
let temp = x;
x = y;
y = z;
z = temp;
console.writeln("Estos son tus valores intercambiados:\n" + 
  "x=" + x + "\n" +
  "y=" + y + "\n" +
  "z=" + z + "\n");
temp = x;
x = y;
y = z;
z = temp;
console.writeln("Estos son tus valores intercambiados:\n" + 
  "x=" + x + "\n" +
  "y=" + y + "\n" +
  "z=" + z + "\n"); 
temp = x;
x = y;
y = z;
z = temp;
console.writeln("Estos son tus valores intercambiados:\n" + 
  "x=" + x + "\n" +
  "y=" + y + "\n" +
  "z=" + z + "\n");
  