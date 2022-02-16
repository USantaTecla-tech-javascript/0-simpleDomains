const { Console } = require("./console");

const console = new Console();
const hours = console.readNumber("Dime la hora actual [0-23]: ");
const minutes = console.readNumber("Dime los minutos actuales [0-59]: ");
const neededHours = console.readNumber("Dime cuantas horas necesitas [0-23]: ");
const neededMinutes = console.readNumber("Dime los minutos necesitas [0-59]: ");
const MINUTES_PER_HOUR = 60;
let afterMinutes = minutes + neededMinutes;
let afterHours = hours + neededHours;
if (afterMinutes >= MINUTES_PER_HOUR){
  afterMinutes -= 60;
  afterHours++;
}
console.writeln(`Serán las ${afterHours}:${afterMinutes}`);
