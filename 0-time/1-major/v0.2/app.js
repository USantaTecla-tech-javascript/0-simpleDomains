const { Console } = require("./console");

const console = new Console();
const age = console.readNumber("Qué años tienes? ");
console.writeln(`${isAdult(age)? `Sí` : `No`} eres mayor de edad`);

function isAdult(age){
  const AGE_MAJORITY = 18;
  return age > AGE_MAJORITY;
}
