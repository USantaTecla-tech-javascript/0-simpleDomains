const { Console } = require("./console");

const console = new Console();
let x = console.readInt("Dame un valor: ");
let y = console.readInt("Dame otro valor: ");
console.writeln("Estos son tus valores:\n" + 
  "x=" + x + "\n" +
  "y=" + y + "\n");
x = x+y;
x = x-y;
y = x+y;
console.writeln("Estos son tus valores intercambiados:\n" + 
  "x=" + x + "\n" +
  "y=" + y + "\n");
  