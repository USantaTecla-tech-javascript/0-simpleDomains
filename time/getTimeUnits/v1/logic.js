const MONTHS_PER_YEAR = 12;
const WEEKS_PER_YEAR = 52;
const DAYS_PER_YEAR = 365;
const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const SECONDS_PER_MINUTE = 60;
const YEARS_PER_DECADE = 10;
const DECADES_PER_CENTURY = 10;
const CENTURIES_PER_MILLENIA = 10;

let age = +prompt("Introduce tu edad: ");
let months = age * MONTHS_PER_YEAR;
let weeks = age * WEEKS_PER_YEAR;
let days = age * DAYS_PER_YEAR;
let hours = days * HOURS_PER_DAY;
let minutes = hours * MINUTES_PER_HOUR;
let seconds = minutes * SECONDS_PER_MINUTE;
let decades = age / YEARS_PER_DECADE;
let centuries = decades / DECADES_PER_CENTURY;
let millennia = centuries / CENTURIES_PER_MILLENIA;
let msg = `Aproximadamente has vivido
	${millennia} milenios
	${centuries} siglos
	${decades} decadas
	${age} años
	${months} meses
	${weeks} semanas
	${days} días
	${hours} horas
	${minutes} minutos
	${seconds} segundos
`;

age = 83 - age;
months = age * MONTHS_PER_YEAR;
weeks = age * WEEKS_PER_YEAR;
days = age * DAYS_PER_YEAR;
hours = days * HOURS_PER_DAY;
minutes = hours * MINUTES_PER_HOUR;
seconds = minutes * SECONDS_PER_MINUTE;
decades = age / YEARS_PER_DECADE;
centuries = decades / DECADES_PER_CENTURY;
millennia = centuries / CENTURIES_PER_MILLENIA;
msg = msg + `... y te quedan
	${millennia} milenios
	${centuries} siglos
	${decades} decadas
	${age} años
	${months} meses
	${weeks} semanas
	${days} días
	${hours} horas
	${minutes} minutos
	${seconds} segundos
    piensa las cosas que haces anualmente, mensualmente, ... y echa cuentas!
    Pero recueda que es aproximado! ;-)
    Carpe diem, quam minimim credula postero! Horacio (65 -VIII AEC)`
console.log(msg);
