function factorial(number){
  let result = 1;
  for(let i=1; i<=number; i++){
      result *= i;
  }
  return result;
}

function sumatorioFactorial(ini, fin){
  let sum = 0;
  for(let i=ini; i<=fin; i++){
      sum += factorial(i);
  }
  return sum;
}

console.log(sumatorioFactorial(1,5));