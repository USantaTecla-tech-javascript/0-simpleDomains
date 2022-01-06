const { Console } = require("./console");

function printMultiplyTable(number) {
  for (let i = 1; i < 10; i++) {
    console.writeln(number + " * " + i + " = " + number * i);
  }
}

const console = new Console();
const number = console.readInt("Dame un número: ");
printMultiplyTable(number);

