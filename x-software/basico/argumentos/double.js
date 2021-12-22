function doble(number){
  return 2*number;
}

function sumatorioDoble(ini, fin){
  let sum = 0;
  for(let i=ini; i<=fin; i++){
      sum += doble(i);
  }
  return sum;
}

console.log(sumatorioDoble(1,5));
