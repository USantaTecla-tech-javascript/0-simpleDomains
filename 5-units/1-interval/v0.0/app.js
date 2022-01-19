const { Console } = require("./console");

const console = new Console();
let intersection = {
  minA: -4,
  maxA: 100,
  minB: 8,
  maxB: 123,
  toString: function () {
    return "(" + this.minA + "," + this.maxA + ")" + " y " + "(" + this.minB + "," + this.maxB + ")";
  },

  isIntersected: function () {
    let a = [];
    let b = [];

    for (let a1 = this.minA; a1 <= this.maxA; a1++) {
      a.push(a1);
    }
    for (let b1 = this.minB; b1 <= this.maxB; b1++) {
      b.push(b1);
    }

    let findIntersection = [];

    for (i = 0; i < a.length; i++) {
      for (j = 0; j < b.length; j++) {
        if (a[i] === b[j]) {
          findIntersection.push(a[i]);
        }
      }
    }

    let positionMin = findIntersection[0];
    let positionMax = findIntersection[0];

    for (let k = 0; k < findIntersection.length; k++) {
      if (positionMin > findIntersection[k]) {
        positionMin = findIntersection[k];
      }
    }
    for (let m = 0; m < findIntersection.length; m++) {
      if (positionMax < findIntersection[m]) {
        positionMax = findIntersection[m];
      }
    }

    let answer = [positionMin, positionMax];
    return answer;


  },

  isUnion: function () {
    let a = [];
    let b = [];

    for (let a1 = this.minA; a1 <= this.maxA; a1++) {
      a.push(a1);
    }
    for (let b1 = this.minB; b1 <= this.maxB; b1++) {
      b.push(b1);
    }

    let positionMin = a[0];
    let positionMax = b[0];

    for (let k = 0; k < a.length; k++) {
      if (positionMin > a[k]) {
        positionMin = a[k];
      }
    }
    for (let m = 0; m < b.length; m++) {
      if (positionMax < b[m]) {
        positionMax = b[m];
      }
    }

    let answer = [positionMin, positionMax]
    return answer;
  }
}

let msg = 'Los segmentos ' + intersection.toString();
let answer = ' no tienen intersección';
if (intersection.isIntersected()) {
  answer = " tiene intersección en el punto " + intersection.isIntersected() + " y unión en " + intersection.isUnion();
}

console.writeln(msg + answer);
