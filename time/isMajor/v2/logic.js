const AGE_MAJORITY = 18;
let age = +prompt("Qué años tienes? ");
let isAdult = age > AGE_MAJORITY ? "Cierto" : "Falso";
alert("Mayor de edad? " + isAdult);
