const { Console } = require("./console");

let console = new Console();
console.writeln(getRows(`Permutación`, getPermutations(readData())));

function readData(){
  const oneData = console.readString(`Dame un valor o un punto "." para finalizar la serie: `);
  return oneData === "." ?
      []
    :
      [oneData].concat(readData());
}

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
  return data.length === 0 ?
      []
    :
      data.length === 1 ?
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
