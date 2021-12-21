let number = +prompt("Dame un número: ");
let times = 0;
do {
  times++;
  console.log(number + " *, " + times + " = " + (number * times));
} while (times < 10);