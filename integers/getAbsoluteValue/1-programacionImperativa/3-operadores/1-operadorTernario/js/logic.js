const number = +prompt("Dame un número:");
const sign = number < 0 ? -1 : 1;
const absolute = number * sign;
alert("Su valor absoluto es:" + absolute);
