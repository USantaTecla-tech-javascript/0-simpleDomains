const { Console } = require("./console");

function writeMultiplyTable(number) {
  for (let i = 1; i <= 10; i++) {
    console.writeln(`${number} * ${i} = ${number * i}`);
  }
}

const console = new Console();
const number = console.readInt("Dame un número: ");
writeMultiplyTable(number);
