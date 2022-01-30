const { Console } = require("./console");

new Console().writeln(getRows("Permutación", getPermutations(["a", "b", "c", "d", "e"])));

function getRows(title, rows) {
  return rows
    .map((row, index) => getRow(`${title}-${index}`, row))
    .reduce((previous, current) => previous + current);
}

function getRow(title, row) {
  return `${title}: ${
    row
      .map(item => `${item} `)
      .reduce((previous, current) => previous + current)}\n`;
}

function getPermutations(data) {
  return data.length === 1 ?
      [data]
    :
      data
        .map((_, pivot) =>
          getPermutations(
            data
              .filter((_, index) => index !== pivot))
            .map(permutation => permutation.concat([data[pivot]])))
          .reduce((previous, current) => previous.concat(current));
}
