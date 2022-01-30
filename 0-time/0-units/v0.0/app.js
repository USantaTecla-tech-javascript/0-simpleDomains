const { Console } = require("./console");

const console = new Console();
let years = console.readNumber("¿Qué años tienes? ");
let millennia = years / 1000;
let centuries = millennia * 10;
let decades = centuries * 10;
let months = years * 12;
let weeks = years * 52;
let days = years * 365;
let hours = days * 24;
let minutes = hours * 60;
let seconds = minutes * 60;
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
