const { Console } = require("./console");

const console = new Console();
const day = console.readNumber(`Escriba un día (1-30): `);
const month = console.readNumber(`Escriba un mes (1-12): `);
const year = console.readNumber(`Escriba un año (1-...): `);
let days = (month - 1) * 30 + day;
let trimester = 0;
if (80 < days && days <= 350) {
  let shiftedDays = days - 81;
  trimester = (shiftedDays - shiftedDays % 90) / 90 + 1;
}
let season = `invierno`;
if (trimester == 1) {
  season = `primavera`;
} else if (trimester == 2) {
  season = `verano`;
} else if (trimester == 3) {
  season = `otoño`;
}
days -= 81;
if (days < 0) {
  days += 360;
}
const monthly = (days - days % 30) / 30;
let position = `primeros`;
if (monthly == 1) {
  position = `mediados`;
} else if (monthly == 2) {
  position = `ultimos`;
}
console.writeln(`El día ${day} del ${month} de ${year} cae a ${position} de ${season}.`);