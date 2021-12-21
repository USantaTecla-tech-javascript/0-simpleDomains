let day = 12;
let month = 6;
let year = 1968;

let days = (month - 1) * 30 + day;
let trimester = 0;
if (80 < days && days <= 350) {
  trimester = parseInt((days - 81) / 90) + 1;
}
let season;
switch (trimester) {
  case 0:
    season = "invierno";
    break;
  case 1:
    season = "primavera";
    break;
  case 2:
    season = "verano";
    break;
  case 3:
    season = "otoño";
    break;
}
days -= 80;
if (days <= 0) {
  days += 360;
}
let monthly = parseInt((days - 1) / 30) % 3;
let position;
switch (monthly) {
  case 0:
    position = "primeros";
    break;
  case 1:
    position = "mediados";
    break;
  case 2:
    position = "ultimos";
    break;
}
console.log("El " + day + " del " + month + " de " + year + " cae a " + position + " " + season + ".");
