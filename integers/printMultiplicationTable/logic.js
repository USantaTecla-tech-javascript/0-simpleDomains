{
  // Tablas de multiplicar
  let table = 3;
  
  {
    let times = 1;
    while (times <= 10) {
      console.log(table + " * " + times + " = " + (table * times));
      times++; // times = times + 1;
    }
  }

  {
    let times = 0;
    while (times < 10) {
      times++;
      console.log(table + " * " + times + " = " + (table * times));
    }
  }

  {
    let times = 0;
    do {
      times++;
      console.log(table + " *, " + times + " = " + (table * times));
    } while (times < 10);
  }

  {
    for (let times = 1; times <= 10; times++) {
      console.log(table + " *, " + times + " = " + (table * times));
    }
  }

}

{
  // Las 10 primeras tablas de multiplicar
  function showMultiplyTable(number) {
    for (let i = 1; i < number; i++) {
      console.log(number + " * " + i + " = " + number * i);
    }
  }

  for (let i = 1; i < 10; i++) {
    showMultiplyTable(i);
  }
}