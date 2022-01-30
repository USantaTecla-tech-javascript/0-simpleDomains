const { Console } = require("./console");

const YEARS_PER_MILLENIA = 1000;
const CENTURIES_PER_MILLENIA = 10;
const DECADE_PER_CENTURIE = 10;
const MONTHS_PER_YEAR = 12;
const WEEKS_PER_YEAR = 52;
const DAYS_PER_YEAR = 365;
const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const SECONDS_PER_MINUTE = 60;

const console = new Console();
const years = console.readNumber("¿Qué años tienes? ");
const millennia = years / YEARS_PER_MILLENIA;
const centuries = millennia * CENTURIES_PER_MILLENIA;
const decades = centuries * DECADE_PER_CENTURIE;
const months = years * MONTHS_PER_YEAR;
const weeks = years * WEEKS_PER_YEAR;
const days = years * DAYS_PER_YEAR;
const hours = days * HOURS_PER_DAY;
const minutes = hours * MINUTES_PER_HOUR;
const seconds = minutes * SECONDS_PER_MINUTE;
console.writeln(`Aproximadamente has vivido:
  ${millennia} milenios
  ${centuries} siglos
  ${decades} decadas
  ${years} años
  ${months} meses
  ${weeks} semanas
  ${days} días
  ${hours} horas
  ${minutes} minutos
  ${seconds} segundos`);
