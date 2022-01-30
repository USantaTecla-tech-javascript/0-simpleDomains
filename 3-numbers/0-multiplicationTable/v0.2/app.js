const { Console } = require("./console");

const console = new Console();
const number = console.readNumber("Dame un número: ");
let times = 0;
while (times < 10) {
  times++;
  console.writeln(`${number} * ${times} = ${number * times}`);
}