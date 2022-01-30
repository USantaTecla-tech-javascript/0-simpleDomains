const { Console } = require("./console");

const console = new Console();
const day = console.readNumber(`Escriba un día (1-30): `);
const month = console.readNumber(`Escriba un mes (1-12): `);
const year = console.readNumber(`Escriba un año (1-...): `);
let season = `invierno`;
if ((day >= 21 && month == 3 || month > 3) && (day < 21 && month == 6 || month < 6)) {
  season = `primavera`;
} else if ((day >= 21 && month == 6 || month > 6) && (day < 21 && month == 9 || month < 9)) {
  season = `verano`;
} else if ((day >= 21 && month == 9 || month > 9) && (day < 21 && month == 12 || month < 12)) {
  season = `otoño`;
}
let position = `primeros`;
if (day >= 21 && (month - 1) % 3 == 0 || day <= 20 && (month - 2) % 3 == 0) {
  position = `mediados`;
} else if (day >= 21 && (month - 2) % 3 == 0 || day <= 20 && (month - 3) % 3 == 0) {
  position = `ultimos`;
}
console.writeln(`El día ${day} del ${month} de ${year} cae a ${position} de ${season}.`);
