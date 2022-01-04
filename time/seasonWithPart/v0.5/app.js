const { Console } = require("./console");

const console = new Console();
let day = 21;
let month = 3;
let year = 1968;
console.writeln("El " + day + " del " + month + " de " + year +
  " cae a " + getPosition(day, month) + " " + getSeason(day, month) + ".");

function getPosition(day, month) {
  if (day >= 21 && (month - 1) % 3 == 0 || day <= 20 && (month - 2) % 3 == 0) {
    return "mediados";
  } else if (day >= 21 && (month - 2) % 3 == 0 || day <= 20 && (month - 3) % 3 == 0) {
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



