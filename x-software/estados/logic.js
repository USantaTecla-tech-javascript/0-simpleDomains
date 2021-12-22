let state = 0;
do {
  switch (state) {
    case 0:
      console.log("Accion inicial");
      state = 1;
      break;
    case 1:
      console.log("Accion0");
      if (Math.random() < 0.33) {
        state = 2;
      } else if (Math.random() < 0.66) {
        state = 3;
      } else {
        state = 4;
      }
      break;
    case 2:
      console.log("Action1");
      state = 5;
      break;
    case 3:
      console.log("Action2");
      state = 5;
      break;
    case 4:
      console.log("Action3");
      state = 5;
      break;
    case 5:
      console.log("Accion4");
      if (Math.random() < 0.5){
        state = 1;
      } else {
        console.log("Accion final");
        state = 6;
      }
      break;
  }
} while (state != 6);
