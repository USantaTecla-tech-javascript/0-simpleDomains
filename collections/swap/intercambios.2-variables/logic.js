let x = +prompt("Dame un valor: ")
let y = +prompt("Dame otro valor: ")
console.log("Estos son tus valores:\n" + 
  "x = [" + x + "]\n" +
  "y = [" + y + "]\n"); 
x += y;
y = x - y;
x -= y;
console.log("Estos son tus valores intercambiados:\n" + 
  "x = [" + x + "]\n" +
  "y = [" + y + "]\n"); 

  