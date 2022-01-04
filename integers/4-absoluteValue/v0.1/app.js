const { Console } = require("./console");

const console = new Console();
const number = console.readInt("Escribe un número? ");
absolute = (number<0 ? -1 : 1) * number;
console.writeln("El valor absoluto del número " + number + " es " + absolute);
