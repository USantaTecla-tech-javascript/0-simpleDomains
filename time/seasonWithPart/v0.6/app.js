const { Console } = require("./console");

const console = new Console();
let day = 21;
let month = 3;
let year = 1968;
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
  let days = getDaysSinceBeginningYear(day, month);
  let trimester = 0;
  if (80 < days && days <= 350) {
    trimester = parseInt((days - 81) / 90) + 1;
  }
  if (trimester == 1) {
    return "primavera";
  }
  if (trimester == 2) {
    return "verano";
  }
  if (trimester == 3) {
    return "otoño";
  }
  return "invierno";
}

function getDaysSinceBeginningYear(day, month) {
  return (month - 1) * 30 + day;;
}



