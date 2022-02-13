const { Console } = require("./console");

const console = new Console();
const dividend = console.readNumber(`Dame el dividendo: `);
const divider = console.readNumber(`Dame el divisor: `);
console.writeln(`${dividend} / ${divider} = ${integerDivision(dividend, divider).quotient} y sobran ${integerDivision(dividend, divider).remainder}`);

function integerDivision(dividend, divider){
  let integer = dividend - dividend % divider;
  return {
    quotient : integer / divider,
    remainder : dividend % divider
  };
}