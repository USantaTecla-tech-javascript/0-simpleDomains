const { Console } = require("./console");

const console = new Console();
let input;
do {
  input = console.readString(`¿Qué piensas?: `);
  if (input === ``) //{
    console.writeln(`Error!!! Es imposible no pensar en nada! 8-o`);
  //}
} while(input === ``);
console.writeln(`Ahora ya sé que piensas "${input}"`);
