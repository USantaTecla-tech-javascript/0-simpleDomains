let day = +prompt("Dame el día: ");
let month = +prompt("Dame el mes: ");
let year = +prompt("Dame el año: ");

let days = (month - 1) * 30 + day;
let trimester = 0;
if (80 < days && days <= 350) {
  trimester = parseInt((days - 81) / 90) + 1;
}
let season = "invierno";
if (trimester == 1) {
  season = "primavera";
} else if (trimester == 2) {
  season = "verano";
} else if (trimester == 3) {
  season = "otoño";
}
days -= 80;
if (days <= 0) {
  days += 360;
}
let monthly = parseInt((days - 1) / 30) % 3;
let position = "primeros";
if (monthly == 1) {
  position = "mediados";
} else if (monthly == 2) {
  position = "ultimos";
}
console.log("El " + day + " del " + month + " de " + year + " cae a " + position + " " + season + ".");
