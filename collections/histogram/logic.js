let data = [5, 7, 5, 12, 1, 0, 1];

function average(values) {
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    sum += values[i];
  }
  return parseInt(sum / values.length);
}

function max(values){
  let position = 0;
  for(let i=1; i<values.length; i++){
    if (values[position] < values[i]){
      position = i;
    }
  }
  return values[position];
}

function printHistogram(values) {
  const avg = average(values);
  let histogram = "";
  for (let i = max(values); i > 0; i--) {
    let line = "";
    for (let j = 0; j < values.length; j++) {
      if (i == avg) {
        line += "-";
      } else if (i <= values[j]) {
        line += "*";
      } else if (i > values[j]) {
        line += " ";
      }
    }
    line += "\n";
    histogram += line;
  }
  console.log(histogram);
}

printHistogram(data);
