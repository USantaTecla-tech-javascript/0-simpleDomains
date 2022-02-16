const { Console } = require("./console");

const console = new Console();
const msg = console.readString("Hay triple eco!!! Escribe algo:");
const PROPAGATION = 3;
let echo = ``;
for (let i = 0; i < PROPAGATION; i++) {
  for (let j = 0; j < PROPAGATION - i; j++) {
    echo += `${msg}`;
    if (j < PROPAGATION - i - 1) {
      echo += `, `;
    } else { 
      echo += `!!!\n`;
    }
  }
}
console.writeln(echo);
