let matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

function transpose(matrix) {
  let transposed = [];
  for (let i = 0; i < matrix.length; i++) {
    transposed[i] = [];
    for (let j = 0; j < matrix[0].length; j++) {
      transposed[i][j] = matrix[j][i];
    }
  }
  return transposed;
}

console.log('Array original: ' + matrix);
console.log('Array transpuesta: ' + transpose(matrix));
