const { Console } = require("./console");

const console = new Console();
const msg = console.readString("Hay triple eco!!! Escribe algo:");
let echo = ``;
for (let i = 0; i < 3; i++) {
  for (let j = 0; j <= i; j++) {
    echo += `${msg}`;
    if (j !== i) {
      echo += `, `;
    } else { }
    echo += `!!!\n`;
  }
}
console.writeln(echo);
