let age = +prompt("Introduce tu edad: ");
let months = age * 12;
let weeks = age * 52;
let days = age * 365;
let hours = days * 24;
let minutes = hours * 60;
let seconds = minutes * 60;
let decades = age / 10;
let centuries = decades / 10;
let millennia = centuries / 10;
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

age = 84.6 - age;
months = age * 12;
weeks = age * 52;
days = age * 365;
hours = days * 24;
minutes = hours * 60;
seconds = minutes * 60;
decades = age / 10;
centuries = decades / 10;
millennia = centuries / 10;
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
