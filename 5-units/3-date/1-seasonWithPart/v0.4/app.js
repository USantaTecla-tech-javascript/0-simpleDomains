const { Console } = require("./console");

const console = new Console();
const day = console.readNumber("Escriba un día (1-30): ");
const month = console.readNumber("Escriba un mes (1-12): ");
const year = console.readNumber("Escriba un año (1-...): ");
console.writeln("El " + day + " del " + month + " de " + year +
  " cae a " + getPosition(day, month) + " " + getSeason(day, month) + ".");

function getPosition(day, month) {
  days = getDaysSinceBeginningYear(day, month) - 80;
  if (days <= 0) {
    days += 360;
  }
  let monthly = parseInt((days - 1) / 30) % 3;
  if (monthly == 1) {
    return "mediados";
  } else if (monthly == 2) {
    return "ultimos";
  }
  return "primeros";
}

function getSeason(day, month) {
  if (beforeInYear(day, month, 21, 3)) {
    return "invierno";
  }
  if (beforeInYear(day, month, 21, 6)) {
    return "primavera";
  }
  if (beforeInYear(day, month, 21, 9)) {
    return "verano";
  }
  if (beforeInYear(day, month, 21, 12)) {
    return "otoño";
  }
  return "invierno";
}

function beforeInYear(day1, month1, day2, month2) {
  return day1 < day2 && month1 == month2 || month1 < month2;
}
