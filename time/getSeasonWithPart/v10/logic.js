function Date(day, month, year) {
  this.day = day;
  this.month = month;
  this.year = year;

  this.beforeOrEquals = function (date) {
    if (this.year < date.year) {
      return true;
    }
    if (this.year == date.year) {
      if (this.month < date.month) {
        return true;
      }
      if (this.month == date.month && this.day <= date.day) {
        return true;
      }
    }
    return false;
  };

  this.toString = function () {
    return this.day + " del " + this.month + " de " + this.year;
  }

}

let day = 20;
let month = 3;
let year = 1968;

let date = new Date(day, month, year);
let firstSeasons = [
  new Date(21, 3, year), 
  new Date(21, 6, year), 
  new Date(21, 9, year), 
  new Date(21, 12, year)];
let season = 3;
for (let i = 0; i < firstSeasons.length; i++) {
  if (firstSeasons[i].beforeOrEquals(date)) {
    season = i;
  }
}
let position = 0;
for (let i = 0; i < 12; i++) {
  if (new Date(21, i + 1, year).beforeOrEquals(date)) {
    position++;
  }
}
console.log();

console.log("El " + date.toString() + " cae a "
  + ["primeros", "mediados", "ultimos"][position % 3] + " "
  + ["primavera", "verano", "otoño", "invierno"][season] + ".");