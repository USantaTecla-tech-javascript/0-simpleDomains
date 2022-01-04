const { Console } = require("./console");

const console = new Console();
let age = +console.readInt("Qué años tienes? ");
let isAdult = age > 18;
alert("Mayor de edad? " + isAdult);
