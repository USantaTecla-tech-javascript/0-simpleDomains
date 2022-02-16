const { Console } = require("./console");

const console = new Console();
let number = console.readNumber(`Dame un número entero`);
let digits = 0;
while (number > 0) {
  number -= number % 10;
  number /= 10;
  digits++;
}
if (digits === 0){
  digits++;
}
console.writeln(`El número ${number} tiene ${digits} digito${digits!=1?`s`:``}.`);
