let interval = {
    min: -4,
    max: 100,
    length: function () {
        return -this.min + this.max;
    },

    midpoint: function () {
        return (-this.min + this.max) / 2;
    },
    displacedLeft: function () {
        let points = [];
        let origin = -this.min + this.min;
        let displacedMax = -this.min + this.max;

        points.push(origin, displacedMax);

        return points;

    },
    displacedRight: function () {
        let points = [];
        let origin = -this.max + this.max;
        let displacedMin = -this.max + this.min;

        points.push(displacedMin, origin);

        return points;

    },
    displacedCentral: function () {
        let points = [];
        let midMax = (-this.min + this.max) / 2;
        let midMin = -(-this.min + this.max) / 2;
        points.push(midMax, midMin);
        return points;

    },
    displacedInverse: function () {
        let points = [];

        points.push(-this.max, -this.min);
        return points;

    },

}
let msg =
    'Longitud: ' + interval.length() + '\n' +
    'Punto medio: ' + interval.midpoint() + '\n' +
    'Desplazado izquierda: ' + interval.displacedLeft() + '\n' +
    'Desplazado derecha: ' + interval.displacedRight() + '\n' +
    'Desplazado central: ' + interval.displacedCentral() + '\n' +
    'Desplazado inverso: ' + interval.displacedInverse();

console.log(msg);
