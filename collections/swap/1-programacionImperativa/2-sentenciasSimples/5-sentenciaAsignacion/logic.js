let x = prompt("Dame un valor: ");
let y = prompt("Dame otro valor: ");
console.log("Estos son tus valores:\n" + 
  "x = [" + x + "]\n" +
  "y = [" + y + "]\n");
let temp = x;
x = y;
y = temp;
console.log("Estos son tus valores intercambiados:\n" + 
  "x = [" + x + "]\n" +
  "y = [" + y + "]\n");
