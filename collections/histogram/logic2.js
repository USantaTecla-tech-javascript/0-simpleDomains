let data = [23, 34, 43, 34, 56, 23, 26, 23];

  function average(values) {
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
      sum += values[i];
    }
    return parseInt(sum / values.length);
  }

  function printHistogram(values) {
    let avg = average(values);
    let line = "";
    let histogram = "";
    for (let i = 100; i > 0; i--) {
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
    }
    histogram += line;
    console.log(histogram);
  }

  printHistogram(data);
  