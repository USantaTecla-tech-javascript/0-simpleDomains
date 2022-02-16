const { Console } = require("./console");

const console = new Console();
let input = console.readString(`¿Dame un mensaje terminado en "."?: `);
let characters = 0;
while(input[characters] !== `.`) //{
  characters++;
//}
console.writeln(`Tu mensaje "${input}" tiene ${characters} caracteres significativos, sin contar el punto final!`);
