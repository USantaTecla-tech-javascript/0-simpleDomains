const { Console } = require("./console");

const console = new Console();
const number = console.readInt("Dame un número: ");
let times = 0;
while (times < 10) {
  times++;
  console.writeln(number + " * " + times + " = " + (number * times));
}