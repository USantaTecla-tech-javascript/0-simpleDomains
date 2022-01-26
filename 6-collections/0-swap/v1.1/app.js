const { Console } = require("./console");

const console = new Console();
let x = console.readInt("Dame un valor: ");
let y = console.readInt("Dame otro valor: ");
let z = console.readInt("Dame el último valor: ");
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
  