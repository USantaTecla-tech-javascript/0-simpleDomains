const { Console } = require("./console");

const console = new Console();
let number = console.readInt("Dame un número: ");
console.writeln(`El factorial de ${number} es ${factorial}`);

function factorial(number){
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  return factorial;  
}
<<<<<<< HEAD

const console = new Console();
let number = console.readNumber("Dame un número: ");
console.writeln(`El factorial de ${number} es ${factorial}`);
=======
>>>>>>> 480162cd25ff907828d781503ea0ce2a83a815c2
