const { Console } = require("./console");

const console = new Console();
const number = console.readInt("Dame un número: ");
let times = 0;
do {
  times++;
  console.writeln(`${number} * ${times} = ${number * times}`);
} while (times < 10);