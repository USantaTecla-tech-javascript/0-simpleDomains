/* función de orden superior */
function sumatorio(ini, fin, serie) {
    let sum = 0;
    for(let i=ini; i<=fin; i++){
        sum += serie(i);
    }
    return sum;
}

console.log(sumatorio(1, 5, factorial));
console.log(sumatorio(1, 5, doble));


