console.log("Accion inicial");
do {
  console.log("Accion0");
  if (Math.random() < 0.33) {
    console.log("Action1");
  } else if (Math.random() < 0.66) {
    console.log("Action2");
  } else{
    console.log("Action3");
  }
  console.log("Accion4");
} while (Math.random() < 0.5);
console.log("Accion final");