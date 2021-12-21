let day = 21;
let month = 3;
let year = 1968;
console.log("El " + day + " del " + month + " de " + year +
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

function afterOrEqualsInYear(day1, month1, day2, month2) {
  return day1 >= day2 && month1 == month2 || month1 > month2;
}

function beforeInYear(day1, month1, day2, month2) {
  return day1 < day2 && month1 == month2 || month1 < month2;
}
