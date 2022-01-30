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
let season;
switch (trimester) {
  case 0:
    season = "invierno";
    break;
  case 1:
    season = `primavera`;
    break;
  case 2:
    season = `verano`;
    break;
  case 3:
    season = `otoño`;
    break;
}
days -= 81;
if (days < 0) {
  days += 360;
}
const monthly = (days - days % 30) / 30;
let position;
switch (monthly) {
  case 0:
    position = `primeros`;
    break;
  case 1:
    position = `mediados`;
    break;
  case 2:
    position = `ultimos`;
    break;
}
console.writeln(`El día ${day} del ${month} de ${year} cae a ${position} de ${season}.`);
