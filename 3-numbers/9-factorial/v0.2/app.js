const { Console } = require("./console");

const console = new Console();
let number = console.readInt("Dame un número: ");
console.writeln(`El factorial de ${number} es ${factorial(number)}`);

function factorial(number){
  if (number <= 1)
    return 1;
  return number * factorial(number-1);
}
<<<<<<< HEAD

const console = new Console();
let number = console.readNumber("Dame un número: ");
console.writeln(`El factorial de ${number} es ${factorial(number)}`);
=======
>>>>>>> 480162cd25ff907828d781503ea0ce2a83a815c2
