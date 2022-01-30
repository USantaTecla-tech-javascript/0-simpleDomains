const { Console } = require("./console");

const console = new Console();
const years = console.readNumber("¿Qué años tienes? ");
const millennia = years / 1000;
const centuries = millennia * 10;
const decades = centuries * 10;
const months = years * 12;
const weeks = years * 52;
const days = years * 365;
const hours = days * 24;
const minutes = hours * 60;
const seconds = minutes * 60;
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
