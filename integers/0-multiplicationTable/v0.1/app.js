const { Console } = require("./console");

const console = new Console();
const number = console.readInt("Dame un número: ");
let times = 1;
while (times <= 10) {
  console.writeln(number + " * " + times + " = " + (number * times));
  times++;
}
